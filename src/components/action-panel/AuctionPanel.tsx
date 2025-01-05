import React from "react";
import styled from "styled-components";
import { ActionType, BidOnPlant, BidOnPlantVariables, GameState_playerOrder } from "../../generatedTypes";
import { playerColors } from "../../constants";
import { PlantCard } from "../plants/PlantCard";
import { useGame } from "../../hooks/useGame";
import { useMe } from "../../hooks/useMe";
import { useActionOnMe } from "../../hooks/useActionOnMe";
import { BID_ON_PLANT_MUTATION } from "../../graphql/bidOnPlantMutation";
import { useGameMutation } from "../../hooks/useGameMutation";
import { Button, Input, Checkbox } from "semantic-ui-react";
import { usePlantGetter } from "../../hooks/usePlantGetter";

interface AuctionPanelProps {}

export const AuctionPanel: React.FC<AuctionPanelProps> = () => {
  const { id, state } = useGame();
  const { auction, playerOrder: players, plantPhaseEvents } = state;
  const me = useMe();
  const actionOnMe = useActionOnMe(ActionType.BID_ON_PLANT);
  const getPlant = usePlantGetter();

  const [bidOnPlant, { loading }] = useGameMutation<BidOnPlant, BidOnPlantVariables>(BID_ON_PLANT_MUTATION);
  const [isPassState, setIsPass] = React.useState<boolean>(false);

  const [bid, setBid] = React.useState<number>(auction.bid + 1);
  const [isAutobid, setAutobid] = React.useState(false);

  const bidIsDisabled = !me || !actionOnMe || bid <= auction.bid || bid > me.money || loading;
  
  React.useEffect(() => {
    if (auction.bid >= bid) {
      setBid(auction.bid + 1);
      setAutobid(false);
    }
  }, [auction.bid]);

  React.useEffect(() => {
    if (!bidIsDisabled && isAutobid && auction.bid < bid) {
      bidOnPlant({
        variables: {
          gameId: id,
          bid: auction.bid + 1
        },
      })
    }
  }, [auction.bid, bidIsDisabled, isAutobid]);
  
  const { clockwiseOrder = 0 } = me && players.find((p) => p.username === me.username) || {};

  const getRelativeOrder = (p: GameState_playerOrder) =>
    (p.clockwiseOrder + players.length - clockwiseOrder) % players.length;
  
  const auctionOrder = players
    .filter((player) => (plantPhaseEvents || []).every((e) => e.username !== player.username))
    .filter((player) => (auction.passed || []).every((p) => p !== player.username))
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
        bid: isPass ? null : bid
      }
    });
  }
  
  const drawSector = (player: GameState_playerOrder, index: number) => {
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
    const { username } = player;
    const name = `${username.slice(0, 12)}${username.length > 12 ? "..." : ""}`;

    const isActive = auction.active === username;
    const isLeading = auction.leader === username;

    return (
      <React.Fragment key={player.username}>
        <path
          fill={playerColors[player.color]}
          d={`
            M 0 0
            L ${x1} ${y1}
            A ${R} ${R} 0 0 1 ${x2} ${y2}
            Z
          `}
        />
        {(!me || index > 0 || auctionOrder[0].username !== me.username) && (
          <g transform={`translate(${xName}, ${yName}) rotate(${textRotation})`}>
            <text x={0} y={0} textAnchor="middle" style={{ fontSize: "0.125" }}>{name}</text>
          </g>
        )}
        {isLeading && (
          <text
            x={xBid}
            y={yBid}
            textAnchor="middle"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            style={{ fontSize: 0.25 }}
          >{auction.bid}</text>
        )}
        {isActive && (
          <text
            x={xBid}
            y={yBid}
            textAnchor="middle"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            style={{ fontSize: 0.25 }}
          >!</text>
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
          <PlantCard height={28} {...getPlant(auction.plantId)} />
        </PlantSpacer>
      </SvgContainer>
      {me && auctionOrder[0].username === me.username && (
        <BidForm>
          <Checkbox label="Autobid" checked={isAutobid} onClick={() => setAutobid(!isAutobid)} />
          <div>
            <Input type="number" step={1} min={auction.bid + 1} value={bid || ""} onChange={handleInputChange} />
          </div>
          <Button.Group vertical>
            <Button
              primary
              disabled={bidIsDisabled}
              loading={loading && !isPassState}
              onClick={() => handleBidSubmit()}
            >Bid</Button>
            <Button 
              secondary
              disabled={!me || !actionOnMe || loading}
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
