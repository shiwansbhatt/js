# project related to DOM

## project link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project code
```javascript
const clock = document.querySelector('#clock')
// clock = document.getElementById('clock')
console.log(clock)

setInterval(function(){
  let date = new Date();
  let localDate = date.toLocaleTimeString()
  // console.log(localDate)
  clock.innerHTML = localDate
},1000)

```