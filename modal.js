
/////////////////////////////////////////////// RECUPERATION DES ELEMENTS //////////////////////////////////////////

//Récupération de la modale
const modalbg = document.querySelector(".bground"); // Modale
const contentmodal = document.querySelector(".content"); // Corps de la modale
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
const listLocations = document.querySelectorAll('input[type="radio"][name="location"]'); // Liste des boutons radio localisation
const formLocations = document.querySelector('input.radio'); // Champ input localisation
const inputTerms = document.forms["reserve"]["checkbox1"]; // Champ input conditions générales

//Régex pour la validation des champs texte
const regexpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  // Régex pour la validation de l'email
const regexpFirstName = /^[a-zA-Z\s]+$/;  // Régex pour la validation du prénom
const regexpLastName = /^[a-zA-Z\s]+$/;   // Régex pour la validation du nom de famille

//Liste des objets à vérifier + conditions + messages de retour en cas d'erreur
const formfieldsObjects = [
  {   // Objet Prénom
    formfield: inputFirstName,  // Champ input prénom
    condition: () => !validateFirstName(),  // Vérifier si le prénom est valide (fonction validateFirstName
    message: "" // Message de retour en cas d'erreur
  },
  { // Objet Nom de Famille
    formfield: inputLastName, // Champ input nom de famille
    condition: () => !validateLastname(), // Vérifier si le nom de famille est valide (fonction validateLastname
    message: "" // Message de retour en cas d'erreur
  },
  { // Objet Date de naissance
    formfield: inputBirthdate,  // Champ input date de naissance
    condition: () => !validateBirthdate(),  // Vérifier si la date de naissance est valide (fonction validateBirthdate
    message: "" // Message de retour en cas d'erreur
  },
  {  // Objet Objet Quantité
    formfield: InputChallengeNb,  // Champ input nombre de tournois
    condition: () => InputChallengeNb.value === "", // Vérifier si le champ est vide
    message: "Merci de compléter le formulaire avec le nombre de participation à nos tournois." // Message de retour en cas d'erreur
  },
  { // Objet E-mail
    formfield: inputEmail,  // Champ input e-mail
    condition: () => !regexpEmail.test(inputEmail.value), // Vérifier si l'email est valide
    message: "Veuillez entrer une adresse e-mail valide." // Message de retour en cas d'erreur
  },
  { // Objet Conditions générales
    formfield: inputTerms,  // Champ input conditions générales
    condition: () => !inputTerms.checked,  // Vérifier si les conditions générales sont cochées
    message: "Vous devez vérifier que vous acceptez les termes et conditions."  // Message de retour en cas d'erreur
  },
  { // Objet Localisation 
    formfield: formLocations, // Champ input localisation
    condition: () => !validateLocation(),  // Vérifier si une ville est sélectionnée (fonction validateLocation
    message: "Veuillez sélectionner une ville." // Message de retour en cas d'erreur
  },
];

//etat de soumission du formulaire
let alreadyValidate = false;
//////////////////////////////////////////////// GESTION MODALE //////////////////////////////////////////

//// OUVERTURE MODALE

// Événement de lancement de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  // Lancement de la modale au clic sur le bouton
function launchModal() {// Lancement de la modale
  if (alreadyValidate) { // Si le formulaire a été validé alors il raffiche le message de confirmation sinon il affiche la modale vierge
    modalbg.style.display = "block"; // Affichage de la modale
    modalbg.opacity = "1"; // apparition progressive via l'opacity
    contentmodal.classList.remove("close-content"); // Suppression de la classe de fermeture de la modale
    contentmodal.classList.add("content"); // Ajout de la classe d'ouverture de la modale
    innermodalBody.style.display = "none"; // Cacher le formulaire
    modalSubmissionDiv.style.display = "block"; // Afficher le message de confirmation
  } else {
    modalbg.style.display = "block"; // Affichage de la modale
    modalbg.opacity = "1"; // apparition progressive via l'opacity
    contentmodal.classList.remove("close-content"); // Suppression de la classe de fermeture de la modale
    contentmodal.classList.add("content"); // Ajout de la classe d'ouverture de la modale
    innermodalBody.style.display = "block"; // Afficher le formulaire
    modalSubmissionDiv.style.display = "none"; // Cacher le message de confirmation
  }
}

//// FERMETURE MODALE

// Événement de fermeture de la modale
closeModal.addEventListener("click", closeForm);  // Fermeture de la modale au clic sur le bouton de fermeture en X
closeModal2.addEventListener("click", closeForm); // Fermeture de la modale au clic sur le bouton de fermeture( apres validatyion de la modale)
document.addEventListener("click", e => { if (e.target == modalbg) closeForm() });// Fermeture de la modale au clic en dehors de la modale


function closeForm() {// Fermeture de la modale
  contentmodal.classList.remove("content");
  contentmodal.classList.add("close-content");
  modalbg.opacity = "0"; // disparition progressive via l'opacity
  setTimeout(() => { modalbg.style.display = "none" }, 400);  // Fermeture de la modale au bout de 500ms
};

//// SOUMISSION DE LA MODALE

// Événement d'envoi du formulaire
document.forms["reserve"].addEventListener("submit", confirmValidation);  // Fonction de confirmation de la modale
document.forms["reserve"].addEventListener(   // Fonction de validation des données des champs input
  "submit",
  e => {
    e.preventDefault(); // Annuler l'envoi du formulaireavant la validation
    validate(); // Vérifier si les données sont valides
  }
);

