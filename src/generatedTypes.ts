

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: BidOnPlant
// ====================================================

export interface BidOnPlant_bidOnPlant_map {
  name: string;
}

export interface BidOnPlant_bidOnPlant_playerOrder_user {
  id: string;
  username: string;
}

export interface BidOnPlant_bidOnPlant_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BidOnPlant_bidOnPlant_playerOrder_plants_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface BidOnPlant_bidOnPlant_playerOrder_plants {
  id: string;
  plant: BidOnPlant_bidOnPlant_playerOrder_plants_plant;
}

export interface BidOnPlant_bidOnPlant_playerOrder {
  id: string;
  clockwiseOrder: number;
  user: BidOnPlant_bidOnPlant_playerOrder_user;
  color: Color;
  money: number;
  resources: BidOnPlant_bidOnPlant_playerOrder_resources;
  plants: BidOnPlant_bidOnPlant_playerOrder_plants[];
}

export interface BidOnPlant_bidOnPlant_activePlayer {
  id: string;
}

export interface BidOnPlant_bidOnPlant_plantMarket_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface BidOnPlant_bidOnPlant_plantMarket {
  id: string;
  plant: BidOnPlant_bidOnPlant_plantMarket_plant;
}

export interface BidOnPlant_bidOnPlant_cities_city {
  id: string;
}

export interface BidOnPlant_bidOnPlant_cities_players {
  id: string;
}

export interface BidOnPlant_bidOnPlant_cities {
  id: string;
  city: BidOnPlant_bidOnPlant_cities_city;
  players: BidOnPlant_bidOnPlant_cities_players[] | null;
}

export interface BidOnPlant_bidOnPlant_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BidOnPlant_bidOnPlant_auction_plant_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface BidOnPlant_bidOnPlant_auction_plant {
  id: string;
  plant: BidOnPlant_bidOnPlant_auction_plant_plant;
}

export interface BidOnPlant_bidOnPlant_auction_leadingPlayer {
  id: string;
}

export interface BidOnPlant_bidOnPlant_auction_activePlayer {
  id: string;
}

export interface BidOnPlant_bidOnPlant_auction_passedPlayers {
  id: string;
}

export interface BidOnPlant_bidOnPlant_auction {
  id: string;
  plant: BidOnPlant_bidOnPlant_auction_plant;
  bid: number;
  leadingPlayer: BidOnPlant_bidOnPlant_auction_leadingPlayer;
  activePlayer: BidOnPlant_bidOnPlant_auction_activePlayer;
  passedPlayers: BidOnPlant_bidOnPlant_auction_passedPlayers[] | null;
}

export interface BidOnPlant_bidOnPlant_plantPhaseEvents_player {
  id: string;
}

export interface BidOnPlant_bidOnPlant_plantPhaseEvents_plant_plant {
  rank: number;
}

export interface BidOnPlant_bidOnPlant_plantPhaseEvents_plant {
  plant: BidOnPlant_bidOnPlant_plantPhaseEvents_plant_plant;
}

export interface BidOnPlant_bidOnPlant_plantPhaseEvents {
  player: BidOnPlant_bidOnPlant_plantPhaseEvents_player;
  plant: BidOnPlant_bidOnPlant_plantPhaseEvents_plant | null;
}

export interface BidOnPlant_bidOnPlant_restockRates_era1 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BidOnPlant_bidOnPlant_restockRates_era2 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BidOnPlant_bidOnPlant_restockRates_era3 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BidOnPlant_bidOnPlant_restockRates {
  era1: BidOnPlant_bidOnPlant_restockRates_era1;
  era2: BidOnPlant_bidOnPlant_restockRates_era2;
  era3: BidOnPlant_bidOnPlant_restockRates_era3;
}

export interface BidOnPlant_bidOnPlant {
  id: string;
  actionType: ActionType;
  map: BidOnPlant_bidOnPlant_map;
  regions: number[];
  turn: number;
  era: number;
  phase: Phase;
  playerOrder: BidOnPlant_bidOnPlant_playerOrder[];
  activePlayer: BidOnPlant_bidOnPlant_activePlayer;
  deckCount: number;
  plantMarket: BidOnPlant_bidOnPlant_plantMarket[];
  cities: BidOnPlant_bidOnPlant_cities[];
  resourceMarket: BidOnPlant_bidOnPlant_resourceMarket;
  auction: BidOnPlant_bidOnPlant_auction | null;
  plantPhaseEvents: BidOnPlant_bidOnPlant_plantPhaseEvents[];
  plantRankBought: number;
  restockRates: BidOnPlant_bidOnPlant_restockRates;
}

export interface BidOnPlant {
  bidOnPlant: BidOnPlant_bidOnPlant;
}

