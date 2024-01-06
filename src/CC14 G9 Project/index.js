function lxlx(){
    let name = document.getElementById("Name")
    let password = document.getElementById("Password")
    let caution = document.getElementsByClassName("caution")
    // console.log(name.value)
    // console.log(password.value)
    // console.log("error")

    if(name.value===""||password.value===""){
        console.log("error")
    }   else{
        console.log("passes")
        
        
            window.location.href = "index.html";
    
    }
}