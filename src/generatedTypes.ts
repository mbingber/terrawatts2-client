

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: BidOnPlant
// ====================================================

export interface BidOnPlant_bidOnPlant_info {
  turn: number;
  era: number;
  phase: Phase;
  actionType: ActionType;
  activeUser: string;
}

export interface BidOnPlant_bidOnPlant_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BidOnPlant_bidOnPlant_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BidOnPlant_bidOnPlant_playerOrder {
  clockwiseOrder: number;
  username: string;
  color: Color;
  money: number;
  resources: BidOnPlant_bidOnPlant_playerOrder_resources;
  plantIds: string[];
}

export interface BidOnPlant_bidOnPlant_cityList {
  cityId: string;
  occupants: string[];
}

export interface BidOnPlant_bidOnPlant_auction {
  plantId: string;
  bid: number;
  leader: string;
  active: string;
  passed: string[] | null;
}

export interface BidOnPlant_bidOnPlant_plantPhaseEvents {
  plantId: string | null;
  cost: number | null;
  username: string;
}

export interface BidOnPlant_bidOnPlant {
  info: BidOnPlant_bidOnPlant_info;
  resourceMarket: BidOnPlant_bidOnPlant_resourceMarket;
  playerOrder: BidOnPlant_bidOnPlant_playerOrder[];
  plantMarket: string[];
  era3Plants: string[];
  discardedPlants: string[];
  possibleDeck: string[];
  deckCount: number;
  cityList: BidOnPlant_bidOnPlant_cityList[];
  auction: BidOnPlant_bidOnPlant_auction | null;
  plantPhaseEvents: BidOnPlant_bidOnPlant_plantPhaseEvents[];
  isOver: boolean;
}

export interface BidOnPlant {
  bidOnPlant: BidOnPlant_bidOnPlant;
}

