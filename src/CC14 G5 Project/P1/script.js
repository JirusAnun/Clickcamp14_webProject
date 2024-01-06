
let button = document.getElementById("btn") 

// alert("AYO")
button.addEventListener("click", ()=>{
    // alert("uhy")


        // Assuming each course's credit and grade are entered in rows 1 and 2
        let credit1 = parseFloat(document.getElementById("row-1-credit").value)
        let grade1 = parseFloat(document.getElementById("row-1-grade").value)

        let credit2 = parseFloat(document.getElementById("row-2-credit").value) 
        let grade2 = parseFloat(document.getElementById("row-2-grade").value)

        let credit3 = parseFloat(document.getElementById("row-3-credit").value) 
        let grade3 = parseFloat(document.getElementById("row-3-grade").value)

        let output = document.getElementById("output")

        console.log({credit1,credit2, credit3, grade1, grade2, grade3})

        // Calculate GPA using a simple formula (you can adjust based on your GPA system)
        let credit = credit1+credit2+credit3
        let gpa = ((credit1 * grade1) + (credit2 * grade2) + (credit3 * grade3)) / (credit1 + credit2 + credit3);

        // Display the calculated GPA
        output.innerHTML = "Your GPA is: " + gpa.toFixed(2)  +" Credit : "+credit.toFixed(2)
 

})