// Ecouteur au click sur bouton accessibilit√©
// Renvoie vers un onglet informatif (au 2e click -> √† corriger)
const accessConfig = document.getElementById("accessconfig");
const clicker = () => accessConfig.addEventListener("click", (event) => {
  window.open('https://accessconfig.a11y.fr/', '_blank');
});
