document.addEventListener("DOMContentLoaded",function(){
  const display = document.getElementById("display");
  const someNumbers = document.querySelectorAll(".number");
  const someOperators = document.querySelectorAll(".operator");
  const equal=document.querySelector('.equals');
  const clear=document.querySelector('.clear');
  for(let i=0;i<someNumbers.length;i++){
    someNumbers[i].addEventListener('click',function(){
      display.value+=this.getAttribute('data-number');
    });
  }
  for(let i=0;i<someOperators.length;i++){
    someOperators[i].addEventListener('click',function(){
      display.value+=this.getAttribute('data-operator')+' ';
    });
  }
  equal.addEventListener('click',function(){
    display.value=eval(display.value);
  });
  clear.addEventListener('click',function(){
    display.value='';
  });});