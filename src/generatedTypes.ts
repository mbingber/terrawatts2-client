

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

export interface GetGame_getGame_playerOrder {
  id: string;
  clockwiseOrder: number;
  user: GetGame_getGame_playerOrder_user;
  color: Color;
  money: number;
  resources: GetGame_getGame_playerOrder_resources;
}

export interface GetGame_getGame_activePlayer {
  id: string;
}

export interface GetGame_getGame_plants_plant {
  rank: number;
}

export interface GetGame_getGame_plants_player {
  id: string;
}

export interface GetGame_getGame_plants {
  id: string;
  plant: GetGame_getGame_plants_plant;
  status: PlantStatus;
  player: GetGame_getGame_plants_player | null;
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
  plants: GetGame_getGame_plants[];
  cities: GetGame_getGame_cities[];
  resourceMarket: GetGame_getGame_resourceMarket;
  auction: GetGame_getGame_auction | null;
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
// GraphQL query operation: FetchMap
// ====================================================

export interface FetchMap_fetchMap_cities {
  id: string;
  name: string;
  lat: number | null;
  lng: number | null;
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

export enum PlantStatus {
  DECK = "DECK",
  DISCARDED = "DISCARDED",
  ERA_THREE = "ERA_THREE",
  MARKET = "MARKET",
  OWNED = "OWNED",
  REMOVED_BEFORE_START = "REMOVED_BEFORE_START",
}

//==============================================================
// END Enums and Input Objects
//==============================================================