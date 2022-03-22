/*

    Name: Rezwan Ahmed
    Date: 3/09/22
    Descrp: JS page for password page
    Note: JS code page page for checking password showing password along with validation of code
*/

    /*shows the password if clicked */
    function showPassword(){
        var valid = document.getElementById("pass_word");
        if(valid.type === "password"){
            valid.type = "text";
        }
        else{
            valid.type = "password";
        }
    }

    /*checks if password is valid with cap,num,and punctuation*/
    function validPassword(){
        var input_valid = document.getElementById("pass_word");
        if(input_valid === "1234"){
            alert("hellow");
        }
        else{
            document.getElementById("demo").innerHTML="Error invalid input please enter password with Captilization(ABCD..), puncation(!>@...), and number(1234..)";
        }

    }
