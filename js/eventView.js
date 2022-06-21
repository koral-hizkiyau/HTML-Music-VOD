import { doApi } from "./apiSer.js";
import { sortMusic } from "./musicManager.js";


export const declareEventView = () => {

    document.querySelector("#search_btn").addEventListener("click",() => {
        let query = document.querySelector("#id_search").value;
        
        let url = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${query}`;
    
        doApi(url);
    })

    let sort_sel = document.querySelector("#id_sort_select")
    console.log(sort_sel);
    
    sort_sel.addEventListener("change",() => {
        sortMusic(sort_sel.value)
    })
}