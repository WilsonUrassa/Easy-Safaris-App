
export type ZoneId = 'northern' | 'southern' | 'eastern' | 'western';

export interface Park {
  id: string;
  name: string;
  zone: ZoneId;
  description: string;
  image: string;
  tags: string[];
  elevation?: string;
  bestTime?: string;
  rating?: string;
  statusIcon?: string;
  statusText?: string;
}

export interface Zone {
  id: ZoneId;
  name: string;
  regions: string;
  image: string;
  tagline: string;
  highlights: string[];
}

export interface AppState {
  view: 'login' | 'home' | 'zone' | 'park' | 'map' | 'profile';
  selectedZoneId?: ZoneId;
  selectedParkId?: string;
}
