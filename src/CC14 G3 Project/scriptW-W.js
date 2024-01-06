let buttonWW = document.getElementById("btnW-W")
buttonWW.addEventListener("click", () => {
    let weight = parseInt(document.getElementById("weight").value);
    let weight_soln = parseInt(document.getElementById("weight_soln").value);
    let outputWW = document.getElementById("outputW-W");

    // W-W% = weight / weight_soln 100

    let WW = (weight / weight_soln*100).toFixed(2)

    if ((weight <= 0)||(weight_soln<weight)) {
        outputWW.innerHTML = "Please insert the number again"
      }

      else {
    outputWW.innerHTML = "Weight By Weight Percentage: " + WW
      }
    
  });