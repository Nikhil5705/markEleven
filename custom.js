const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");

const checkButton = document.querySelector("#b12");
const output = document.querySelector("#show-output")
// var reference = $(".inputClass");
//const buttonEvt = document.getElementsByClassName('inputClass');

function getValues(sum, luckyNumber){
if(sum%luckyNumber===0){
output.innerText ="you are Lucky😎";
}
else{
    output.innerText ="you are not Lucky😥";
}

}


function checkDateOfBirth(){
    const dob = dateOfBirth.value;
    const sum = calculate(dob);
    if(sum, dob)
    getValues(sum, luckyNumber.value);
else
    output.innerText ="Please enter both fields";
}
function calculate(dob){
dob = dob.replaceAll("-","")
var sum = 0;
for(var i=0; i<dob.length; i++){
sum = sum + Number(dob.charAt(i));
}
return sum;
}

checkButton.addEventListener("click", checkDateOfBirth);