# GameOn — Landing page interactive (JavaScript vanilla)

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![Licence](https://img.shields.io/badge/Licence-MIT-blue)]()

> Projet : **Créez une landing page avec JavaScript** — GameOn (événements / concours).  
> **Objectif général :** implémenter la logique JavaScript d’un formulaire d’inscription et dynamiser la landing page (DOM, validation, événements).

## 📚 Table des matières
- [Description](#-description)
- [Objectifs pédagogiques](#-objectifs-p%C3%A9dagogiques)
- [Compétences & Preuves](#-comp%C3%A9tences--preuves)
- [Stack & Versions](#-stack--versions)
- [Structure du projet](#-structure-du-projet)
- [Fonctionnalités clés](#-fonctionnalit%C3%A9s-cl%C3%A9s)
- [Installation & Lancement](#-installation--lancement)
- [Available Scripts](#available-scripts)
- [Tests](#-tests)
- [Démo & Captures](#-d%C3%A9mo--captures)
- [Roadmap](#-roadmap)
- [Licence](#-licence)
- [Contact](#-contact)
- [English version](#english-version)

---

## 🚀 Description
Landing page statique + composants JavaScript pour **GameOn**, une petite PME d’événements/concours. L’objectif principal est d’implémenter le JavaScript manquant : validation du formulaire, gestion de la modale d’inscription, événements DOM, et interactions accessibles. Le brief fournit une base HTML/CSS et une maquette. 

> **Résultats clés** : page interactive avec formulaire validé • modal accessible • code commenté et testé manuellement.

## 🎯 Objectifs pédagogiques
- Programmer en JavaScript vanilla (DOM, événements, validation).  
- Séparer HTML / CSS / JS et commenter le code.  
- Tester manuellement les parcours (responsive + validation).

## 🧠 Compétences & Preuves
| Exigence pédagogique | Compétence recrutée | Mise en œuvre | Preuves |
|---|---|---:|---|
| JavaScript DOM | **Vanilla JS** | Modal, validation, interaction DOM | `index.html`, `js/main.js` (fonctions de validation)  |
| Accessibilité & UX | **Form validation & modals** | Modal accessible, focus management | démonstration en local (keyboard + screen reader) |
| Versioning | **Git / GitHub** | Travail sur repo, issues & PR | lien repo (livrable) |

## 🧰 Stack & Versions
| Tech | Rôle |
|---|---|
| HTML5 | Markup |
| CSS3 | Styling |
| JavaScript (Vanilla) | Comportement |
| (optionnel) Node/npm | serveur local pour dev |

## 🗂️ Structure du projet
```txt
GameOn/
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  └─ main.js
└─ README.md
```

## ✅ Fonctionnalités clés
* [x] Modal d’inscription interactive.  
* [x] Validation du formulaire (champs requis, formats, messages d’erreur).  
* [x] Gestion des événements (ouverture/fermeture modal, soumission, reset).  
* [x] Tests manuels responsive et accessibilité.

## ⚡ Installation & Lancement
```bash
# 1) Cloner
git clone https://github.com/devchon2/GameOn.git
cd GameOn

# 2) Ouvrir localement
# Option A: ouvrir index.html dans un navigateur
# Option B (serveur local recommandé) :
npx http-server -c-1 .   # ou 'python -m http.server 8080'
# puis ouvrir http://localhost:8080
```

## 📜 Available Scripts
*(Projet statique)*

```bash
# Si vous utilisez un serveur local :
npx http-server -c-1 .
```

## 🧪 Tests
* Tests manuels :  
  * Vérifier la validation (ex : email, champs obligatoires).  
  * Vérifier la modal (focus trap, fermeture clavier).  
  * Vérifier responsive et absence d’erreurs console.  
* Livrable : lien repo sur GitHub (fournir dans un fichier TXT pour la soutenance). 

## 🎥 Démo & Captures
* Livrable : repo GitHub avec code complet.  
* Soutenance : démonstration du formulaire, de la modal et des validations.

## 🗺️ Roadmap
* Ajouter tests unitaires simples (Jest + jsdom) pour fonctions de validation.  
* Ajouter scripts npm pour dev local (serveur) si nécessaire.

## 📝 Licence
MIT (ajouter `LICENSE` si absent).

## 📫 Contact
Rachid Chon — `rchon@rchon-dev.fr`

---

## English version

<details>
<summary>🇬🇧 Click to expand</summary>

# GameOn — Interactive landing page (vanilla JavaScript)

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![License](https://img.shields.io/badge/License-MIT-blue)]()

> Goal: implement the JavaScript behavior of a landing page (modal signup, form validation, DOM events) for GameOn (events / competitions company).

## 🚀 Description
Static landing page plus JavaScript components to complete a mockup: validate a signup form, implement an accessible modal, and add interactive behaviors (DOM and events). The brief provides base HTML/CSS to complete. 

## 🎯 Learning objectives
- Program with vanilla JavaScript (DOM, events, validation).  
- Keep HTML/CSS/JS separated and well commented.  
- Test responsive and accessible behaviors manually.

## 🧠 Skills & Evidence
| Requirement | Skill | Implementation | Evidence |
|---|---|---|---|
| DOM & events | **Vanilla JS** | Modal, validation functions | `index.html`, `js/main.js` |
| Accessibility | **Focus management** | Accessible modal & keyboard interactions | Manual demo (keyboard navigation) |

## ⚡ Setup & Run
```bash
git clone https://github.com/devchon2/GameOn.git
cd GameOn
npx http-server -c-1 .
# open http://localhost:8080
```

## 🧪 Tests
* Manual validation of fields and modal behavior.  
* Ensure no console errors and responsive layouts.

## 📝 License
MIT.

## 📫 Contact
Rachid Chon — `rchon@rchon-dev.fr`

</details>