export interface BidOnPlantVariables {
  gameId: string;
  meId: string;
  bid?: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: BuyCities
// ====================================================

export interface BuyCities_buyCities_map {
  name: string;
}

export interface BuyCities_buyCities_playerOrder_user {
  id: string;
  username: string;
}

export interface BuyCities_buyCities_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyCities_buyCities_playerOrder_plants_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface BuyCities_buyCities_playerOrder_plants {
  id: string;
  plant: BuyCities_buyCities_playerOrder_plants_plant;
}

export interface BuyCities_buyCities_playerOrder {
  id: string;
  clockwiseOrder: number;
  user: BuyCities_buyCities_playerOrder_user;
  color: Color;
  money: number;
  resources: BuyCities_buyCities_playerOrder_resources;
  plants: BuyCities_buyCities_playerOrder_plants[];
}

export interface BuyCities_buyCities_activePlayer {
  id: string;
}

export interface BuyCities_buyCities_plantMarket_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface BuyCities_buyCities_plantMarket {
  id: string;
  plant: BuyCities_buyCities_plantMarket_plant;
}

export interface BuyCities_buyCities_cities_city {
  id: string;
}

export interface BuyCities_buyCities_cities_players {
  id: string;
}

export interface BuyCities_buyCities_cities {
  id: string;
  city: BuyCities_buyCities_cities_city;
  players: BuyCities_buyCities_cities_players[] | null;
}

export interface BuyCities_buyCities_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyCities_buyCities_auction_plant_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface BuyCities_buyCities_auction_plant {
  id: string;
  plant: BuyCities_buyCities_auction_plant_plant;
}

export interface BuyCities_buyCities_auction_leadingPlayer {
  id: string;
}

export interface BuyCities_buyCities_auction_activePlayer {
  id: string;
}

export interface BuyCities_buyCities_auction_passedPlayers {
  id: string;
}

export interface BuyCities_buyCities_auction {
  id: string;
  plant: BuyCities_buyCities_auction_plant;
  bid: number;
  leadingPlayer: BuyCities_buyCities_auction_leadingPlayer;
  activePlayer: BuyCities_buyCities_auction_activePlayer;
  passedPlayers: BuyCities_buyCities_auction_passedPlayers[] | null;
}

export interface BuyCities_buyCities_plantPhaseEvents_player {
  id: string;
}

export interface BuyCities_buyCities_plantPhaseEvents_plant_plant {
  rank: number;
}

export interface BuyCities_buyCities_plantPhaseEvents_plant {
  plant: BuyCities_buyCities_plantPhaseEvents_plant_plant;
}

export interface BuyCities_buyCities_plantPhaseEvents {
  player: BuyCities_buyCities_plantPhaseEvents_player;
  plant: BuyCities_buyCities_plantPhaseEvents_plant | null;
}

export interface BuyCities_buyCities_restockRates_era1 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyCities_buyCities_restockRates_era2 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyCities_buyCities_restockRates_era3 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyCities_buyCities_restockRates {
  era1: BuyCities_buyCities_restockRates_era1;
  era2: BuyCities_buyCities_restockRates_era2;
  era3: BuyCities_buyCities_restockRates_era3;
}

export interface BuyCities_buyCities {
  id: string;
  actionType: ActionType;
  map: BuyCities_buyCities_map;
  regions: number[];
  turn: number;
  era: number;
  phase: Phase;
  playerOrder: BuyCities_buyCities_playerOrder[];
  activePlayer: BuyCities_buyCities_activePlayer;
  deckCount: number;
  plantMarket: BuyCities_buyCities_plantMarket[];
  cities: BuyCities_buyCities_cities[];
  resourceMarket: BuyCities_buyCities_resourceMarket;
  auction: BuyCities_buyCities_auction | null;
  plantPhaseEvents: BuyCities_buyCities_plantPhaseEvents[];
  plantRankBought: number;
  restockRates: BuyCities_buyCities_restockRates;
}

export interface BuyCities {
  buyCities: BuyCities_buyCities;
}

export interface BuyCitiesVariables {
  gameId: string;
  meId: string;
  cityInstanceIds: string[];
  cost: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: BuyResources
// ====================================================

export interface BuyResources_buyResources_map {
  name: string;
}

export interface BuyResources_buyResources_playerOrder_user {
  id: string;
  username: string;
}

export interface BuyResources_buyResources_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyResources_buyResources_playerOrder_plants_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface BuyResources_buyResources_playerOrder_plants {
  id: string;
  plant: BuyResources_buyResources_playerOrder_plants_plant;
}

export interface BuyResources_buyResources_playerOrder {
  id: string;
  clockwiseOrder: number;
  user: BuyResources_buyResources_playerOrder_user;
  color: Color;
  money: number;
  resources: BuyResources_buyResources_playerOrder_resources;
  plants: BuyResources_buyResources_playerOrder_plants[];
}

export interface BuyResources_buyResources_activePlayer {
  id: string;
}

export interface BuyResources_buyResources_plantMarket_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface BuyResources_buyResources_plantMarket {
  id: string;
  plant: BuyResources_buyResources_plantMarket_plant;
}

export interface BuyResources_buyResources_cities_city {
  id: string;
}

export interface BuyResources_buyResources_cities_players {
  id: string;
}

export interface BuyResources_buyResources_cities {
  id: string;
  city: BuyResources_buyResources_cities_city;
  players: BuyResources_buyResources_cities_players[] | null;
}

export interface BuyResources_buyResources_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyResources_buyResources_auction_plant_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface BuyResources_buyResources_auction_plant {
  id: string;
  plant: BuyResources_buyResources_auction_plant_plant;
}

export interface BuyResources_buyResources_auction_leadingPlayer {
  id: string;
}

export interface BuyResources_buyResources_auction_activePlayer {
  id: string;
}

export interface BuyResources_buyResources_auction_passedPlayers {
  id: string;
}

export interface BuyResources_buyResources_auction {
  id: string;
  plant: BuyResources_buyResources_auction_plant;
  bid: number;
  leadingPlayer: BuyResources_buyResources_auction_leadingPlayer;
  activePlayer: BuyResources_buyResources_auction_activePlayer;
  passedPlayers: BuyResources_buyResources_auction_passedPlayers[] | null;
}

export interface BuyResources_buyResources_plantPhaseEvents_player {
  id: string;
}

export interface BuyResources_buyResources_plantPhaseEvents_plant_plant {
  rank: number;
}

export interface BuyResources_buyResources_plantPhaseEvents_plant {
  plant: BuyResources_buyResources_plantPhaseEvents_plant_plant;
}

export interface BuyResources_buyResources_plantPhaseEvents {
  player: BuyResources_buyResources_plantPhaseEvents_player;
  plant: BuyResources_buyResources_plantPhaseEvents_plant | null;
}

export interface BuyResources_buyResources_restockRates_era1 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyResources_buyResources_restockRates_era2 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyResources_buyResources_restockRates_era3 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyResources_buyResources_restockRates {
  era1: BuyResources_buyResources_restockRates_era1;
  era2: BuyResources_buyResources_restockRates_era2;
  era3: BuyResources_buyResources_restockRates_era3;
}

export interface BuyResources_buyResources {
  id: string;
  actionType: ActionType;
  map: BuyResources_buyResources_map;
  regions: number[];
  turn: number;
  era: number;
  phase: Phase;
  playerOrder: BuyResources_buyResources_playerOrder[];
  activePlayer: BuyResources_buyResources_activePlayer;
  deckCount: number;
  plantMarket: BuyResources_buyResources_plantMarket[];
  cities: BuyResources_buyResources_cities[];
  resourceMarket: BuyResources_buyResources_resourceMarket;
  auction: BuyResources_buyResources_auction | null;
  plantPhaseEvents: BuyResources_buyResources_plantPhaseEvents[];
  plantRankBought: number;
  restockRates: BuyResources_buyResources_restockRates;
}

export interface BuyResources {
  buyResources: BuyResources_buyResources;
}

export interface BuyResourcesVariables {
  gameId: string;
  meId: string;
  resources: ResourcesInput;
  cost: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DiscardPlant
// ====================================================

export interface DiscardPlant_discardPlant_map {
  name: string;
}

export interface DiscardPlant_discardPlant_playerOrder_user {
  id: string;
  username: string;
}

export interface DiscardPlant_discardPlant_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface DiscardPlant_discardPlant_playerOrder_plants_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface DiscardPlant_discardPlant_playerOrder_plants {
  id: string;
  plant: DiscardPlant_discardPlant_playerOrder_plants_plant;
}

export interface DiscardPlant_discardPlant_playerOrder {
  id: string;
  clockwiseOrder: number;
  user: DiscardPlant_discardPlant_playerOrder_user;
  color: Color;
  money: number;
  resources: DiscardPlant_discardPlant_playerOrder_resources;
  plants: DiscardPlant_discardPlant_playerOrder_plants[];
}

export interface DiscardPlant_discardPlant_activePlayer {
  id: string;
}

export interface DiscardPlant_discardPlant_plantMarket_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface DiscardPlant_discardPlant_plantMarket {
  id: string;
  plant: DiscardPlant_discardPlant_plantMarket_plant;
}

export interface DiscardPlant_discardPlant_cities_city {
  id: string;
}

export interface DiscardPlant_discardPlant_cities_players {
  id: string;
}

export interface DiscardPlant_discardPlant_cities {
  id: string;
  city: DiscardPlant_discardPlant_cities_city;
  players: DiscardPlant_discardPlant_cities_players[] | null;
}

export interface DiscardPlant_discardPlant_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface DiscardPlant_discardPlant_auction_plant_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface DiscardPlant_discardPlant_auction_plant {
  id: string;
  plant: DiscardPlant_discardPlant_auction_plant_plant;
}

export interface DiscardPlant_discardPlant_auction_leadingPlayer {
  id: string;
}

export interface DiscardPlant_discardPlant_auction_activePlayer {
  id: string;
}

export interface DiscardPlant_discardPlant_auction_passedPlayers {
  id: string;
}

export interface DiscardPlant_discardPlant_auction {
  id: string;
  plant: DiscardPlant_discardPlant_auction_plant;
  bid: number;
  leadingPlayer: DiscardPlant_discardPlant_auction_leadingPlayer;
  activePlayer: DiscardPlant_discardPlant_auction_activePlayer;
  passedPlayers: DiscardPlant_discardPlant_auction_passedPlayers[] | null;
}

export interface DiscardPlant_discardPlant_plantPhaseEvents_player {
  id: string;
}

export interface DiscardPlant_discardPlant_plantPhaseEvents_plant_plant {
  rank: number;
}

export interface DiscardPlant_discardPlant_plantPhaseEvents_plant {
  plant: DiscardPlant_discardPlant_plantPhaseEvents_plant_plant;
}

export interface DiscardPlant_discardPlant_plantPhaseEvents {
  player: DiscardPlant_discardPlant_plantPhaseEvents_player;
  plant: DiscardPlant_discardPlant_plantPhaseEvents_plant | null;
}

export interface DiscardPlant_discardPlant_restockRates_era1 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface DiscardPlant_discardPlant_restockRates_era2 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface DiscardPlant_discardPlant_restockRates_era3 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface DiscardPlant_discardPlant_restockRates {
  era1: DiscardPlant_discardPlant_restockRates_era1;
  era2: DiscardPlant_discardPlant_restockRates_era2;
  era3: DiscardPlant_discardPlant_restockRates_era3;
}

export interface DiscardPlant_discardPlant {
  id: string;
  actionType: ActionType;
  map: DiscardPlant_discardPlant_map;
  regions: number[];
  turn: number;
  era: number;
  phase: Phase;
  playerOrder: DiscardPlant_discardPlant_playerOrder[];
  activePlayer: DiscardPlant_discardPlant_activePlayer;
  deckCount: number;
  plantMarket: DiscardPlant_discardPlant_plantMarket[];
  cities: DiscardPlant_discardPlant_cities[];
  resourceMarket: DiscardPlant_discardPlant_resourceMarket;
  auction: DiscardPlant_discardPlant_auction | null;
  plantPhaseEvents: DiscardPlant_discardPlant_plantPhaseEvents[];
  plantRankBought: number;
  restockRates: DiscardPlant_discardPlant_restockRates;
}

export interface DiscardPlant {
  discardPlant: DiscardPlant_discardPlant;
}

export interface DiscardPlantVariables {
  gameId: string;
  meId: string;
  plantInstanceId: string;
  fossilFuelDiscard?: HybridChoiceInput | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGame
// ====================================================

export interface GetGame_getGame_map {
  name: string;
}

export interface GetGame_getGame_playerOrder_user {
  id: string;
  username: string;
}

export interface GetGame_getGame_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GetGame_getGame_playerOrder_plants_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface GetGame_getGame_playerOrder_plants {
  id: string;
  plant: GetGame_getGame_playerOrder_plants_plant;
}

export interface GetGame_getGame_playerOrder {
  id: string;
  clockwiseOrder: number;
  user: GetGame_getGame_playerOrder_user;
  color: Color;
  money: number;
  resources: GetGame_getGame_playerOrder_resources;
  plants: GetGame_getGame_playerOrder_plants[];
}

export interface GetGame_getGame_activePlayer {
  id: string;
}

export interface GetGame_getGame_plantMarket_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface GetGame_getGame_plantMarket {
  id: string;
  plant: GetGame_getGame_plantMarket_plant;
}

export interface GetGame_getGame_cities_city {
  id: string;
}

export interface GetGame_getGame_cities_players {
  id: string;
}

export interface GetGame_getGame_cities {
  id: string;
  city: GetGame_getGame_cities_city;
  players: GetGame_getGame_cities_players[] | null;
}

export interface GetGame_getGame_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GetGame_getGame_auction_plant_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface GetGame_getGame_auction_plant {
  id: string;
  plant: GetGame_getGame_auction_plant_plant;
}

export interface GetGame_getGame_auction_leadingPlayer {
  id: string;
}

export interface GetGame_getGame_auction_activePlayer {
  id: string;
}

export interface GetGame_getGame_auction_passedPlayers {
  id: string;
}

export interface GetGame_getGame_auction {
  id: string;
  plant: GetGame_getGame_auction_plant;
  bid: number;
  leadingPlayer: GetGame_getGame_auction_leadingPlayer;
  activePlayer: GetGame_getGame_auction_activePlayer;
  passedPlayers: GetGame_getGame_auction_passedPlayers[] | null;
}

export interface GetGame_getGame_plantPhaseEvents_player {
  id: string;
}

export interface GetGame_getGame_plantPhaseEvents_plant_plant {
  rank: number;
}

export interface GetGame_getGame_plantPhaseEvents_plant {
  plant: GetGame_getGame_plantPhaseEvents_plant_plant;
}

export interface GetGame_getGame_plantPhaseEvents {
  player: GetGame_getGame_plantPhaseEvents_player;
  plant: GetGame_getGame_plantPhaseEvents_plant | null;
}

export interface GetGame_getGame_restockRates_era1 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GetGame_getGame_restockRates_era2 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GetGame_getGame_restockRates_era3 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GetGame_getGame_restockRates {
  era1: GetGame_getGame_restockRates_era1;
  era2: GetGame_getGame_restockRates_era2;
  era3: GetGame_getGame_restockRates_era3;
}

export interface GetGame_getGame {
  id: string;
  actionType: ActionType;
  map: GetGame_getGame_map;
  regions: number[];
  turn: number;
  era: number;
  phase: Phase;
  playerOrder: GetGame_getGame_playerOrder[];
  activePlayer: GetGame_getGame_activePlayer;
  deckCount: number;
  plantMarket: GetGame_getGame_plantMarket[];
  cities: GetGame_getGame_cities[];
  resourceMarket: GetGame_getGame_resourceMarket;
  auction: GetGame_getGame_auction | null;
  plantPhaseEvents: GetGame_getGame_plantPhaseEvents[];
  plantRankBought: number;
  restockRates: GetGame_getGame_restockRates;
}

export interface GetGame {
  getGame: GetGame_getGame | null;
}

export interface GetGameVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: GameUpdated
// ====================================================

export interface GameUpdated_gameUpdated_map {
  name: string;
}

export interface GameUpdated_gameUpdated_playerOrder_user {
  id: string;
  username: string;
}

export interface GameUpdated_gameUpdated_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GameUpdated_gameUpdated_playerOrder_plants_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface GameUpdated_gameUpdated_playerOrder_plants {
  id: string;
  plant: GameUpdated_gameUpdated_playerOrder_plants_plant;
}

export interface GameUpdated_gameUpdated_playerOrder {
  id: string;
  clockwiseOrder: number;
  user: GameUpdated_gameUpdated_playerOrder_user;
  color: Color;
  money: number;
  resources: GameUpdated_gameUpdated_playerOrder_resources;
  plants: GameUpdated_gameUpdated_playerOrder_plants[];
}

export interface GameUpdated_gameUpdated_activePlayer {
  id: string;
}

export interface GameUpdated_gameUpdated_plantMarket_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface GameUpdated_gameUpdated_plantMarket {
  id: string;
  plant: GameUpdated_gameUpdated_plantMarket_plant;
}

export interface GameUpdated_gameUpdated_cities_city {
  id: string;
}

export interface GameUpdated_gameUpdated_cities_players {
  id: string;
}

export interface GameUpdated_gameUpdated_cities {
  id: string;
  city: GameUpdated_gameUpdated_cities_city;
  players: GameUpdated_gameUpdated_cities_players[] | null;
}

export interface GameUpdated_gameUpdated_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GameUpdated_gameUpdated_auction_plant_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface GameUpdated_gameUpdated_auction_plant {
  id: string;
  plant: GameUpdated_gameUpdated_auction_plant_plant;
}

export interface GameUpdated_gameUpdated_auction_leadingPlayer {
  id: string;
}

export interface GameUpdated_gameUpdated_auction_activePlayer {
  id: string;
}

export interface GameUpdated_gameUpdated_auction_passedPlayers {
  id: string;
}

export interface GameUpdated_gameUpdated_auction {
  id: string;
  plant: GameUpdated_gameUpdated_auction_plant;
  bid: number;
  leadingPlayer: GameUpdated_gameUpdated_auction_leadingPlayer;
  activePlayer: GameUpdated_gameUpdated_auction_activePlayer;
  passedPlayers: GameUpdated_gameUpdated_auction_passedPlayers[] | null;
}

export interface GameUpdated_gameUpdated_plantPhaseEvents_player {
  id: string;
}

export interface GameUpdated_gameUpdated_plantPhaseEvents_plant_plant {
  rank: number;
}

export interface GameUpdated_gameUpdated_plantPhaseEvents_plant {
  plant: GameUpdated_gameUpdated_plantPhaseEvents_plant_plant;
}

export interface GameUpdated_gameUpdated_plantPhaseEvents {
  player: GameUpdated_gameUpdated_plantPhaseEvents_player;
  plant: GameUpdated_gameUpdated_plantPhaseEvents_plant | null;
}

export interface GameUpdated_gameUpdated_restockRates_era1 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GameUpdated_gameUpdated_restockRates_era2 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GameUpdated_gameUpdated_restockRates_era3 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GameUpdated_gameUpdated_restockRates {
  era1: GameUpdated_gameUpdated_restockRates_era1;
  era2: GameUpdated_gameUpdated_restockRates_era2;
  era3: GameUpdated_gameUpdated_restockRates_era3;
}

export interface GameUpdated_gameUpdated {
  id: string;
  actionType: ActionType;
  map: GameUpdated_gameUpdated_map;
  regions: number[];
  turn: number;
  era: number;
  phase: Phase;
  playerOrder: GameUpdated_gameUpdated_playerOrder[];
  activePlayer: GameUpdated_gameUpdated_activePlayer;
  deckCount: number;
  plantMarket: GameUpdated_gameUpdated_plantMarket[];
  cities: GameUpdated_gameUpdated_cities[];
  resourceMarket: GameUpdated_gameUpdated_resourceMarket;
  auction: GameUpdated_gameUpdated_auction | null;
  plantPhaseEvents: GameUpdated_gameUpdated_plantPhaseEvents[];
  plantRankBought: number;
  restockRates: GameUpdated_gameUpdated_restockRates;
}

export interface GameUpdated {
  gameUpdated: GameUpdated_gameUpdated | null;
}

export interface GameUpdatedVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCityCostHelper
// ====================================================

export interface GetCityCostHelper {
  getCityCostHelper: string;
}

export interface GetCityCostHelperVariables {
  mapName: string;
  regions: number[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRevenues
// ====================================================

export interface GetRevenues {
  getRevenues: number[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchMap
// ====================================================

export interface FetchMap_fetchMap_cities {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

export interface FetchMap_fetchMap_connections_cities {
  id: string;
}

export interface FetchMap_fetchMap_connections {
  id: string;
  cost: number;
  cities: FetchMap_fetchMap_connections_cities[];
}

export interface FetchMap_fetchMap {
  name: string;
  cities: FetchMap_fetchMap_cities[];
  connections: FetchMap_fetchMap_connections[];
}

export interface FetchMap {
  fetchMap: FetchMap_fetchMap;
}

export interface FetchMapVariables {
  mapName: string;
  regions: number[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PowerUp
// ====================================================

export interface PowerUp_powerUp_map {
  name: string;
}

export interface PowerUp_powerUp_playerOrder_user {
  id: string;
  username: string;
}

export interface PowerUp_powerUp_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PowerUp_powerUp_playerOrder_plants_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface PowerUp_powerUp_playerOrder_plants {
  id: string;
  plant: PowerUp_powerUp_playerOrder_plants_plant;
}

export interface PowerUp_powerUp_playerOrder {
  id: string;
  clockwiseOrder: number;
  user: PowerUp_powerUp_playerOrder_user;
  color: Color;
  money: number;
  resources: PowerUp_powerUp_playerOrder_resources;
  plants: PowerUp_powerUp_playerOrder_plants[];
}

export interface PowerUp_powerUp_activePlayer {
  id: string;
}

export interface PowerUp_powerUp_plantMarket_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface PowerUp_powerUp_plantMarket {
  id: string;
  plant: PowerUp_powerUp_plantMarket_plant;
}

export interface PowerUp_powerUp_cities_city {
  id: string;
}

export interface PowerUp_powerUp_cities_players {
  id: string;
}

export interface PowerUp_powerUp_cities {
  id: string;
  city: PowerUp_powerUp_cities_city;
  players: PowerUp_powerUp_cities_players[] | null;
}

export interface PowerUp_powerUp_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PowerUp_powerUp_auction_plant_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface PowerUp_powerUp_auction_plant {
  id: string;
  plant: PowerUp_powerUp_auction_plant_plant;
}

export interface PowerUp_powerUp_auction_leadingPlayer {
  id: string;
}

export interface PowerUp_powerUp_auction_activePlayer {
  id: string;
}

export interface PowerUp_powerUp_auction_passedPlayers {
  id: string;
}

export interface PowerUp_powerUp_auction {
  id: string;
  plant: PowerUp_powerUp_auction_plant;
  bid: number;
  leadingPlayer: PowerUp_powerUp_auction_leadingPlayer;
  activePlayer: PowerUp_powerUp_auction_activePlayer;
  passedPlayers: PowerUp_powerUp_auction_passedPlayers[] | null;
}

export interface PowerUp_powerUp_plantPhaseEvents_player {
  id: string;
}

export interface PowerUp_powerUp_plantPhaseEvents_plant_plant {
  rank: number;
}

export interface PowerUp_powerUp_plantPhaseEvents_plant {
  plant: PowerUp_powerUp_plantPhaseEvents_plant_plant;
}

export interface PowerUp_powerUp_plantPhaseEvents {
  player: PowerUp_powerUp_plantPhaseEvents_player;
  plant: PowerUp_powerUp_plantPhaseEvents_plant | null;
}

export interface PowerUp_powerUp_restockRates_era1 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PowerUp_powerUp_restockRates_era2 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PowerUp_powerUp_restockRates_era3 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PowerUp_powerUp_restockRates {
  era1: PowerUp_powerUp_restockRates_era1;
  era2: PowerUp_powerUp_restockRates_era2;
  era3: PowerUp_powerUp_restockRates_era3;
}

export interface PowerUp_powerUp {
  id: string;
  actionType: ActionType;
  map: PowerUp_powerUp_map;
  regions: number[];
  turn: number;
  era: number;
  phase: Phase;
  playerOrder: PowerUp_powerUp_playerOrder[];
  activePlayer: PowerUp_powerUp_activePlayer;
  deckCount: number;
  plantMarket: PowerUp_powerUp_plantMarket[];
  cities: PowerUp_powerUp_cities[];
  resourceMarket: PowerUp_powerUp_resourceMarket;
  auction: PowerUp_powerUp_auction | null;
  plantPhaseEvents: PowerUp_powerUp_plantPhaseEvents[];
  plantRankBought: number;
  restockRates: PowerUp_powerUp_restockRates;
}

export interface PowerUp {
  powerUp: PowerUp_powerUp;
}

export interface PowerUpVariables {
  gameId: string;
  meId: string;
  plantInstanceIds: string[];
  hybridChoice?: HybridChoiceInput | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PutUpPlant
// ====================================================

export interface PutUpPlant_putUpPlant_map {
  name: string;
}

export interface PutUpPlant_putUpPlant_playerOrder_user {
  id: string;
  username: string;
}

export interface PutUpPlant_putUpPlant_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PutUpPlant_putUpPlant_playerOrder_plants_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface PutUpPlant_putUpPlant_playerOrder_plants {
  id: string;
  plant: PutUpPlant_putUpPlant_playerOrder_plants_plant;
}

export interface PutUpPlant_putUpPlant_playerOrder {
  id: string;
  clockwiseOrder: number;
  user: PutUpPlant_putUpPlant_playerOrder_user;
  color: Color;
  money: number;
  resources: PutUpPlant_putUpPlant_playerOrder_resources;
  plants: PutUpPlant_putUpPlant_playerOrder_plants[];
}

export interface PutUpPlant_putUpPlant_activePlayer {
  id: string;
}

export interface PutUpPlant_putUpPlant_plantMarket_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface PutUpPlant_putUpPlant_plantMarket {
  id: string;
  plant: PutUpPlant_putUpPlant_plantMarket_plant;
}

export interface PutUpPlant_putUpPlant_cities_city {
  id: string;
}

export interface PutUpPlant_putUpPlant_cities_players {
  id: string;
}

export interface PutUpPlant_putUpPlant_cities {
  id: string;
  city: PutUpPlant_putUpPlant_cities_city;
  players: PutUpPlant_putUpPlant_cities_players[] | null;
}

export interface PutUpPlant_putUpPlant_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PutUpPlant_putUpPlant_auction_plant_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface PutUpPlant_putUpPlant_auction_plant {
  id: string;
  plant: PutUpPlant_putUpPlant_auction_plant_plant;
}

export interface PutUpPlant_putUpPlant_auction_leadingPlayer {
  id: string;
}

export interface PutUpPlant_putUpPlant_auction_activePlayer {
  id: string;
}

export interface PutUpPlant_putUpPlant_auction_passedPlayers {
  id: string;
}

export interface PutUpPlant_putUpPlant_auction {
  id: string;
  plant: PutUpPlant_putUpPlant_auction_plant;
  bid: number;
  leadingPlayer: PutUpPlant_putUpPlant_auction_leadingPlayer;
  activePlayer: PutUpPlant_putUpPlant_auction_activePlayer;
  passedPlayers: PutUpPlant_putUpPlant_auction_passedPlayers[] | null;
}

export interface PutUpPlant_putUpPlant_plantPhaseEvents_player {
  id: string;
}

export interface PutUpPlant_putUpPlant_plantPhaseEvents_plant_plant {
  rank: number;
}

export interface PutUpPlant_putUpPlant_plantPhaseEvents_plant {
  plant: PutUpPlant_putUpPlant_plantPhaseEvents_plant_plant;
}

export interface PutUpPlant_putUpPlant_plantPhaseEvents {
  player: PutUpPlant_putUpPlant_plantPhaseEvents_player;
  plant: PutUpPlant_putUpPlant_plantPhaseEvents_plant | null;
}

export interface PutUpPlant_putUpPlant_restockRates_era1 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PutUpPlant_putUpPlant_restockRates_era2 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PutUpPlant_putUpPlant_restockRates_era3 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PutUpPlant_putUpPlant_restockRates {
  era1: PutUpPlant_putUpPlant_restockRates_era1;
  era2: PutUpPlant_putUpPlant_restockRates_era2;
  era3: PutUpPlant_putUpPlant_restockRates_era3;
}

export interface PutUpPlant_putUpPlant {
  id: string;
  actionType: ActionType;
  map: PutUpPlant_putUpPlant_map;
  regions: number[];
  turn: number;
  era: number;
  phase: Phase;
  playerOrder: PutUpPlant_putUpPlant_playerOrder[];
  activePlayer: PutUpPlant_putUpPlant_activePlayer;
  deckCount: number;
  plantMarket: PutUpPlant_putUpPlant_plantMarket[];
  cities: PutUpPlant_putUpPlant_cities[];
  resourceMarket: PutUpPlant_putUpPlant_resourceMarket;
  auction: PutUpPlant_putUpPlant_auction | null;
  plantPhaseEvents: PutUpPlant_putUpPlant_plantPhaseEvents[];
  plantRankBought: number;
  restockRates: PutUpPlant_putUpPlant_restockRates;
}

export interface PutUpPlant {
  putUpPlant: PutUpPlant_putUpPlant;
}

export interface PutUpPlantVariables {
  gameId: string;
  meId: string;
  plantInstanceId?: string | null;
  bid?: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Game
// ====================================================

export interface Game_map {
  name: string;
}

export interface Game_playerOrder_user {
  id: string;
  username: string;
}

export interface Game_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface Game_playerOrder_plants_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface Game_playerOrder_plants {
  id: string;
  plant: Game_playerOrder_plants_plant;
}

export interface Game_playerOrder {
  id: string;
  clockwiseOrder: number;
  user: Game_playerOrder_user;
  color: Color;
  money: number;
  resources: Game_playerOrder_resources;
  plants: Game_playerOrder_plants[];
}

export interface Game_activePlayer {
  id: string;
}

export interface Game_plantMarket_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface Game_plantMarket {
  id: string;
  plant: Game_plantMarket_plant;
}

export interface Game_cities_city {
  id: string;
}

export interface Game_cities_players {
  id: string;
}

export interface Game_cities {
  id: string;
  city: Game_cities_city;
  players: Game_cities_players[] | null;
}

export interface Game_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface Game_auction_plant_plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface Game_auction_plant {
  id: string;
  plant: Game_auction_plant_plant;
}

export interface Game_auction_leadingPlayer {
  id: string;
}

export interface Game_auction_activePlayer {
  id: string;
}

export interface Game_auction_passedPlayers {
  id: string;
}

export interface Game_auction {
  id: string;
  plant: Game_auction_plant;
  bid: number;
  leadingPlayer: Game_auction_leadingPlayer;
  activePlayer: Game_auction_activePlayer;
  passedPlayers: Game_auction_passedPlayers[] | null;
}

export interface Game_plantPhaseEvents_player {
  id: string;
}

export interface Game_plantPhaseEvents_plant_plant {
  rank: number;
}

export interface Game_plantPhaseEvents_plant {
  plant: Game_plantPhaseEvents_plant_plant;
}

export interface Game_plantPhaseEvents {
  player: Game_plantPhaseEvents_player;
  plant: Game_plantPhaseEvents_plant | null;
}

export interface Game_restockRates_era1 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface Game_restockRates_era2 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface Game_restockRates_era3 {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface Game_restockRates {
  era1: Game_restockRates_era1;
  era2: Game_restockRates_era2;
  era3: Game_restockRates_era3;
}

export interface Game {
  id: string;
  actionType: ActionType;
  map: Game_map;
  regions: number[];
  turn: number;
  era: number;
  phase: Phase;
  playerOrder: Game_playerOrder[];
  activePlayer: Game_activePlayer;
  deckCount: number;
  plantMarket: Game_plantMarket[];
  cities: Game_cities[];
  resourceMarket: Game_resourceMarket;
  auction: Game_auction | null;
  plantPhaseEvents: Game_plantPhaseEvents[];
  plantRankBought: number;
  restockRates: Game_restockRates;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Plant
// ====================================================

export interface Plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ActionType {
  BID_ON_PLANT = "BID_ON_PLANT",
  BUY_CITIES = "BUY_CITIES",
  BUY_RESOURCES = "BUY_RESOURCES",
  DISCARD_PLANT = "DISCARD_PLANT",
  POWER_UP = "POWER_UP",
  PUT_UP_PLANT = "PUT_UP_PLANT",
}

export enum Phase {
  CITY = "CITY",
  PLANT = "PLANT",
  POWER = "POWER",
  RESOURCE = "RESOURCE",
}

export enum Color {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  PURPLE = "PURPLE",
  RED = "RED",
  YELLOW = "YELLOW",
}

export enum PlantResourceType {
  COAL = "COAL",
  HYBRID = "HYBRID",
  OIL = "OIL",
  TRASH = "TRASH",
  URANIUM = "URANIUM",
  WIND = "WIND",
}

// 
export interface ResourcesInput {
  coal?: number | null;
  oil?: number | null;
  trash?: number | null;
  uranium?: number | null;
}

// 
export interface HybridChoiceInput {
  coal: number;
  oil: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================