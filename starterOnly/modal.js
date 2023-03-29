
/////////////////////////////////////////////// RECUPERATION DES ELEMENTS //////////////////////////////////////////

//Récupération de la modale
const modalbg = document.querySelector(".bground"); // Modale
const innermodalBody = document.querySelector(".modal-body");  // Corps de la modale

//Récupération  des boutons de la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Bouton d'ouverture de la modale
const closeModal = document.querySelector(".close"); // Bouton de fermeture de la modale
const closeModal2 = document.querySelector(".modal-btn-close"); // Bouton de fermeture de la modale
const btnsubmit = document.querySelector(".btn-submit");  // Bouton d'envoi du formulaire


//Récupération de la Div De soumission du message de confirmation
const modalSubmissionDiv = document.querySelector(".modal-submission"); // Div de confirmation de la modale



//////////////////////////////////////////////// ELEMENTS A VERIFIER //////////////////////////////////////////

// Récupération des valeurs des éléments du formulaire
const inputFirstName = document.forms["reserve"]["first"];  // Champ input prénom
const inputLastName = document.forms["reserve"]["last"]; // Champ input nom
const inputEmail = document.forms["reserve"]["email"]; // Champ input e-mail
const inputBirthdate = document.forms["reserve"]["birthdate"]; // Champ input date de naissance
const InputChallengeNb = document.forms["reserve"]["quantity"]; // Champ input nombre de tournois
const listLocations = document.querySelectorAll('input[type="radio"][name="location"]')
const formLocations = document.querySelector('input.radio')
const inputTerms = document.forms["reserve"]["checkbox1"]; // Champ input conditions générales
//Régex pour la validation de l'email
const regexpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexpFirstName = /^[a-zA-Z\s]+$/;
const regexpLastName = /^[a-zA-Z\s]+$/;
//Liste des objets à vérifier + conditions + messages de retour en cas d'erreur

const formfieldsObjects = [
  {   // Objet Prénom
    formfield: inputFirstName,
    condition: () => !validateFirstName(),
    message: ""
  },
  { // Objet Nom de Famille
    formfield: inputLastName,
    condition: () => !validateLastname(),
    message: ""
  },
  { // Objet Date de naissance
    formfield: inputBirthdate,
    condition: () => !validateBirthdate(),  // Vérifier si la date de naissance est valide (fonction validateBirthdate
    message: ""
  },
  {  // Objet Objet Quantité
    formfield: InputChallengeNb,
    condition: () => InputChallengeNb.value === "",
    message: "Merci de compléter le formulaire avec le nombre de participation à nos tournois."
  },
  { // Objet E-mail
    formfield: inputEmail,
    condition: () => !regexpEmail.test(inputEmail.value),
    message: "Veuillez entrer une adresse e-mail valide."
  },
  { // Objet Conditions générales
    formfield: inputTerms,
    condition: () => !inputTerms.checked,  // Vérifier si les conditions générales sont cochées
    message: "Vous devez vérifier que vous acceptez les termes et conditions."
  },
  { // Objet Localisation 
    formfield: formLocations,
    condition: () => !validateLocation(),  // Vérifier si une ville est sélectionnée (fonction validateLocation
    message: "Veuillez sélectionner une ville."
  },
];

//////////////////////////////////////////////// GESTION MODALE //////////////////////////////////////////

//// OUVERTURE MODALE

// Événement de lancement de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {// Lancement de la modale
  modalbg.style.display = "block";
  inputFirstName.focus();
}

//// FERMETURE MODALE

// Événement de fermeture de la modale
closeModal.addEventListener("click", closeForm);
closeModal2.addEventListener("click", closeForm);
document.addEventListener("click", e => { if (e.target == modalbg) closeForm() });// Fermeture de la modale au clic en dehors de la modale


function closeForm() {// Fermeture de la modale
  modalbg.style.display = "none";
}

//// SOUMISSION DE LA MODALE

// Événement d'envoi du formulaire
document.forms["reserve"].addEventListener("submit", confirmValidation);  // Fonction de confirmation de la modale
document.forms["reserve"].addEventListener(   // Fonction de validation des données des champs input
  "submit",
  e => {
    e.preventDefault(); // Annuler l'envoi du formulaire
    validate();
  }
);

