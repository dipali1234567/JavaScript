'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModel=document.querySelector('.close-modal');
const btnsOpenModel=document.querySelectorAll('.show-modal');

console.log(btnsOpenModel);
console.log(10)
for(let i=0;i<btnsOpenModel.length;i++)
{
    btnsOpenModel[i].addEventListener('click',function(){
        console.log("button clicked");
        modal.classList.remove
        ("hidden");
        overlay.classList.remove("hidden");
    });
}


const close= function()
{
    console.log("close button clicked");
    modal.classList.add("hidden");
   overlay.classList.add("hidden");
}

btnCloseModel.addEventListener('click',close);
overlay.addEventListener('click',close);


//Keyboard events or Global events

document.addEventListener('keydown',function(xevent){
     console.log("key is pressed");
      console.log(xevent);
      if(xevent.key==='Escape')
      {
          if(!modal.classList.contains("hidden"))
          {
              modal.classList.add("hidden");
          }


          if(!overlay.classList.contains("hidden"))
          overlay.classList.add("hidden");
      }

      
})