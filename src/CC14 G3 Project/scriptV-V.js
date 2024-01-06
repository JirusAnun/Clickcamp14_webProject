let buttonVV = document.getElementById("btnV-V");
buttonVV.addEventListener ("click", () => {
  let volume = parseInt(document.getElementById("volume").value);
  let volume_soln = parseInt(document.getElementById("volume_soln").value);
  let outputVV = document.getElementById("outputV-V");

  let VV = (volume / volume_soln *100).toFixed(2);

  if ((volume <= 0)||(volume_soln<volume)) {
    outputVV.innerHTML = "Please insert the number again"
  }
  else{
  let VV = (volume / volume_soln *100).toFixed(2);
  

  outputVV.innerHTML = "Volume By Volume Percentage: " + VV;
  }

});