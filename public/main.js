const competenceAnimation = document.querySelector(".competence-desc")
if(competenceAnimation != null){
  document.addEventListener("scroll", ()=>{
    competenceAnimation.style.backgroundColor = "rgb(235, 38, 71)"
  })
  
}
const contactForm = document.getElementById("contact-form")
if(contactForm != null){
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire
    // Vous pouvez ajouter ici la logique pour envoyer les données du formulaire à un serveur ou afficher un message de confirmation.
    // Par exemple :
    alert("Votre message a été envoyé !");
  });
}

const toggleCircle = document.querySelector(".circle-toggle")
 function onToggle(){
  toggleCircle.style.marginLeft = "30px"
  document.body.style.backgroundColor = "rgb(97, 88, 88)"
  document.body.style.color = "white"
 }
 function offToggle(){
  toggleCircle.style.marginLeft = "0px"
  document.body.style.backgroundColor = "white"
  document.body.style.color = ""
 }
toggleCircle.addEventListener("click", ()=>{
  if(onToggle()){
    offToggle()
  }
  onToggle()
})
  