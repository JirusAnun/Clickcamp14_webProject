let buttonWV = document.getElementById("btnW-V")
  buttonWV.addEventListener("click", () => {
      let weight2 = parseInt(document.getElementById("weight2").value);
      let volume2_soln = parseInt(document.getElementById("volume2_soln").value);
      let outputWV = document.getElementById("outputW-V");

      // W-V% = weight / volume_soln 100

      let WV = (weight2 / volume2_soln*100).toFixed(2)

      if ((weight2 <= 0)||(volume2_soln<weight2)) {
        outputWV.innerHTML = "Please insert the number again"
      }
      else{
      let WV = (weight2 / volume2_soln *100).toFixed(2);
      

      outputWV.innerHTML = "Weight By Volume Percentage: " + W
      }

    });