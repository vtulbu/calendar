export interface Weather {
  location: Location;
  current: Current;
}

export interface Current {
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  uv: number;
}

export interface Condition {
  icon: string;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}
