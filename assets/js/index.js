let fName = document.querySelector("#fNameIn");
let fErrorFName = document.querySelector("#errorFName");
let lName = document.querySelector("#LNameIn");
let lErrorLName = document.querySelector("#errorLName");
let Email = document.querySelector("#emailIn");
let ErrorEmail = document.querySelector("#errorEmail");
let password = document.querySelector("#password");
let ErrorPassword = document.querySelector("#errorPassword");
let repeatPassword = document.querySelector("#rPassword");
let ErrorRPassword = document.querySelector("#errorRPassword");

let button = document.querySelector("#btn");

button.addEventListener("mouseover", function() {
    if(fName.value === "" && lName.value ==="" &&  Email.value ==="" && password.value ==="" && repeatPassword.value === "" ){
        button.classList.toggle("right");
    } 

})




button.addEventListener('click', function() {

    // Name Path
    let Name = fName.value.trim();
    fErrorFName.style.color = 'red';


    for (let i = 0; i < Name.length; i++) {
        let charCode =Name.charCodeAt(i);
        if(!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <=122))){
            fErrorFName.innerHTML = "The name must contain only letter.";
            fName.style.bordercolor = 'red';
            break;
        } else {
            fErrorFName.innerHTML = "";
            fName.style.bordercolor = 'green';

        }

    }

    if(Name.length < 3) {
        fErrorFName.innerHTML = "Name must be at least 3 characters.";
        fName.style.bordercolor = 'red';

    }

    // Surname path

    let SurName = lName.value.trim();
    lErrorLName.style.color = 'red';

    for (let i = 0; i < SurName.length; i++) {
        let charCode =SurName.charCodeAt(i);
        if(!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <=122))){
            lErrorLName.innerHTML = 'The name must contain only letter';
            lName.style.bordercolor = 'red';
        } else {
            lErrorLName.innerHTML = "";
            lName.style.bordercolor = 'green';

        }

    }

    if(Name.length < 3) {
        lErrorLName.innerHTML = 'Name must be at least 3 characters';
        lName.style.bordercolor = 'red';

    }


    // email path

    let mailAdress = Email.value.trim();
    ErrorEmail.style.color = 'red';

    if(mailAdress === " " || !mailAdress.includes("@")){
        ErrorEmail.innerHTML=`Please write your correct mail.`
        Email.style.borderColor= "red";
    } else {
        ErrorEmail.innerHTML= "";
        Email.style.borderColor="green";
    }



    // password path

    let mainPassword = password.value.trim();
    ErrorPassword.style.color = `red`;

    if (mainPassword.length < 8 || mainPassword.length > 20){
        ErrorPassword.innerHTML="The password must be  minimum 8 and maximum 20 characters.";
        password.style.borderColor= "red";

    }
    else{ ErrorPassword.innerHTML= "";
        password.style.borderColor = "green";
    }


    // repeat password path

    let againPassword = repeatPassword.value.trim();
    ErrorRPassword.style.color= `red`;


    if (mainPassword !== againPassword){
        ErrorRPassword.innerHTML="The password is not the same.";
        repeatPassword.style.borderColor= "red";
    } else {
        ErrorRPassword.innerHTML= "";
        repeatPassword.style.borderColor="green";
    }


    // checkbox path

    const checkt = document.getElementById("check");
    if(!checkt.checked){
        document.getElementById("qaydalar").style.color = "red";
    }else{
        document.getElementById("qaydalar").style.color = "green";
    }


    if (fErrorFName.innerHTML === "" && lErrorLName.innerHTML === "" && ErrorEmail.innerHTML === "" && ErrorPassword.innerHTML === "" && ErrorRPassword.innerHTML === "") {
        window.location.href = "http://127.0.0.1:5500/assets/Pages/login.html";
    }
});