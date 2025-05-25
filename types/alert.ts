import { Ship } from "./ship";

export type AlertType = {
    id: string;
    ship: Ship;
    date: string;
    time: string;
    lat: string;
    lon: string;
    pitch: string;
    roll: string;
    status: string;
};
