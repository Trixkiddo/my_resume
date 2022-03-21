// Ecouteur au click sur bouton accessibilité
// Renvoie vers un onglet informatif (au 2e click -> à corriger)
const accessConfig = document.getElementById("accessconfig");
const clicker = () => accessConfig.addEventListener("click", (event) => {
  window.open('https://accessconfig.a11y.fr/', '_blank');
});
