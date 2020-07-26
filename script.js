function pn()
{
    
    var inputtxt=document.querySelector("#phno");

    var phoneno = /^[6-9]\d{9}$/;
    if((inputtxt.value.match(phoneno)))
        { 
            document.querySelector("#phnoerror").innerHTML="";
      return true;
        }
      else
        {
        event.preventDefault();
        document.querySelector("#phnoerror").innerHTML="Enter a valid phone number";
        return false;
        }

}

function CheckPass() 
{ 
var pass1=document.querySelector("#pass");
var pass2=document.querySelector("#pass2");
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(pass1.value.match(passw)) 
{ 
    document.querySelector("#passerror").innerHTML="";
    if( pass1.value.localeCompare(pass2.value)==0)
    
    {
        document.querySelector("#matcherror").innerHTML="";
        return true;
    }
        else
        {
            event.preventDefault();
            document.querySelector("#matcherror").innerHTML="Passwords not matched";
            return false;

        }
}
else
{ 
    event.preventDefault();
    document.querySelector("#passerror").innerHTML="Password must contain 6 to 20 chars ,atleast 1 digit,1 uppercase and 1 lowercase char";
    return false;

}
}
