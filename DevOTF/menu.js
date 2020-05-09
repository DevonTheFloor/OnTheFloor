let menu = document.getElementById('menu');

/*const pages =[
    ['Accueil','"index.html" class="btn-menu"'],
    ['CV','"./cv/index.html" target="_blank"'],
    ['Git','"https://github.com/DevonTheFloor" target="blank" class="btn-menu"'],
    ['Formation','"formation.html" class="btn-menu"'],
    ['Contact','"contact.html" class="btn-menu"']
]

for(let i=0; i<pages.length;i++)
{
    menu.innerHTML+='<ul><a href='+pages[i][1]+'><li>'+pages[i][0]+'></li><a href='+pages[i][1]+'><li>'+pages[i][0]+'></li></ul>';
}*/

 
 menu.insertAdjacentHTML('afterbegin','<ul><a href="index.html" class="btn-menu"><li>Acceuil</li></a><a href="./cv/index.html target="_blank" class="btn-menu"><li> CV </li></a></ul><ul><a href="https://github.com/DevonTheFloor" target="blank" class="btn-menu"><li>GitHub</li></a><a href="formation.html" class="btn-menu"><li>Formation</li></a></ul><ul><a href="ressource.html" class="btn-menu"><li>Ressources</li></a><a href="contact.html" class="btn-menu"><li>Contact</li></a></ul>');
