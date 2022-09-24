import { Itrailer } from "./itrailer";
import { IJPG } from "./i-jpg";

export interface Ianime {
    mal_id: number;
    synopsis: string;
    images: IJPG;
    title: string;
    type: string;
    episodes: number;
    status: string;
    rating: string;
    score: string;
    background:string;
    trailer: Itrailer;
    rank: number;
    popularity: number;
    members: number;

}
