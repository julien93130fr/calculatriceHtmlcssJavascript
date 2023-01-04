let query    =   document.querySelector('.query');
let btn      =   document.querySelector('button');
let response =   document.querySelector('.response');

btn.onclick =  function() {
    // voir si le fichier est bien relier en créant une alerte
    //   alert("clicked")
    if (query.value.length > 0) {
        response.value = "Resultat : " + eval (query.value);
        response.style.display = "block";   
    }else{
        alert("Le champ de calcul est vide");
        response.style.display = "none"
    }
}