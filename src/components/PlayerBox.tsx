import React from "react";
import styled, { css } from "styled-components";
import { Game_playerOrder, Game_plantMarket, PlantResourceType, Color, ActionType, Phase } from "../generatedTypes";
import { PlantCard } from "./plants/PlantCard";
import { playerColors, ResourceType } from "../constants";
import { useMe } from "../hooks/useMe";
import { ResourceIcon } from "./resources/ResourceIcon";
import { CityIcon } from "./cities/CityIcon";
import { useGame } from "../hooks/useGame";
import { PowerCart } from "../hooks/usePowerCart";
import { useActionOnMe } from "../hooks/useActionOnMe";
import { DiscardCart } from "../hooks/useDiscardCart";

interface PlayerBoxProps {
  player: Game_playerOrder;
  powerCart: PowerCart;
  discardCart: DiscardCart;
}

export const PlayerBox: React.FC<PlayerBoxProps> = ({ player, powerCart, discardCart }) => {
  const me = useMe();
  const { cities, playerOrder, plantRankBought, plantPhaseEvents, phase } = useGame();
  const powerActionOnMe = useActionOnMe(ActionType.POWER_UP);
  const discardActionOnMe = useActionOnMe(ActionType.DISCARD_PLANT);

  const plantEvent = plantPhaseEvents.find((e) => e.player.id === player.id);

  const is2P = playerOrder.length === 2;

  const plants = player.plants ?
    player.plants
      .filter((p) => p.plant.rank !== plantRankBought)
      .sort((a, b) => a.plant.rank - b.plant.rank) :
    [];
  const plantsOrFrames = Array(is2P ? 4 : 3).fill(true).map((_, i) => plants[i] || null);

  const numCities = React.useMemo(() => {
    return cities.filter((cityInstance) => (
      cityInstance.players.some((p) => p.id === player.id)
    )).length
  }, [cities]);

  const resourceDisplay: Array<{ type: ResourceType; owned: number }> = Object.keys(player.resources)
    .filter((resourceType) => player.resources[resourceType as ResourceType] > 0)
    .map((resourceType) => ({
      type: resourceType as ResourceType,
      owned: player.resources[resourceType as ResourceType],
    }));

  const isPlantSelectable = (powerActionOnMe || discardActionOnMe) && me.id === player.id;

  const isPlantSelected = (plant: Game_plantMarket): boolean => {
    if (powerActionOnMe) {
      return powerCart.plants.some(p => p.id === plant.id)
    }

    if (discardActionOnMe) {
      return discardCart.selectedPlant && discardCart.selectedPlant.id === plant.id;
    }

    return false;
  }

  const handlePlantClick = (plant: Game_plantMarket): void => {
    if (powerActionOnMe && me.id === player.id) {
      powerCart.togglePlant(plant);
    } else if (discardActionOnMe && me.id === player.id) {
      discardCart.togglePlant(plant);
    }
  }

  return (
    <Container color={player.color} is2P={is2P}>
      {phase === Phase.PLANT && plantEvent && <PlantEventNotifier color={player.color}>
        {plantEvent.plant ? `Bought the ${plantEvent.plant.plant.rank}` : "Passed"}
      </PlantEventNotifier>}
      <Name>
        {`${player.user.username}${player.id === me.id ? " (you)" : ""}`}
      </Name>
      <MoneyAndCities is2P={is2P}>
        <NumberStrikethrough>
            <div>${player.money}</div>
            <div>{/* TODO */}</div>
        </NumberStrikethrough>
        <NumberStrikethrough>
            <div>
              <span>{numCities}</span>
              <span className="house-icon"><CityIcon color={playerColors[player.color]} /></span>
            </div>
            <div />
          </NumberStrikethrough>
      </MoneyAndCities>
      <BottomSection is2P={is2P}>
        <LeftColumn>
          <Plants is2P={is2P}>
            {plantsOrFrames.map((plant, idx) => (
              plant ? (
                <PlantContainer
                  key={plant.plant.rank}
                  selectable={isPlantSelectable}
                  onClick={() => handlePlantClick(plant)}
                  isSelected={isPlantSelected(plant)}
                >
                  <PlantCard
                    height={32}
                    {...plant.plant}
                  />
                </PlantContainer>
              ) : (
                <PlantContainer key={`EMPTY${idx}`} selectable={false} isSelected={false}>
                  <PlantFrame />
                </PlantContainer>
              )
            ))}
          </Plants>
        </LeftColumn>
        <RightColumn is2P={is2P}>
          {resourceDisplay.map(({ owned, type }) => (
            <ResourceContainer key={type}>
              <div className="resource-icon">
                <ResourceIcon type={type.toUpperCase() as PlantResourceType} withColor />
              </div>
              <div>{owned}</div>
            </ResourceContainer>
          ))}
        </RightColumn>
      </BottomSection>
    </Container>
  );
}

const Container = styled.div<{ color: Color; is2P: boolean; }>`
  display: flex;
  flex-direction: column;
  width: ${({ is2P }) => is2P ? 212 : 160}px;
  height: 208px;
  z-index: 1001;
  background-color: #ddd;
  border: 4px solid ${({ color }) => playerColors[color as Color]};
  position: relative;
`;

const MoneyAndCities = styled.div<{ is2P: boolean; }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ is2P }) => is2P ? 0 : 4}px;
`;

const PlantEventNotifier = styled.div<{ color: Color }>`
  background-color: ${({ color }) => playerColors[color as Color]};
  height: 32px;
  position: absolute;
  bottom: calc(100% + 4px);
  left: -4px;
  width: calc(100% + 8px);
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

const PlantContainer = styled.div<{ selectable: boolean; isSelected: boolean }>`
  border: 2px solid #ddd;
  border-radius: 4px;

  ${({ selectable }) => selectable ? css`
    :hover {
      border: 2px solid black;
      cursor: pointer;
    }
  ` : ""}

  ${({ isSelected }) => isSelected ? css`
    border: 2px solid black;
` : ""}
`;

const ResourceContainer = styled.div`
  height: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  
  .resource-icon {
    height: 16px;
    width: 16px;
    margin-left: 2px;
    margin-right: 2px;
    display: flex;
  }
`;

const BottomSection = styled.div<{ is2P: boolean; }>`
  flex: 1;
  display: flex;
  flex-direction: ${({ is2P }) => is2P ? "column" : "row"};
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div<{ is2P: boolean; }>`
  display: flex;
  flex-direction: ${({ is2P }) => is2P ? "row" : "column"};
  align-items: center;
  flex: 1;
`;

const Plants = styled.div<{ is2P: boolean; }>`
  border-${({ is2P }) => is2P ? "bottom" : "right"}: 1px solid black;
  padding: 2px;
  justify-self: flex-end;
  display: flex;
  flex-direction: ${({ is2P }) => is2P ? "row" : "column"};
  flex-wrap: wrap;
`;

const PlantFrame = styled.div`
  height: 32px;
  width: 96px;
  border: 1px solid black;
  border-radius: 2px;
`;

const Name = styled.div`
  padding: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  margin-bottom: 4px;

  > span:nth-child(2) {
    margin-left: 4px;
  }
`;

const NumberStrikethrough = styled.div`
  padding: 4px;

  > div {
    margin-bottom: 4px;
    height: 18px;
    display: flex;
  }

  .house-icon {
    height: 16px;
    margin-left: 4px;
  }
`;
