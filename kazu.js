const money=document.querySelector('#money');
const mikan=document.querySelector('#mikan');
const suika=document.querySelector('#suika');
const ringo=document.querySelector('#ringo');
const result=document.querySelector('#result');
    

mikan.addEventListener('click',function(){
money.value -= 200;
result.textContent=`残り${money.value}円`;
})

suika.addEventListener('click',function(){
    money.value -= 500;
    result.textContent=`残り${money.value}円`;
})
ringo.addEventListener('click',function(){
    money.value -= 300;
    result.textContent=`残り${money.value}円`;
})