export interface BidOnPlantVariables {
  gameId: string;
  bid?: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: BuyCities
// ====================================================

export interface BuyCities_buyCities_info {
  turn: number;
  era: number;
  phase: Phase;
  actionType: ActionType;
  activeUser: string;
}

export interface BuyCities_buyCities_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyCities_buyCities_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyCities_buyCities_playerOrder {
  clockwiseOrder: number;
  username: string;
  color: Color;
  money: number;
  resources: BuyCities_buyCities_playerOrder_resources;
  plantIds: string[];
}

export interface BuyCities_buyCities_cityList {
  cityId: string;
  occupants: string[];
}

export interface BuyCities_buyCities_auction {
  plantId: string;
  bid: number;
  leader: string;
  active: string;
  passed: string[] | null;
}

export interface BuyCities_buyCities_plantPhaseEvents {
  plantId: string | null;
  cost: number | null;
  username: string;
}

export interface BuyCities_buyCities {
  info: BuyCities_buyCities_info;
  resourceMarket: BuyCities_buyCities_resourceMarket;
  playerOrder: BuyCities_buyCities_playerOrder[];
  plantMarket: string[];
  era3Plants: string[];
  discardedPlants: string[];
  possibleDeck: string[];
  deckCount: number;
  cityList: BuyCities_buyCities_cityList[];
  auction: BuyCities_buyCities_auction | null;
  plantPhaseEvents: BuyCities_buyCities_plantPhaseEvents[];
  isOver: boolean;
}

export interface BuyCities {
  buyCities: BuyCities_buyCities;
}

export interface BuyCitiesVariables {
  gameId: string;
  cityIds: string[];
  cost: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: BuyResources
// ====================================================

export interface BuyResources_buyResources_info {
  turn: number;
  era: number;
  phase: Phase;
  actionType: ActionType;
  activeUser: string;
}

export interface BuyResources_buyResources_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyResources_buyResources_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface BuyResources_buyResources_playerOrder {
  clockwiseOrder: number;
  username: string;
  color: Color;
  money: number;
  resources: BuyResources_buyResources_playerOrder_resources;
  plantIds: string[];
}

export interface BuyResources_buyResources_cityList {
  cityId: string;
  occupants: string[];
}

export interface BuyResources_buyResources_auction {
  plantId: string;
  bid: number;
  leader: string;
  active: string;
  passed: string[] | null;
}

export interface BuyResources_buyResources_plantPhaseEvents {
  plantId: string | null;
  cost: number | null;
  username: string;
}

export interface BuyResources_buyResources {
  info: BuyResources_buyResources_info;
  resourceMarket: BuyResources_buyResources_resourceMarket;
  playerOrder: BuyResources_buyResources_playerOrder[];
  plantMarket: string[];
  era3Plants: string[];
  discardedPlants: string[];
  possibleDeck: string[];
  deckCount: number;
  cityList: BuyResources_buyResources_cityList[];
  auction: BuyResources_buyResources_auction | null;
  plantPhaseEvents: BuyResources_buyResources_plantPhaseEvents[];
  isOver: boolean;
}

export interface BuyResources {
  buyResources: BuyResources_buyResources;
}

export interface BuyResourcesVariables {
  gameId: string;
  resources: ResourcesInput;
  cost: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateGame
// ====================================================

export interface CreateGame {
  createGame: string;
}

export interface CreateGameVariables {
  mapName: string;
  usernames: string[];
  name?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser_createUser {
  id: string;
}

export interface CreateUser {
  createUser: CreateUser_createUser | null;
}

export interface CreateUserVariables {
  username: string;
  password: string;
  we: boolean;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DiscardPlant
// ====================================================

export interface DiscardPlant_discardPlant_info {
  turn: number;
  era: number;
  phase: Phase;
  actionType: ActionType;
  activeUser: string;
}

export interface DiscardPlant_discardPlant_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface DiscardPlant_discardPlant_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface DiscardPlant_discardPlant_playerOrder {
  clockwiseOrder: number;
  username: string;
  color: Color;
  money: number;
  resources: DiscardPlant_discardPlant_playerOrder_resources;
  plantIds: string[];
}

export interface DiscardPlant_discardPlant_cityList {
  cityId: string;
  occupants: string[];
}

export interface DiscardPlant_discardPlant_auction {
  plantId: string;
  bid: number;
  leader: string;
  active: string;
  passed: string[] | null;
}

export interface DiscardPlant_discardPlant_plantPhaseEvents {
  plantId: string | null;
  cost: number | null;
  username: string;
}

export interface DiscardPlant_discardPlant {
  info: DiscardPlant_discardPlant_info;
  resourceMarket: DiscardPlant_discardPlant_resourceMarket;
  playerOrder: DiscardPlant_discardPlant_playerOrder[];
  plantMarket: string[];
  era3Plants: string[];
  discardedPlants: string[];
  possibleDeck: string[];
  deckCount: number;
  cityList: DiscardPlant_discardPlant_cityList[];
  auction: DiscardPlant_discardPlant_auction | null;
  plantPhaseEvents: DiscardPlant_discardPlant_plantPhaseEvents[];
  isOver: boolean;
}

export interface DiscardPlant {
  discardPlant: DiscardPlant_discardPlant;
}

export interface DiscardPlantVariables {
  gameId: string;
  plantId: string;
  hybridChoice?: HybridChoiceInput | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGame
// ====================================================

export interface GetGame_getGame_map_cities {
  id: string;
  name: string;
  lat: number;
  lng: number;
  region: number;
}

export interface GetGame_getGame_map_connections_cities {
  id: string;
}

export interface GetGame_getGame_map_connections {
  id: string;
  cost: number;
  cities: GetGame_getGame_map_connections_cities[];
}

export interface GetGame_getGame_map {
  id: string;
  name: string;
  cities: GetGame_getGame_map_cities[];
  connections: GetGame_getGame_map_connections[];
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

export interface GetGame_getGame_state_info {
  turn: number;
  era: number;
  phase: Phase;
  actionType: ActionType;
  activeUser: string;
}

export interface GetGame_getGame_state_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GetGame_getGame_state_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GetGame_getGame_state_playerOrder {
  clockwiseOrder: number;
  username: string;
  color: Color;
  money: number;
  resources: GetGame_getGame_state_playerOrder_resources;
  plantIds: string[];
}

export interface GetGame_getGame_state_cityList {
  cityId: string;
  occupants: string[];
}

export interface GetGame_getGame_state_auction {
  plantId: string;
  bid: number;
  leader: string;
  active: string;
  passed: string[] | null;
}

export interface GetGame_getGame_state_plantPhaseEvents {
  plantId: string | null;
  cost: number | null;
  username: string;
}

export interface GetGame_getGame_state {
  info: GetGame_getGame_state_info;
  resourceMarket: GetGame_getGame_state_resourceMarket;
  playerOrder: GetGame_getGame_state_playerOrder[];
  plantMarket: string[];
  era3Plants: string[];
  discardedPlants: string[];
  possibleDeck: string[];
  deckCount: number;
  cityList: GetGame_getGame_state_cityList[];
  auction: GetGame_getGame_state_auction | null;
  plantPhaseEvents: GetGame_getGame_state_plantPhaseEvents[];
  isOver: boolean;
}

export interface GetGame_getGame {
  id: string;
  map: GetGame_getGame_map;
  regions: number[];
  restockRates: GetGame_getGame_restockRates;
  era2Start: number;
  gameEnd: number;
  cityCostHelper: string;
  state: GetGame_getGame_state | null;
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
// GraphQL subscription operation: GameStateUpdated
// ====================================================

export interface GameStateUpdated_gameStateUpdated_info {
  turn: number;
  era: number;
  phase: Phase;
  actionType: ActionType;
  activeUser: string;
}

export interface GameStateUpdated_gameStateUpdated_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GameStateUpdated_gameStateUpdated_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GameStateUpdated_gameStateUpdated_playerOrder {
  clockwiseOrder: number;
  username: string;
  color: Color;
  money: number;
  resources: GameStateUpdated_gameStateUpdated_playerOrder_resources;
  plantIds: string[];
}

export interface GameStateUpdated_gameStateUpdated_cityList {
  cityId: string;
  occupants: string[];
}

export interface GameStateUpdated_gameStateUpdated_auction {
  plantId: string;
  bid: number;
  leader: string;
  active: string;
  passed: string[] | null;
}

export interface GameStateUpdated_gameStateUpdated_plantPhaseEvents {
  plantId: string | null;
  cost: number | null;
  username: string;
}

export interface GameStateUpdated_gameStateUpdated {
  info: GameStateUpdated_gameStateUpdated_info;
  resourceMarket: GameStateUpdated_gameStateUpdated_resourceMarket;
  playerOrder: GameStateUpdated_gameStateUpdated_playerOrder[];
  plantMarket: string[];
  era3Plants: string[];
  discardedPlants: string[];
  possibleDeck: string[];
  deckCount: number;
  cityList: GameStateUpdated_gameStateUpdated_cityList[];
  auction: GameStateUpdated_gameStateUpdated_auction | null;
  plantPhaseEvents: GameStateUpdated_gameStateUpdated_plantPhaseEvents[];
  isOver: boolean;
}

export interface GameStateUpdated {
  gameStateUpdated: GameStateUpdated_gameStateUpdated | null;
}

export interface GameStateUpdatedVariables {
  gameId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_getCurrentUser {
  id: string;
  username: string;
  preferredColor: Color | null;
  we: boolean;
}

export interface GetCurrentUser {
  getCurrentUser: GetCurrentUser_getCurrentUser | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGameOverData
// ====================================================

export interface GetGameOverData_getGameOverData_winOrder {
  username: string;
  color: Color;
  numPowered: number;
  money: number;
  won: boolean;
}

export interface GetGameOverData_getGameOverData {
  isOver: boolean;
  winOrder: GetGameOverData_getGameOverData_winOrder[];
}

export interface GetGameOverData {
  getGameOverData: GetGameOverData_getGameOverData | null;
}

export interface GetGameOverDataVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMyRecentGames
// ====================================================

export interface GetMyRecentGames_getMyRecentGames {
  id: string;
  name: string | null;
  players: string[];
}

export interface GetMyRecentGames {
  getMyRecentGames: GetMyRecentGames_getMyRecentGames[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOnlineUsernames
// ====================================================

export interface GetOnlineUsernames {
  getOnlineUsernames: string[];
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
// GraphQL mutation operation: KeepMeOnline
// ====================================================

export interface KeepMeOnline_keepMeOnline {
  id: string;
}

export interface KeepMeOnline {
  keepMeOnline: KeepMeOnline_keepMeOnline | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  token: string | null;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  username: string;
  password: string;
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
  region: number;
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
// GraphQL query operation: GetPlants
// ====================================================

export interface GetPlants_fetchPlants {
  id: string;
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

export interface GetPlants {
  fetchPlants: GetPlants_fetchPlants[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PowerUp
// ====================================================

export interface PowerUp_powerUp_info {
  turn: number;
  era: number;
  phase: Phase;
  actionType: ActionType;
  activeUser: string;
}

export interface PowerUp_powerUp_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PowerUp_powerUp_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PowerUp_powerUp_playerOrder {
  clockwiseOrder: number;
  username: string;
  color: Color;
  money: number;
  resources: PowerUp_powerUp_playerOrder_resources;
  plantIds: string[];
}

export interface PowerUp_powerUp_cityList {
  cityId: string;
  occupants: string[];
}

export interface PowerUp_powerUp_auction {
  plantId: string;
  bid: number;
  leader: string;
  active: string;
  passed: string[] | null;
}

export interface PowerUp_powerUp_plantPhaseEvents {
  plantId: string | null;
  cost: number | null;
  username: string;
}

export interface PowerUp_powerUp {
  info: PowerUp_powerUp_info;
  resourceMarket: PowerUp_powerUp_resourceMarket;
  playerOrder: PowerUp_powerUp_playerOrder[];
  plantMarket: string[];
  era3Plants: string[];
  discardedPlants: string[];
  possibleDeck: string[];
  deckCount: number;
  cityList: PowerUp_powerUp_cityList[];
  auction: PowerUp_powerUp_auction | null;
  plantPhaseEvents: PowerUp_powerUp_plantPhaseEvents[];
  isOver: boolean;
}

export interface PowerUp {
  powerUp: PowerUp_powerUp;
}

export interface PowerUpVariables {
  gameId: string;
  plantIds: string[];
  hybridChoice?: HybridChoiceInput | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PutUpPlant
// ====================================================

export interface PutUpPlant_putUpPlant_info {
  turn: number;
  era: number;
  phase: Phase;
  actionType: ActionType;
  activeUser: string;
}

export interface PutUpPlant_putUpPlant_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PutUpPlant_putUpPlant_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface PutUpPlant_putUpPlant_playerOrder {
  clockwiseOrder: number;
  username: string;
  color: Color;
  money: number;
  resources: PutUpPlant_putUpPlant_playerOrder_resources;
  plantIds: string[];
}

export interface PutUpPlant_putUpPlant_cityList {
  cityId: string;
  occupants: string[];
}

export interface PutUpPlant_putUpPlant_auction {
  plantId: string;
  bid: number;
  leader: string;
  active: string;
  passed: string[] | null;
}

export interface PutUpPlant_putUpPlant_plantPhaseEvents {
  plantId: string | null;
  cost: number | null;
  username: string;
}

export interface PutUpPlant_putUpPlant {
  info: PutUpPlant_putUpPlant_info;
  resourceMarket: PutUpPlant_putUpPlant_resourceMarket;
  playerOrder: PutUpPlant_putUpPlant_playerOrder[];
  plantMarket: string[];
  era3Plants: string[];
  discardedPlants: string[];
  possibleDeck: string[];
  deckCount: number;
  cityList: PutUpPlant_putUpPlant_cityList[];
  auction: PutUpPlant_putUpPlant_auction | null;
  plantPhaseEvents: PutUpPlant_putUpPlant_plantPhaseEvents[];
  isOver: boolean;
}

export interface PutUpPlant {
  putUpPlant: PutUpPlant_putUpPlant;
}

export interface PutUpPlantVariables {
  gameId: string;
  plantId?: string | null;
  bid?: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetUserPreferences
// ====================================================

export interface SetUserPreferences_setUserPreferences {
  id: string;
  preferredColor: Color | null;
}

export interface SetUserPreferences {
  setUserPreferences: SetUserPreferences_setUserPreferences;
}

export interface SetUserPreferencesVariables {
  preferredColor?: Color | null;
  we?: boolean | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Game
// ====================================================

export interface Game_map_cities {
  id: string;
  name: string;
  lat: number;
  lng: number;
  region: number;
}

export interface Game_map_connections_cities {
  id: string;
}

export interface Game_map_connections {
  id: string;
  cost: number;
  cities: Game_map_connections_cities[];
}

export interface Game_map {
  id: string;
  name: string;
  cities: Game_map_cities[];
  connections: Game_map_connections[];
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

export interface Game_state_info {
  turn: number;
  era: number;
  phase: Phase;
  actionType: ActionType;
  activeUser: string;
}

export interface Game_state_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface Game_state_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface Game_state_playerOrder {
  clockwiseOrder: number;
  username: string;
  color: Color;
  money: number;
  resources: Game_state_playerOrder_resources;
  plantIds: string[];
}

export interface Game_state_cityList {
  cityId: string;
  occupants: string[];
}

export interface Game_state_auction {
  plantId: string;
  bid: number;
  leader: string;
  active: string;
  passed: string[] | null;
}

export interface Game_state_plantPhaseEvents {
  plantId: string | null;
  cost: number | null;
  username: string;
}

export interface Game_state {
  info: Game_state_info;
  resourceMarket: Game_state_resourceMarket;
  playerOrder: Game_state_playerOrder[];
  plantMarket: string[];
  era3Plants: string[];
  discardedPlants: string[];
  possibleDeck: string[];
  deckCount: number;
  cityList: Game_state_cityList[];
  auction: Game_state_auction | null;
  plantPhaseEvents: Game_state_plantPhaseEvents[];
  isOver: boolean;
}

export interface Game {
  id: string;
  map: Game_map;
  regions: number[];
  restockRates: Game_restockRates;
  era2Start: number;
  gameEnd: number;
  cityCostHelper: string;
  state: Game_state | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameState
// ====================================================

export interface GameState_info {
  turn: number;
  era: number;
  phase: Phase;
  actionType: ActionType;
  activeUser: string;
}

export interface GameState_resourceMarket {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GameState_playerOrder_resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

export interface GameState_playerOrder {
  clockwiseOrder: number;
  username: string;
  color: Color;
  money: number;
  resources: GameState_playerOrder_resources;
  plantIds: string[];
}

export interface GameState_cityList {
  cityId: string;
  occupants: string[];
}

export interface GameState_auction {
  plantId: string;
  bid: number;
  leader: string;
  active: string;
  passed: string[] | null;
}

export interface GameState_plantPhaseEvents {
  plantId: string | null;
  cost: number | null;
  username: string;
}

export interface GameState {
  info: GameState_info;
  resourceMarket: GameState_resourceMarket;
  playerOrder: GameState_playerOrder[];
  plantMarket: string[];
  era3Plants: string[];
  discardedPlants: string[];
  possibleDeck: string[];
  deckCount: number;
  cityList: GameState_cityList[];
  auction: GameState_auction | null;
  plantPhaseEvents: GameState_plantPhaseEvents[];
  isOver: boolean;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Resources
// ====================================================

export interface Resources {
  coal: number;
  oil: number;
  trash: number;
  uranium: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Phase {
  CITY = "CITY",
  PLANT = "PLANT",
  POWER = "POWER",
  RESOURCE = "RESOURCE",
}

export enum ActionType {
  BID_ON_PLANT = "BID_ON_PLANT",
  BUY_CITIES = "BUY_CITIES",
  BUY_RESOURCES = "BUY_RESOURCES",
  DISCARD_PLANT = "DISCARD_PLANT",
  POWER_UP = "POWER_UP",
  PUT_UP_PLANT = "PUT_UP_PLANT",
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