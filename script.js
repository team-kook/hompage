var prevDegLeft = 0;
var prevDegRight = 0;

document.addEventListener("mousemove", (e)=>{
    var eyeLeft = document.getElementById("eye-left");
    var rectLeft = eyeLeft.getBoundingClientRect();
    var eyePosLeft = {
        x: rectLeft.x + rectLeft.width / 2,
        y: rectLeft.y + rectLeft.height / 2,
    }

    var eyeRight = document.getElementById("eye-right");
    var rectRight = eyeRight.getBoundingClientRect();
    var eyePosRight = {
        x: rectRight.x + rectRight.width / 2,
        y: rectRight.y + rectRight.height / 2,
    }

    // re-position with prevDeg
    eyePosLeft.x -= 11*Math.cos(prevDegLeft);
    eyePosLeft.y -= 11*Math.sin(prevDegLeft);
    eyePosRight.x -= 11*Math.cos(prevDegRight);
    eyePosRight.y -= 11*Math.sin(prevDegRight);

    var degLeft = Math.atan((e.y - eyePosLeft.y) / (e.x - eyePosLeft.x));
    if(e.x > eyePosLeft.x){
        eyeLeft.setAttribute('style', `transform: translate(${11*Math.cos(degLeft)}px, ${11*Math.sin(degLeft)}px)`);
    }
    else {
        eyeLeft.setAttribute('style', `transform: translate(${-11*Math.cos(degLeft)}px, ${-11*Math.sin(degLeft)}px)`);
    }

    var degRight = Math.atan((e.y - eyePosRight.y) / (e.x - eyePosRight.x));
    if(e.x > eyePosRight.x){
        eyeRight.setAttribute('style', `transform: translate(${11*Math.cos(degRight)}px, ${11*Math.sin(degRight)}px)`);
    }
    else {
        eyeRight.setAttribute('style', `transform: translate(${-11*Math.cos(degRight)}px, ${-11*Math.sin(degRight)}px)`);
    }

    prevDegLeft = degLeft;
    prevDegRight = degRight;
})