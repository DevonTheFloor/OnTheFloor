	
let vsKreol = document.getElementById("kreol");
vsKreol.addEventListener("click",function vsKreol(){
 console.log("OTTTTTTEEEEE !!");}
);

const ratio =0.5;
var options = {
  root: null,//document.querySelector('#observed'),
  rootMargin: '0px',
  threshold: ratio
  }

  var voir = function(entries, observer) {
    entries.forEach(entry => {
      if(entry.intersectionRatio > ratio)
     { console.log('VISIBLE');
     //observer.unobserve(entry.target)
     entry.target.classList.add('visible');
     }else{
       console.log('INVISIBLE')
     }
    }); 
  };

var observer = new IntersectionObserver(voir, options);

var target = document.querySelector('#target');
observer.observe(target);


//window.addEventListener('mousemove', e => console.log(e));