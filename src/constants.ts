export type ResourceType = "coal" | "oil" | "trash" | "uranium" | "wind" | "hybrid";

export const resourceColors: Record<ResourceType, string> = {
  coal: '#7a623e',
  oil: '#737377',
  trash: '#a3a359',
  uranium: '#a25858',
  wind: '#75b786',
  hybrid: 'black'
};