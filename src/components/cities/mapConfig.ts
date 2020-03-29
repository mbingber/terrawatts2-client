interface MapConfig {
  center: [number, number];
  minZoom: number;
  maxZoom: number;
}

const configs: Record<string, MapConfig> = {
  USA: {
    center: [33.5, -95],
    minZoom: 4.5,
    maxZoom: 6.5
  }
};

export const getMapConfig = (mapName: string): MapConfig => {
  return configs[mapName] || configs.USA;
}
