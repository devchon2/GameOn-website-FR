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