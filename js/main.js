const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const message = document.getElementById("message").value;

  console.log("Formulario enviado:", { name, email, number, message });

  alert("¡Gracias por contactarme!");
});
