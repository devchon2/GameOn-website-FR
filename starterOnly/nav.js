// Récupération de l'eventlistener pour éditer le hamburger responsive
const iconNav = document.getElementById("IconNavBar");
const iconLink = document.getElementsByClassName("icon");
iconNav.addEventListener("click", editNav);
const mainNav = document.getElementsByClassName("main-navbar");
// Récupération des éléments du DOM pour le menu responsive
const NavBar = document.getElementById("myTopnav");

// Récupération de l'événement pour fermer le menu responsive en dehors de la zone du menu
document.addEventListener('click', (event) => {
  if (NavBar.classList.contains('responsive') && !NavBar.contains(event.target) && !iconNav.contains(event.target)) {
    NavBar.classList.remove('responsive');
  }
});

// Fonction pour ouvrir et fermer le menu responsive
function editNav() {
  if (NavBar.className === "topnav") {
    NavBar.className += " responsive";
    //iconNav.style.color = "white";
  } else {
    NavBar.className = "topnav";
  }
}
