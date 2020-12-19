import React from "react";
import styled, { css } from "styled-components";
import { PlantResourceType, Color, ActionType, Phase, GameState_playerOrder, GetCurrentUser, GetPlants_fetchPlants } from "../generatedTypes";
import { PlantCard } from "./plants/PlantCard";
import { playerColors, ResourceType } from "../constants";
import { useMe } from "../hooks/useMe";
import { ResourceIcon } from "./resources/ResourceIcon";
import { CityIcon } from "./cities/CityIcon";
import { useGame } from "../hooks/useGame";
import { useActionOnMe } from "../hooks/useActionOnMe";
import { CartsContext } from "./CartsContext";
import { usePlantGetter } from "../hooks/usePlantGetter";

interface PlayerBoxProps {
  player: GameState_playerOrder;
}

export const PlayerBox: React.FC<PlayerBoxProps> = ({ player }) => {
  const me = useMe();
  const isMe = me && me.username === player.username;
  const { state } = useGame();
  const { plantPhaseEvents, playerOrder, cityList, info: { phase } } = state;
  const powerActionOnMe = useActionOnMe(ActionType.POWER_UP);
  const discardActionOnMe = useActionOnMe(ActionType.DISCARD_PLANT);
  const { discardCart, powerCart, cityCart } = React.useContext(CartsContext);
  const getPlant = usePlantGetter();

  const plantEvent = plantPhaseEvents.find((e) => e.username === player.username);

  const is2P = playerOrder.length === 2;

  const plants = player.plantIds ?
    player.plantIds
      .map(getPlant)
      .sort((a, b) => a.rank - b.rank) :
    [];
  const plantsOrFrames = Array(is2P ? 4 : 3).fill(true).map((_, i) => plants[i] || null);

  const numCities = React.useMemo(() => {
    return cityList.filter((cityInstance) => (
      cityInstance.occupants.some((name) => name === player.username)
    )).length
  }, [cityList]);

  const resourceDisplay: Array<{ type: ResourceType; owned: number }> = Object.keys(player.resources)
    .filter((resourceType) => player.resources[resourceType as ResourceType] > 0)
    .map((resourceType) => ({
      type: resourceType as ResourceType,
      owned: player.resources[resourceType as ResourceType],
    }));

  const isPlantSelectable = (powerActionOnMe || discardActionOnMe) && isMe;

  const isPlantSelected = (plant: GetPlants_fetchPlants): boolean => {
    if (powerActionOnMe) {
      return powerCart.plants.some(p => p.id === plant.id)
    }

    if (discardActionOnMe) {
      return discardCart.selectedPlant && discardCart.selectedPlant.id === plant.id;
    }

    return false;
  }

  const handlePlantClick = (plant: GetPlants_fetchPlants): void => {
    if (powerActionOnMe && isMe) {
      powerCart.togglePlant(plant);
    } else if (discardActionOnMe && isMe) {
      discardCart.togglePlant(plant);
    }
  }

  let adjustedMoney = player.money;
  let adjustedCities = numCities;
  if (isMe) {
    adjustedMoney -= cityCart.cost;
    adjustedCities += cityCart.cityIds.length;
  }

  return (
    <Container color={player.color} is2P={is2P}>
      {phase === Phase.PLANT && plantEvent && <PlantEventNotifier color={player.color}>
        {plantEvent.plantId ? `Bought the ${getPlant(plantEvent.plantId).rank}` : "Passed"}
      </PlantEventNotifier>}
      <Name>
        {`${player.username}${isMe ? " (you)" : ""}`}
      </Name>
      <MoneyAndCities is2P={is2P}>
        <NumberStrikethrough struck={adjustedMoney !== player.money}>
            <div>${player.money}</div>
            <div>
              {adjustedMoney !== player.money ? `${adjustedMoney < 0 ? "-" : ""}$${Math.abs(adjustedMoney)}` : ""}
            </div>
        </NumberStrikethrough>
        <NumberStrikethrough struck={adjustedCities !== numCities}>
            <div>
              <span>{numCities}</span>
              <span className="house-icon"><CityIcon color={playerColors[player.color]} /></span>
            </div>
            <div>{adjustedCities !== numCities ? adjustedCities : ""}</div>
          </NumberStrikethrough>
      </MoneyAndCities>
      <BottomSection is2P={is2P}>
        <LeftColumn>
          <Plants is2P={is2P}>
            {plantsOrFrames.map((plant, idx) => (
              plant ? (
                <PlantContainer
                  key={plant.rank}
                  selectable={isPlantSelectable}
                  onClick={() => handlePlantClick(plant)}
                  isSelected={isPlantSelected(plant)}
                >
                  <PlantCard
                    height={32}
                    {...plant}
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
  justify-content: center;
  
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

const NumberStrikethrough = styled.div<{ struck?: boolean }>`
  padding: 4px;

  ${({ struck }) => struck ? css`
    > div:first-child {
      text-decoration: line-through;
    }
  ` : ''}

  > div:nth-child(2) {
    color: red;
  }

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
