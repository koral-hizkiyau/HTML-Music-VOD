import MusicStore from "./music_class.js";


export const music_ar = []

export const createMusicStore=(_ar)=>{
    music_ar.splice(0, music_ar.length)
    music_ar.push(..._ar);
    document.querySelector("#id_row").innerHTML="";
    _ar.map(item=>{
        let {title,rank,preview,artist,id} = item;
        let musicstore = new MusicStore("#id_row",artist.picture_big,title,artist.name,rank,preview,id);
        musicstore.render();
    })

}

export const sortMusic = (_propSort) => {
    let temp_ar = _.sortBy(music_ar, _propSort).reverse();
    createMusicStore(temp_ar);
}