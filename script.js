// JavaScript Document

var x = document.getElementById("form_sample");
var createform = document.createElement('form');
createform.setAttribute("action", ""); 
createform.setAttribute("method", "post"); 
x.appendChild(createform);

var heading = document.createElement('h2'); 
heading.innerHTML = "Contact Form";
createform.appendChild(heading);

var line = document.createElement('hr'); 
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); 
namelabel.innerHTML = "Your Name : "; 
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); 
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);


var lastnamelabel = document.createElement('label');
lastnamelabel.innerHTML = "Your Lastname: ";
createform.appendChild(lastnamelabel);

var lastnameelement = document.createElement('input');
lastnameelement.setAttribute("type", "text");
lastnameelement.setAttribute("lastname", "dlastname");
createform.appendChild(lastnameelement);

var lastnamebreak = document.createElement('br');
createform.appendChild(lastnamebreak);

var telephonelabel = document.createElement('label');
telephonelabel.innerHTML = "Your Tlf Number: ";
createform.appendChild(telephonelabel);

var telephoneelement = document.createElement('input');
telephoneelement.setAttribute("type", "number");
telephoneelement.setAttribute("telephonenumber", "dtelephonenumber");
createform.appendChild(telephoneelement);

var telephonebreak = document.createElement('br');
createform.appendChild(telephonebreak);


var emaillabel = document.createElement('label');
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); 
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var submitelement = document.createElement('input'); 
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "submit");
createform.appendChild(submitelement);


 function submitelement() {
        alert( "onclick Event detected!" );
      }

