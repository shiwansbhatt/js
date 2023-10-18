# project related to DOM

## project link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project code
```javascript
form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = "Please provide a valid height"
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = "Please provide a valid weight"
  }
  else{
    const BMI = (weight / ((height*height)/10000)).toFixed(2)
    
    let message;
    if(BMI < 18.6){
      message = "You are under weight"
    }
    else if(BMI >= 18.6 && BMI <= 24.9) {
      message = "You are in normal range"
    }
    else if(BMI > 24.9){
      message = "You are overweight"
    }
    result.innerHTML = `<span>${BMI}</span></br><span>${message}</span>`
  }
})
```