// let a = 10
// let b = 11.1
// let c = "Clickcamp"
// let d = true;
// let e = false;

// if(a == 10) {
//     alert ("A is 10")
// }

//let a =10
//let b = 11.1
//let c ="ClickCamp"
//let d = true;
//let e = false;

//if(a==10) {
    //alert("A is 10")
//}

let button = document.getElementById("btn")

button.addEventListener("click",()=> {
    let age = parseInt(document.getElementById("age").value)
    let weight = parseInt(document.getElementById("weight").value)
    let output = document.getElementById("output")
    let output2 = document.getElementById("output2")


    if(age <0.5) {
        if(weight>0.08 && weight<3) {
            output.innerHTML ="slim"
        }else {
            output.innerHTML ="not slim"
            output2.innerHTML ="should excercise or manage about food"
        }
    } else if(age<6) {
        if(weight>0 && weight<4) {
            output.innerHTML = "slim"
        }else{
            output.innerHTML="not slim"
            output2.innerHTML ="should excercise or manage about food"
        }
    } else if(age<=21) {
        if(weight=>4 && weight<7) {
            output.innerHTML = "slim"
        }else{
            output.innerHTML = "not slim"
            output2.innerHTML ="should excercise or manage about food"
        }

    }

})
