let imgvalue = 0;


swipeimg();

function swipeimg(){
    let img = document.getElementsByClassName("stripslide");
    let i;
    for(i = 0; i < img.length; i++){
       img[i].style.display = "none";
    }

    imgvalue++;
    if(imgvalue > img.length){
        imgvalue = 0;
    }

    img[i].style.display = "block";
    setInterval(swipeimg, 200);
}
