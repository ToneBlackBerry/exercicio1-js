const form = document.getElementById('check')

form.addEventListener('submit', function(e){
  e.preventDefault

  let primeiroNumero = document.getElementById('number1').value
  let segundoNumero = document.getElementById('number2').value

  if (primeiroNumero >= segundoNumero) {
    alert('Invalido, segundo numero precisa ser maior')
  } else {
    alert('Valido, segundo numero é maior')
  }

  
})