// Fonction de confirmation de la modale
function confirmValidation() {  // Fonction de confirmation de la modale
  if (validate()) { // Si la fonction de validation retourne true
    innermodalBody.style.display = "none";  // Cacher le formulaire
    modalSubmissionDiv.style.display = "flex";  // Afficher la div de confirmation
     alreadyValidate = true; // Le formulaire est validé
    return
  }
};

//////////////////////////////////////////////// GESTION DU FORMULAIRE //////////////////////////////////////////
function validateFirstName() { // Fonction de validation du prénom
  if (inputFirstName.value.trim().length < 2) { // Si le prénom est inférieur à 2 caractères
    formfieldsObjects[0].message = "Veuillez entrer 2 lettres ou plus pour le prénom."; // Message de retour en cas d'erreur
    return false; // Si le prénom est invalide
  }
  if (!regexpFirstName.test(inputFirstName.value.trim())) {   // Si le prénom contient des chiffres ou des espaces vides
    formfieldsObjects[0].message = "Veuillez entrer uniquement des lettres pour le prénom.";      // Message de retour en cas d'erreur
    return false; // Si le prénom est invalide
  }
  else {
    return true;  // Si le prénom est valide
  }
};

function validateLastname() { // Fonction de validation du nom
  if (inputLastName.value.trim().length < 2 || inputLastName.value.trim() === "") { // Si le nom est inférieur à 2 caractères
    formfieldsObjects[1].message = "Veuillez entrer au minimum 2 lettres ou plus pour le nom."; // Message de retour en cas d'erreur
    return false; // Si le nom est invalide
  }
  if (!regexpLastName.test(inputLastName.value.trim())) {   // Si le nom contient des chiffres ou des espaces vides
    formfieldsObjects[1].message = "Veuillez entrer uniquement des lettres pour le nom.";     // Message de retour en cas d'erreur
    return false; // Si le nom est invalide
  } else {
    return true;  // Si le nom est valide
  }
};

// Fonction de validation des données des boutons radio
function validateLocation() { // Fonction de validation de la localisation
  let selectedLocation = 0; // Compteur de ville sélectionnée
  for (let location of listLocations) { // Boucle pour vérifier si une ville est sélectionnée
    if (location.checked) { // Si une ville est sélectionnée
      selectedLocation++; // Incrémenter le compteur de ville sélectionnée
    }
  }
  if (selectedLocation === 0) { // Vérifier si une ville est sélectionnée
    return false; // Si aucune ville n'est sélectionnée
  } else {
    return true;  // Si une ville est sélectionnée
  }
};

// validation de la date de naissance 
function validateBirthdate() {  // Fonction de validation de la date de naissance
  const BirthDate = new Date(inputBirthdate.value);
  // Vérifier si l'utilisateur a plus de 18 ans
  const today = new Date(); // Obtenir la date du jour
  let age = today.getFullYear() - BirthDate.getFullYear();  // Calcul de l'âge
  const m = today.getMonth() - BirthDate.getMonth();  // Calcul du mois
  if (m < 0 || (m === 0 && today.getDate() < BirthDate.getDate())) {  // Vérifier si l'âge est inférieur à 18 ans en tenant compte du jour et du mois de naissance
    age--;  // Si l'un des deux est inférieur , on soustrait 1 à l'âge
  } 
  // Vérifier si la date est valide
  if (isNaN(BirthDate.getTime()) || BirthDate === "" || age > 99 ) {   // Vérifier si l'objet est vide ou n'est pas une date
    formfieldsObjects[2].message = "Veuillez entrer une date de naissance valide.";   //Message d'erreur si l'objet est vide ou n'est pas une date
    return false;
  }
  if (age < 18 ) { // Vérifier si l'âge est inférieur à 18 ans
    formfieldsObjects[2].message = "Vous n'avez pas l'âge autorisé!"; // Message d'erreur si l'âge est inférieur à 18 ans
    return false;   // Si l'âge est inférieur à 18 ans, on retourne false
  }
  return true;    // Si la date est valide et que l'âge est supérieur à 18 ans, on retourne true
};

function validate() { // Fonction de validation globale des données des champs input
  let formIsTrue = true;  // Variable de validation globale du formulaire
  for (let i = 0; i < formfieldsObjects.length; i++) {  // Boucle de validation des données des champs input
    let condition = formfieldsObjects[i].condition(); // Récupération de la condition de validation
    let message = formfieldsObjects[i].message; // Récupération du message d'erreur

    if (condition) {  // Si la condition de validation est vraie
      console.log("formNotOk = " + formfieldsObjects[i].message); // Affichage du message d'erreur
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error", message); // Affichage du message d'erreur
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error-visible", "true");
      formfieldsObjects[i].formfield.focus(); // Focus sur le champ input
      formIsTrue = false;
    } else {
      console.log("formOk = " + formfieldsObjects[i].formfield.value);  // Affichage de la valeur du champ input
      formfieldsObjects[i].formfield.parentElement.removeAttribute("data-error"); // Suppression du message d'erreur
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error-visible", "false");
    }
  }

  return formIsTrue;  // Retourne la valeur de validation globale du formulaire
};