let imgvalue = 1;
let imgvalueunder = 0;



swipeimg();

swipeimgunder();

function swipeimg(){
    setTimeout(swipeimg, 400);
    let imgslide = document.getElementsByClassName("stripslide");
    let i;
    for(i = 0; i < imgslide.length; i++){
       imgslide[i].style.display = "none";
    }

    imgvalue++;
    if(imgvalue > imgslide.length){
        imgvalue = 1;
    }

    imgslide[imgvalue-1].style.display = "block";
}

function swipeimgunder(){
    setTimeout(swipeimgunder, 400);
    let imgslideunder = document.getElementsByClassName("stripslideunder");
    let i;
    for(i = 0; i < imgslideunder.length; i++){
       imgslideunder[i].style.display = "none";
    }
    
    imgvalueunder++
    if(imgvalue > imgslideunder.length){
        imgvalueunder = 0;
    }
        
    imgslideunder[imgvalueunder-1].style.display = "block";
}