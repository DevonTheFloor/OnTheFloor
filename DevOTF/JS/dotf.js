	
let vsKreol = document.getElementById("kreol");
vsKreol.addEventListener("click",function vsKreol(){
 console.log("OTTTTTTEEEEE !!");}
);

const ratio = 0.1;
var options = {
  root: null,//document.querySelector('#observed'),
  rootMargin: '0px',
  threshold: ratio
  }

var voir = function(entries, observer) {
    
  entries.forEach(entry => {
  if(entry.isIntersecting == false){ 
    bann.classList.add('bann-v');
  }else{
    bann.classList.remove('bann-v');
  }
    }); 
};

var observer = new IntersectionObserver(voir, options);

var target = document.querySelector('#target');
observer.observe(target);


//window.addEventListener('mousemove', e => console.log(e));