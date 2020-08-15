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
  },
  Italy: {
    center: [42, 12.5],
    minZoom: 6,
    maxZoom: 9,
  },
  Seattle: {
    center: [47.6062, -122.3321],
    minZoom: 12,
    maxZoom: 14,
  },
  ['Northern Europe']: {
    center: [61.4, 20],
    minZoom: 5,
    maxZoom: 10,
  },
  China: {
    center: [35.9, 104.2],
    minZoom: 4.5,
    maxZoom: 6.5,
  }
};

export const getMapConfig = (mapName: string): MapConfig => {
  return configs[mapName] || configs.USA;
}
