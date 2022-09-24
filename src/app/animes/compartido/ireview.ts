import { IJPG } from "./i-jpg";

export interface Ireview {
    mal_id: number;
    title?: string;
    synopsis?: string;
    images: IJPG;
    score: number;
}
