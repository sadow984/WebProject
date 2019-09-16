function validate() {
    var ID = document.getElementById('ID').value;
    var regEx_id = /^[1|2]{1}[6-9]{1}[4,9,2]{3}[0-9]{5}$/
    var ID_result = regEx_id.test(ID);

    var pass = document.getElementById('password').value;
    var regEx_password = /^([$&+,:;=?@#|'<>.^*()%!-\w\d])+$/
    var password_result = regEx_password.test(pass);

    if (!ID_result) {
        if (ID.length != 10) {
            document.getElementById('error_id').innerHTML = "ID length must be of 10 digits";
            return false;
        }
        // else if(ID.value[1] !=1 || ID.value[0] !=2){
        //     document.getElementById('error_id').innerHTML = "First digit must be either 1 or 2";
        //     return false;

        
        else {
            document.getElementById('error_id').innerHTML = "Please Enter Correct ID";
            return false;
         }
    }
    else if (!password_result) {
        // document.getElementById('error_password').innerHTML =  "";
        return false;
    }

    else {
        alert('Success');
    }
}