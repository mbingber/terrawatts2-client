import React from "react";
import styled from "styled-components";
import { Game_playerOrder, ActionType, BidOnPlant, BidOnPlantVariables } from "../../generatedTypes";
import { playerColors } from "../../constants";
import { PlantCard } from "../plants/PlantCard";
import { useGame } from "../../hooks/useGame";
import { useMe } from "../../hooks/useMe";
import { useActionOnMe } from "../../hooks/useActionOnMe";
import { BID_ON_PLANT_MUTATION } from "../../graphql/bidOnPlantMutation";
import { useGameMutation } from "../../hooks/useGameMutation";
import { Button, Input } from "semantic-ui-react";

interface AuctionPanelProps {}

export const AuctionPanel: React.FC<AuctionPanelProps> = () => {
  const { playerOrder: players, auction, id, plantPhaseEvents } = useGame();
  const me = useMe();
  const actionOnMe = useActionOnMe(ActionType.BID_ON_PLANT);

  const [bidOnPlant, { loading }] = useGameMutation<BidOnPlant, BidOnPlantVariables>(BID_ON_PLANT_MUTATION);
  const [isPassState, setIsPass] = React.useState<boolean>(false);

  const [bid, setBid] = React.useState<number>(auction.bid + 1);

  React.useEffect(() => {
    if (auction.bid >= bid) {
      setBid(auction.bid + 1);
    }
  }, [bid, auction.bid]);
  
  const { clockwiseOrder = 0 } = players.find((p) => p.id === me.id) || {};

  const getRelativeOrder = (p: Game_playerOrder) =>
    (p.clockwiseOrder + players.length - clockwiseOrder) % players.length;
  
  const auctionOrder = players
    .filter((player) => (plantPhaseEvents || []).every((e) => e.player.id !== player.id))
    .filter((player) => (auction.passedPlayers || []).every((p) => p.id !== player.id))
    .sort((a, b) => getRelativeOrder(a) - getRelativeOrder(b));

  const handleInputChange = (e: React.ChangeEvent) => {
    const newBid = Number((e.target as HTMLInputElement).value);

    if (!newBid) {
      setBid(0);
    } else {
      setBid(newBid);
    }
  }

  const handleBidSubmit = (isPass: boolean = false) => {
    setIsPass(isPass);
    
    bidOnPlant({
      variables: {
        gameId: id,
        meId: me.id,
        bid: isPass ? null : bid
      }
    });
  }
  
  const drawSector = (player: Game_playerOrder, index: number) => {
    const numRemaining = auctionOrder.length;
    const theta = 2 * Math.PI / numRemaining;
    const R = 0.9;

    const theta0 = theta * index;
    const x1 = R * Math.cos(theta0 - theta / 2);
    const y1 = R * Math.sin(theta0 - theta / 2);
    const x2 = R * Math.cos(theta0 + theta / 2);
    const y2 = R * Math.sin(theta0 + theta / 2);
    const xName = 1.02 * R * Math.cos(theta0);
    const yName = 1.02 * R * Math.sin(theta0);
    const xBid = 0.7 * R * Math.cos(theta0);
    const yBid = 0.7 * R * Math.sin(theta0);

    const textRotation = theta0 * 180 / Math.PI + 90;
    const { username } = player.user;
    const name = `${username.slice(0, 12)}${username.length > 12 ? "..." : ""}`;

    const isActive = auction.activePlayer.id === player.id;
    const isLeading = auction.leadingPlayer.id === player.id;

    return (
      <React.Fragment key={player.id}>
        <path
          fill={playerColors[player.color]}
          d={`
            M 0 0
            L ${x1} ${y1}
            A ${R} ${R} 0 0 1 ${x2} ${y2}
            Z
          `}
        />
        {(index > 0 || auctionOrder[0].id !== me.id) && (
          <g transform={`translate(${xName}, ${yName}) rotate(${textRotation})`}>
            <text x={0} y={0} textAnchor="middle" style={{ fontSize: "0.125" }}>{name}</text>
          </g>
        )}
        {isLeading && (
          <text x={xBid} y={yBid} textAnchor="middle" alignmentBaseline="middle" style={{ fontSize: 0.25 }} >{auction.bid}</text>
        )}
        {isActive && (
          <text x={xBid} y={yBid} textAnchor="middle" alignmentBaseline="middle" style={{ fontSize: 0.25 }} >!</text>
        )}
      </React.Fragment>
    );
  }
  
  return (
    <Container>
      <SvgContainer>
        <svg width="100%" height="100%" viewBox="-1 -1 2 2">
          {auctionOrder.map(drawSector)}
        </svg>
        <PlantSpacer>
          <PlantCard height={28} {...auction.plant.plant} />
        </PlantSpacer>
      </SvgContainer>
      {auctionOrder[0].id === me.id && (
        <BidForm>
          <div>
            <Input type="number" step={1} min={auction.bid + 1} value={bid || ""} onChange={handleInputChange} />
          </div>
          <Button.Group>
            <Button
              primary
              disabled={!actionOnMe || bid <= auction.bid || bid > me.money || loading}
              loading={loading && !isPassState}
              onClick={() => handleBidSubmit()}
            >Bid</Button>
            <Button.Or />
            <Button 
              secondary
              disabled={!actionOnMe || loading}
              loading={loading && isPassState}
              onClick={() => handleBidSubmit(true)}
            >Pass</Button>
          </Button.Group>
        </BidForm>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  padding: 12px;
`;

const SvgContainer = styled.div`
  width: 188px;
  height: 188px;
  position: relative;
`;

const PlantSpacer = styled.div`
  position: absolute;
  top: calc(50% - 14px);
  left: calc(50% - 42px);
  transform: rotate(-90deg);
`;

const BidForm = styled.div`
  div:first-child {
    margin-bottom: 4px;
  }

  input {
    width: 64px;
  }

  display: flex;
  flex-direction: column;

  button {
    width: 64px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;
