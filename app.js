let btn =document.querySelector('.btn')
let header = document.querySelector('.header')
let navbar= document.querySelector('.nav_bar')
let link=document.querySelectorAll('.link')
let main = document.querySelector('.main')
let button=document.querySelector('.button')
let burger = document.querySelector('.btn_burger')
let themedark =true;
btn.addEventListener('click',function(){

        this.classList.toggle('open')
        navbar.classList.toggle('active')
        main.classList.toggle('active')

})

link.forEach(element=>{
    element.addEventListener('click',function(){
      
      navbar.classList.remove('active')
      btn.classList.remove('open')


    })
})


change(header,burger)



function change(input1,input2){

  button.addEventListener('click', ()=>{
    if(themedark){
  button.innerHTML = "L";
  input1.classList.remove('themedark')
  input1.classList.add('themelight')
  input2.classList.remove('themelight')
  input2.classList.add('themedark')
  
  themedark =false;
  
    }else{
      button.innerHTML = "D";
  
      input1.classList.remove('themelight')
      input1.classList.add('themedark')
      input2.classList.remove('themedark')
  input2.classList.add('themelight')
      themedark =true;
  
  
    }
      
  
  })
}

let text = document.querySelectorAll('.textoff')
let ration=0.3;

let options = {
  root: null,
  rootMargin: '0px',
  threshold: ration,
}


let handelIntersect = function( entries,observer){

  
  entries.forEach(entry=>{

    if(entry.intersectionRatio> ration){
      entry.target.classList.add('texton')

      // entry.target.classList.add('texton')
      observer.unobserve(entry.target)
    
      
    }
    
  })




}



let observer = new IntersectionObserver(handelIntersect, options);
text.forEach(element=>{
  observer.observe(element)

})

