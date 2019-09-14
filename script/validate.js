function validate(){
    var ID = document.getElementById('ID').value;
    var regEx_id = /^[1-7]{2}[4,9,2]{3}[0-9]{5}$/
    var ID_result= regEx_id.test(ID);

    var pass = document.getElementById('password').value;
    var regEx_password = /^(([\w\d])+([\.|\_|\@])?([\w\d])*){6,}$/
    var password_result= regEx_password.test(pass);
    
    if(!ID_result){
        document.getElementById('error_id').innerHTML =  "Please Enter Correct ID";
        return false;
    }
    else if(!password_result){
        document.getElementById('error_password').innerHTML =  "minimum length range is 6 and must contain integers,alphabets and anyone of {'.','@','_'}";
        return false;
    }

    else{
        alert('Success');
    }
}