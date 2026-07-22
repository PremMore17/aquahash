export interface GroundwaterZone {
  id: string;
  name: string;
  lat: number;
  lng: number;
  depth: number;
  risk: string;
  sustainability: number;
}

export interface MineralData {
  zone_id: string;
  tds: number;
  fluoride: number;
  iron: number;
  salinity: string;
}

export interface RainfallData {
  zone_id: string;
  annual_rainfall: number;
  recharge_rate: string;
}

export interface AIAnalysis {
  sustainability_score: number;
  risk_level: string;
  mineral_insight: string;
  recommendations: string[];
}

declare module "leaflet.heat";