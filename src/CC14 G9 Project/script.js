//const fs = require('fs');
//const path = require('path');
//<script type="module" src="script.js"></script>
//console.log('test')
let score = 0;
let score_sum = localStorage.getItem("score")
console.log(score_sum)
window.onload = function(){
    let img = document.getElementById("pop1");
    let cout = document.getElementById("score");
    

    img.addEventListener('mousedown',function(){
        increaseScore()
        img.src = "ta2-removebg-preview.png";
        localStorage.setItem("score", ++score_sum)
        document.getElementById('scoresum').innerText = score_sum
    });

    img.addEventListener('mouseup',function(){
        img.src = "ta1-removebg-preview.png";
    });

    

    function increaseScore(){
        score++;
        cout.innerHTML = score;
    }
   
}

function resetValue(){
        score_sum=0;
        document.getElementById('scoresum').innerText = 0;
        score=0
        document.getElementById("score").innerHTML = 0;
    }

