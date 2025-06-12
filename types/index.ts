export type FormStateType =
    | {
          errors?: {
              code?: string[];
              name?: string[];
          };
          message?: string;
      }
    | undefined;

export type StatusShip = "Aktif" | "Tidak Aktif";

export interface Ship {
    code: string;
    name: string;
    status: StatusShip;
    created_at: string;
}

export interface NavigationLog {
    timestamp: number;
    lat: number;
    lon: number;
    pitch: number;
    roll: number;
    flag: boolean;
}

export interface ShipWithLatestLog extends Ship {
    latest_log: NavigationLog | null;
}

export interface ShipWitNavigationLog extends Ship {
    navigation_log: Record<string, NavigationLog>;
}
