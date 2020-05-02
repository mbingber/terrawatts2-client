interface MapConfig {
  center: [number, number];
  minZoom: number;
  maxZoom: number;
  maxBounds?: [[number, number], [number, number]];
}

const configs: Record<string, MapConfig> = {
  USA: {
    center: [33.5, -95],
    minZoom: 4.5,
    maxZoom: 6.5,
    maxBounds: [[57, -145], [11, -59]]
  },
  Germany: {
    center: [51, 10.5],
    minZoom: 6,
    maxZoom: 8.5,
  }
};

export const getMapConfig = (mapName: string): MapConfig => {
  return configs[mapName] || configs.USA;
}
