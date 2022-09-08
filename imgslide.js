let imgvalue = 1;



swipeimg();

function swipeimg(){
    
    let imgslideunder = document.getElementsByClassName("stripslideunder");
    let r;

    for(r = 0; r < imgslideunder.length; r++){
       imgslideunder[r].style.display = "none";
    }
    let imgslide = document.getElementsByClassName("stripslide");
    let i;
    
    for(i = 0; i < imgslide.length; i++){
       imgslide[i].style.display = "none";
    }
    
    imgvalue++;
    
    if(imgvalue > imgslide.length){
        imgvalue = 1;
    }
    
    imgslideunder[imgvalue-1].style.display = "block";
    
    imgslide[imgvalue-1].style.display = "block";
    
    setTimeout(swipeimg, 100);
}
