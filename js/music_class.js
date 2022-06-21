import { showDarkWindow } from "./dark.js";


class MusicStore{
    constructor(_parent,_image,_title,_artist,_rank,_sound,_id){
        this.parent=_parent;
        this.image=_image;
        this.title=_title;
        this.artist=_artist;
        this.rank=_rank;
        this.sound=_sound;
        this.id=_id;
    }


    render(){
        let newDiv = document.createElement("div");
        newDiv.className="col-lg-6 border";
        document.querySelector(this.parent).append(newDiv);

        newDiv.innerHTML +=`
        <img src="${this.image}" alt="${this.title} image" class="float-left mr-3 w-25">
        <h2>${this.title}</h2>
        <div>Artist: ${this.artist}</div>
        <div>Rank: ${this.rank}</div>
        <audio controls>
        <source src="${this.sound}" type="audio/mp3">
        </audio>
        `

        let newBtn = document.createElement("button");
        newBtn.className = "btn btn-danger";
        newBtn.innerHTML = "More info"
        newDiv.append(newBtn);

        newBtn.addEventListener("click",() => {
            //alert(this.bigImg)
            // יציג את הדארק בלחיצה ויעביר את התמונה הגדולה
            // ואת התגיות
            showDarkWindow(this.image,this.title)
        })


    }
}
export default MusicStore;