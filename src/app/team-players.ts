import {Player} from './player';

export interface TeamPlayers {
    id : number;
    name : string;
    conference : string;
    win : number;
    loss : number; 
    players : Player[];
}
