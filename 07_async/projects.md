# PROJECTS

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ttcb5f?file=4-GuessTheNumber%2Fchaiaurcode.js,4-GuessTheNumber%2Findex.html)

-----------------------------------------------------------------------------------------------------------------

## Project 5

``` javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div>
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>code</th>
      </tr>
      <tr>
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `
})
```
-----------------------------------------------------------------------------------------------------------------
## Project 6

``` javascript
const body = document.querySelector('body');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
function changeColor(){
  const hex = "0123456789ABCDEF";
  let color = "#";
  for(let i = 1 ; i<= 6 ; i++){
    let randomIndex = Math.floor(Math.random()*16);
    color += hex[randomIndex];
  }
  return color;
};
let button = null;
function startChangingColor(){
  if(!button){
    button = setInterval(()=>{
      body.style.background = changeColor();
    },2000);
  }
  
};
function stopChangingColor(){
  if(button){
    clearInterval(button);
    button = null;
  }
  
};
start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor);
``` 
