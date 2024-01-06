//Run On click
function start(){
    const numarray = rand3();
    const numsting = numarray.toString();
    // console.log(numsting);
    const [w1,w2,w3] = numsting.split('');
    const array = [w1,w2,w3];
    
    document.getElementById("wheel1").innerHTML = w1;
    document.getElementById("wheel2").innerHTML = w2;
    document.getElementById("wheel3").innerHTML = w3;

    let c3 = 0;

    
    if (check3(array) || c3 == 1){
        con()
        stcon()
        alert("BIT เงิน KUB")
    }
    
    if (check2(array)){
        scon();

    }




}

function rand3() {
    let randdomNum = Math.floor(Math.random() * 899) + 100;
    return randdomNum;
}


//Check If 2 cohesive number are the same
function check2(currentarray){
    let [w1,w2,w3] = currentarray

    if (w1 == w2 || w2 == w3){
        console.log("2m IN A ROW!");
        console.log(w1,w2,w3);
        return true
    }
    else {
        return false;
    }
}

function check3(currentarray){
    let [w1,w2,w3] = currentarray

    if (w1 == w2 && w2 == w3){
        console.log("3m IN A ROW!");
        console.log(w1,w2,w3);
        return true
    }
    else {
        return false;
    }
}



function con(){
    const end = Date.now() + 15 * 1000;

    // go Buckeyes!
    const colors = ["#bb0000", "#ffffff"];

    (function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
    });

    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    })();
    
}

function scon(){
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
}

function stcon(){
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ["star"],
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}