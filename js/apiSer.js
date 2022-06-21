import { createMusicStore } from "./musicManager.js"

export const doApi = async(_url) => {
    let resp = await fetch(_url);
     let data= await resp.json();
        console.log(data.data)
        createMusicStore(data.data)
 
}