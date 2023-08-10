const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
  }
  

const inputName = document.querySelector('input[name=name]');
const inputEmail = document.querySelector('input[name=email]');
const inputCpf = document.querySelector('input[name=cpf]');


const form = document.querySelector('form');
const message = document.querySelector('.thanks')

let isValidForm = false;

const resetinput = (element)=>{
    element.classList.remove('invalid')
    element.nextElementSibling.classList.add('error-hidden')

}

const invalidateElement = (element)=>{
    element.classList.add('invalid')
    element.nextElementSibling.classList.remove('error-hidden')
    isValidForm=false

}

const validateInput =()=>{
    isValidForm=true
        if(!inputName.value){
            invalidateElement(inputName)
    }

    if(!isValidEmail(inputEmail.value)){
        invalidateElement(inputEmail)
    }

    if(!isValidCPF(inputCpf.value)){
        invalidateElement(inputCpf)
    }
}

inputName.addEventListener('input',()=>{
    resetinput(inputName)
   
})
inputEmail.addEventListener('input',()=>{
    resetinput(inputEmail)
   
})

inputCpf.addEventListener('input',()=>{
    resetinput(inputCpf)
   
})


form.addEventListener('submit',(e)=>{
    e.preventDefault()
     validateInput()  
     //API POST 
     if(isValidForm){
        console.log('validou e enviou')
        form.remove()
        message.classList.remove('error-hidden')
     } 

})