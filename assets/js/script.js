//Exo 1

var exerciceun = 'Bonjour';
alert(exerciceun);

//Exo 2

var lastName = 'Nom: Doe';
var firstName = 'Prénom: John';
var city = 'Ville: New-York';
alert(lastName + '\n' + firstName + '\n' + city);

//Exo 3

var saisiFirstName = prompt('Saisis ton prénom');
alert('Bonjour' + ' ' + saisiFirstName);

//Exo 4

function displayForm() {
    var newLastname = document.getElementById('newLastname').value;
    var newFirstname = document.getElementById('newFirstname').value;
    var newCity = document.getElementById('newCity').value;
    alert('Votre nom:' + ' ' + newLastname + '\n' + 'Votre prénom:' + ' ' + newFirstname + '\n' + 'Votre ville:' + ' ' + newCity + '\n');
}

//exo 5
function resteDiv() {

    var nbrUn = document.getElementById('nbrUn').value;
    var nbrDeux = document.getElementById('nbrDeux').value;

    alert(nbrUn % nbrDeux);
}

//Exo 6

function displayExoSix() {
    var shoeSize = document.getElementById('shoeSize').value;
    var birthYear = document.getElementById('birthYear').value;

    alert(((((shoeSize * 2) + 5) * 50)) - (birthYear) + 1769);
}

//Exo 7

function displayAge() {

    var Age = document.getElementById('Age').value;
    
    if (Age < 18) {
        alert('Vous êtes mineur(e)');
    }
        if (Age >= 18) {
        alert('Vous êtes majeur(e)');
    }
}