const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const dateInput = document.querySelector("#date")
const emailInput = document.querySelector("#email")
const passowordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

const progress = document.querySelector("#progress")

const modal = document.querySelector("#modal")
const closeVButton = document.querySelector("#close-button")
const modalMessage = document.querySelector(".modal-message")


form.addEventListener("submit", (event) => {
  event.preventDefault();


  // verifica se o nome está vazio
  if (nameInput.value === ""){
    showModal("Por favor, preencha o seu nome")
    return
  }
  if (dateInput.value === ""){
    showModal("Por favor, digita a data do seu nascimento.")
    return
  }
  // verifca se o e-mal está preenchido e é válido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    showModal("Por favor, preencha o seu email.")
    return
  }
  // verifica se a senha está preenchida
  if(!validatePassword(passowordInput.value, 8)){
    showModal("A senha precisa ser no mínimo 8 dígitos.")
    return
  }
  // verificar se a situação foi seliceionada
  if(jobSelect.value === ""){
    showModal("Por favor, selecione a sua situação.")
    return
  }
  // verificar se a mensagem foi preenchida
  if(messageTextarea.value == ""){
    showModal("Por favor, digite uma mensagem.")

    return
  }

  // se todos os campos estiverem corretamente preenchidos, envie o formulário
   form.submit()

   progress.va = 0
})
// função que valida e-mail
function isEmailValid(email){
  // cria uma regex validar email
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  )
  if(emailRegex.test(email)){
    return true
  }
  return false
}

// função que valida a senha
function validatePassword(passoword, minDigits) {
  if(passoword.length >= minDigits) {
    // senha válida
    return true
  }
  // senha inválida
  return false
}

// atualiza a barra de progresso ao preencher o formulário
form.addEventListener("input", () => {
  const totalFields = form.elements.length -1
  let completedFields = 0

  // conta o número de campos preenchidos
  for (let i = 0; i < totalFields; i++){
    if (form.elements[i].value){
      completedFields++
    }
  }
  // atualiza o valor da barra de progresso
  progress.value = (completedFields / totalFields) * 100
})

// exibir modal
function showModal(msg) {
  modalMessage.textContent = msg
  modal.style.display = "block"
}

// fechar modal
closeVButton.addEventListener("click", () => {
  modal.style.display = "none"
})
window.addEventListener("click", (event) => {
  if (event.target === modal){
    modal.style.display = "none"
  }
})