// Fonction de confirmation de la modale
function confirmValidation() {
  if (validate()) {
    innermodalBody.style.display = "none";
    modalSubmissionDiv.style.display = "flex";
  }
}


//////////////////////////////////////////////// GESTION DU FORMULAIRE //////////////////////////////////////////

function validateFirstName() { // Fonction de validation du prénom
  if (inputFirstName.value.trim().length < 2){
    formfieldsObjects[0].message = "Veuillez entrer au minimum 2 lettres ou plus pour le prénom.";
    return false;
  } 
  if (!regexpFirstName.test(inputFirstName.value.trim())) {
    formfieldsObjects[0].message = "Veuillez entrer uniquement des lettres pour le prénom.";
    return false;
  }
  else{
  return true;
  }
}

function validateLastname() { // Fonction de validation du prénom
  if (inputLastName.value.trim().length < 2 || inputLastName.value.trim() === "") {
    formfieldsObjects[1].message = "Veuillez entrer au minimum 2 lettres ou plus pour le nom.";
      return false;
  }
 if (!regexpLastName.test(inputLastName.value.trim())) {
    formfieldsObjects[1].message = "Veuillez entrer uniquement des lettres pour le nom.";
    return false;
}  else {
    return true;
}
}
// Récupération de l'eventlistener pour éditer le hamburger responsive
const iconNav = document.getElementById("IconNavBar");
const iconLink = document.querySelector("a.icon");
iconLink.addEventListener("click", editNav);
const mainNav = document.getElementsByClassName("main-navbar");
// Récupération des éléments du DOM pour le menu responsive
const NavBar = document.getElementById("myTopnav");

// Récupération de l'événement pour fermer le menu responsive en dehors de la zone du menu
document.addEventListener('click', (event) => {
  if (  NavBar.classList.contains('responsive') && 
        !NavBar.contains(event.target) && 
        !iconLink.contains(event.target)) {
          NavBar.classList.remove('responsive');
        }
      }
    );

// Fonction pour ouvrir et fermer le menu responsive
function editNav() {
  if (NavBar.className === "topnav") {
    NavBar.className += " responsive";
  } else {
    NavBar.className = "topnav";
    NavBar.classList.remove('responsive')
  }
}

//fonction qui ferme le menu responsive au dela de 800px 
window.addEventListener('resize', () =>{
  if (window.innerWidth > 800) {
    NavBar.classList.remove('responsive')
  }
});





// Fonction de validation des données des champs input
function validateLocation() {
  let selectedLocation = 0;

  for (let location of listLocations) {
    console.log(location.value)
    if (location.checked) {
      selectedLocation++;

    }
  }
  if (selectedLocation === 0) {
    return false;
  } else {
    return true;
  }
}

// validation de la date de naissance en objet Date
function validateBirthdate() {

  this.BirthDate = new Date(inputBirthdate.value);


  // Vérifier si la date est valide
  if (isNaN(this.BirthDate.getTime())) {
    formfieldsObjects[2].message = "Veuillez entrer une date de naissance valide.";
    return false;
  }

  // Vérifier si l'utilisateur a plus de 18 ans
  const today = new Date();
  let age = today.getFullYear() - this.BirthDate.getFullYear();
  const m = today.getMonth() - this.BirthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < this.BirthDate.getDate())) {
    age--;
  }
  if (age < 18) {
    formfieldsObjects[2].message = "Vous n'avez pas l'âge autorisé!";
    return false;
  }
  return true;
}

function validate() {
  let formIsTrue = true;
  for (let i = 0; i < formfieldsObjects.length; i++) {
    let condition = formfieldsObjects[i].condition();
    let message = formfieldsObjects[i].message;

    if (condition) {
      console.log("formNotOk = " + formfieldsObjects[i].message);
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error", message);
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error-visible", "true");
      formfieldsObjects[i].formfield.focus();
      formIsTrue = false;
    } else {
      console.log("formOk = " + formfieldsObjects[i].formfield.value);
      formfieldsObjects[i].formfield.parentElement.removeAttribute("data-error");
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error-visible", "false");
    }
  }

  return formIsTrue;
}