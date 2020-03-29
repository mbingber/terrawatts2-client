import { Color, PlantResourceType } from "./generatedTypes";
import C from "color";

export type ResourceType = "coal" | "oil" | "trash" | "uranium";

export const resourceColors: Record<PlantResourceType, string> = {
  COAL: '#7a623e',
  OIL: '#646675',
  TRASH: '#a3a359',
  URANIUM: '#a25858',
  WIND: '#75b786',
  HYBRID: 'rgba(0, 0, 0, 0.5)'
};

export const resourceColorFilters: Record<PlantResourceType, string> = {
  COAL: "invert(40%) sepia(5%) saturate(4708%) hue-rotate(357deg) brightness(86%) contrast(71%)",
  OIL: "invert(40%) sepia(11%) saturate(480%) hue-rotate(195deg) brightness(96%) contrast(94%)",
  TRASH: "invert(78%) sepia(7%) saturate(2348%) hue-rotate(22deg) brightness(82%) contrast(83%)",
  URANIUM: "invert(42%) sepia(5%) saturate(3791%) hue-rotate(313deg) brightness(98%) contrast(98%)",
  WIND: "",
  HYBRID: ""
};

export const getSecondaryResourceColor = (resourceType: PlantResourceType): string => {
  const primaryColor = resourceColors[resourceType];

  return C(primaryColor).lighten(0.5).hex();
}

export const playerColors: Record<Color, string> = {
  RED: "#D25C5C",
  YELLOW: "#D2BE5C",
  GREEN: "#5CD273",
  BLUE: "#5C9BD2",
  PURPLE: "#9B5CD2",
  BLACK: "#4A4A4A"
}
