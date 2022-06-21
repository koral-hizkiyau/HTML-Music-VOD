export const declarDarkEvent = () => {
    document.querySelector("#dark_close_btn").addEventListener("click",() => {
        document.querySelector("#id_dark").className = "d-none";
        //alert("dark")
    })
}

export const showDarkWindow = (_pic,_title) => {
    document.querySelector("#id_dark").className = "dark";
    document.querySelector("#id_dark img").src = _pic;
    document.querySelector("#id_tag_dark").innerHTML = "Tags: "+_title;

}