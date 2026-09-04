

function calculateInterest(){
const p = parseFloat(document.getElementById("principal").value);
const r = parseFloat(document.getElementById("rate").value);
const t = parseFloat(document.getElementById("time").value);

const result = document.getElementById("result");

if(isNaN(p)|| isNaN(r) ||isNaN(t)){
    result.innerHTML = "Please fill all fields with correct numbers.";
    return;
}
const interest = (p*r*t)/100;
const totalAmount = p + interest;

result.innerHTML = `Interest : Rs.${interest.toFixed(2)}, TotalAmount : Rs.${totalAmount.toFixed(2)}`

}

function resetForm(){
    document.getElementById("principal").value ="";
    document.getElementById("rate").value ="";
    document.getElementById("time").value ="";

    result.innerHTML = "Enter values and click calculate."
}



