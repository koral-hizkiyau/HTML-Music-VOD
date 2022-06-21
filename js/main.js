import {doApi} from "./apiSer.js"
import { declareEventView } from "./eventView.js";
import { declarDarkEvent } from "./dark.js";

window.onload = () => {
    init();
}

const init = () => {
    let url = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=avril&lavigne";
    doApi(url);
    declareEventView();
    declarDarkEvent();
 
}