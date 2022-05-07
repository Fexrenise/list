let bar = document.querySelector("#seki");
let ball = document.querySelector('#top');

let barX = 0;
let ballX = 0;
let ballY = 0;

onkeydown = barMove;

function barMove(e){
    if(e.keyCode == 39){
        if(barX<500){
            barX +=25;
        }
    }


    if(e.keyCode == 37){
        if(barX>0){
            barX -=25;
        }
    }

    bar.style.left = barX + 'px';

}