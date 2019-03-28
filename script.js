document.addEventListener("mousemove", (e)=>{
    
    var width = window.innerWidth;
    var height = window.innerHeight;
    var logo = document.getElementById("logo");

    if(e.y < height/2){   
        logo.src = "./logo_weird.svg"
    }
    else
        logo.src = "./logo.svg"
})