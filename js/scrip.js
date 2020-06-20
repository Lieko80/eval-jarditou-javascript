function Validate()
{
    var Valid = document.getElementById("btnenvoie");
    var nomOK = document.getElementById("nom").value;
    var prenomOK = document.getElementById("prenom").value;
    var cpOK = document.getElementById("cp").value;
    var birthDate = document.getElementById("date").value;
    var emailOk = document.getElementById("email").value;
    var questionOk = document.getElementById("question").value;
    var formvalid = document.getElementById("envoie");

    var ladate=new Date();
    console.log("Nous sommes le : " + ladate);
    console.log(ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear());
    console.log(ladate.getFullYear() + "-" + (ladate.getMonth()+1) + "-" +  ladate.getDate());
    var date1 = (ladate.getFullYear() + "-" + (ladate.getMonth()+1) + "-" +  ladate.getDate());

    
    formvalid.addEventListener("click", Validate);



    console.log(nomOK);
    console.log(prenomOK);
    console.log(cpOK);
    console.log(birthDate);
    console.log(emailOk);



//nom

    if(nomOK.length>1)
    {
    }
    else
    {
        window.alert("veuillez rentrer votre nom");
    }



//prenom

    if(prenomOK.length>1)
    {
    }
    else
    {
        window.alert("veuillez rentrer votre prenom");
    }


//code postal
    if (cpOK.length ==5 && isNaN(cpOK) != true)
    {
    } 
    else
    {
        window.alert("rentrer code postal");
    }
    

//email

    if(emailOk.indexOf("@") != -1) // si indice dans indexof trouver 
    {
    }
    else
    {
        window.alert("rentrer mail");
    }

//question
    if(questionOk.length>1)
    {
    }
    else
    {
        window.alert("veuillez rentrer votre question");
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


//date format
/*
var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
var DateOK = document.getElementById('date');

if(DateOK.value.match(dateformat)) 
{ 
    var opera1 = DateOK.value.split('/'); 
    var opera2 = DateOK.value.split('-'); 
    lopera1 = opera1.length; 
    lopera2 = opera2.length; 

    if (lopera1>1) 
    { 
        var pdate = DateOK.value.split('/');
     
    } 

    else if (lopera2>1) 
    { 
        var pdate = DateOK.value.split('-');
    } 

    var dd = parseInt(pdate[0])
    ; var mm = parseInt(pdate[1]);
     var yy = parseInt(pdate[2]);
     var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31]; 

     if (mm==1 || mm>2) { if (dd>ListofDays[mm-1]) 
        {
             alert('Invalid date format!');
              return false; 
            } 
        } 
        if (mm==2) 
        { 
            var lyear = false; 
            if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
            { 
                lyear = true; 
            }
        if ((lyear==false) && (dd>=29)) 
        {
            alert('Format de date invalide');
             return false; 
        } 
        if ((lyear==true) && (dd>29)) 
        { 
            alert('Format de date invalide')
            ; return false; 
        } 
    } 
} 

else 
{ 
    alert("Format de date invalide");
        return false; 
    } 

*/


//comparaison date
var td=new Date();// Le date d'ouverture de la page (aujourd'hui)
    var dtn=document.getElementById('date').value; // on lit la date de naissance
    var an=dtn.substr(0,4); // l'année (les quatre premiers caractères de la chaîne à partir de zéro)
    var age=td.getFullYear()-an; // age

    console.log(age);

    if (age<=0)
    {
        window.alert("vous n'avait pas 1 ans rentrer une date valide !");
    }
}

  







