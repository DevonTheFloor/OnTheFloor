let menu = document.getElementById('menu');

 
 menu.insertAdjacentHTML('afterbegin','<ul><a onclick="linked(\'index.html\')" class="btn-menu"><li>Accueil</li></a><a href="cv/index.html" target="_blank" class="btn-menu"><li> CV </li></a></ul><ul><a href="https://github.com/DevonTheFloor" target="blank" class="btn-menu"><li><i class="fab fa-github"></i>GitHub</li></a><a href="formation.html" class="btn-menu"><li>Formation</li></a></ul><ul><a href="ressource.html" class="btn-menu"><li>Ressources</li></a><a href="contact2.html" class="btn-menu"><li>Contact</li></a></ul>');

 function affMenu(){
	 let ul = document.createElement('ul');

	 menu.appendChild(ul);
 }

 function linked(url){
	 let body  = document.getElementById('bodid');
	 //body.style.backgroundColor="blue";
	 console.log('c\'est ti part')
	setTimeout(function(){
		window.location.assign(url);
	},2000);
}