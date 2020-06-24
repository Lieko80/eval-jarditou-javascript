function Validate()
{
    var Valid = document.getElementById("btnenvoie");
    var nomOK = document.getElementById("nom").value;
    var prenomOK = document.getElementById("prenom").value;
    var cpOK = document.getElementById("cp").value;
    var birthDate=document.getElementById("date").value;
    var emailOk = document.getElementById("email").value;
    var questionOk = document.getElementById("question").value;
    var formvalid = document.getElementById("envoie");
    birthDate= new Date(birthDate);
    var ladate=new Date();
    



//nom

    if(nomOK.length>1)
    {
        nom.style.backgroundColor = "";
    }
    else
    {
        window.alert("veuillez rentrer votre nom");
        nom.style.backgroundColor = "#fba";
    }



//prenom

    if(prenomOK.length>1)
    {
        prenom.style.backgroundColor = "";
    }
    else
    {
        window.alert("veuillez rentrer votre prenom");
        prenom.style.backgroundColor = "#fba";
    }


//code postal
    if (cpOK.length ==5 && isNaN(cpOK) != true)
    {
        cp.style.backgroundColor = "";
    } 
    else
    {
        window.alert("rentrer code postal");
        cp.style.backgroundColor = "#fba";
    }
    

//email

    if(emailOk.indexOf("@") != -1) // si indice dans indexof trouver 
    {
        email.style.backgroundColor = "";
    }
    else
    {
        window.alert("rentrer mail");
        email.style.backgroundColor = "#fba";
    }

//question
    if(questionOk.length>1)
    {
        question.style.backgroundColor = "";
    }
    else
    {
        window.alert("veuillez rentrer votre question");
        question.style.backgroundColor = "#fba";
    }

//sexe

    if ((document.getElementById('sexeF').checked) || (document.getElementById('sexeM').checked))
    {
    }
    else
    {
        window.alert("choisisser un sexe");
    }

//validation coche
    if ((document.getElementById('chekbox').checked))
    {
    }
    else
    {
        window.alert("cocher accord");
    }


// date
if(birthDate> ladate)
    {
        window.alert("rentrer une date correcte");
        date.style.backgroundColor = "#fba";
        return false;
    }
else
    {
        date.style.backgroundColor = "";
    }
}