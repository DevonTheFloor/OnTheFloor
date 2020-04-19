 let ancre = document.getElementById('ancre');
      
      class Formation {
        constructor(domaine, tabCertif){
          this.domaine = domaine;
          this.tabCertif = tabCertif;
        }
        
        afficheformation(){
      
        let section = document.createElement('section');
        ancre.appendChild(section);
        let titre = document.createElement('h3');
        titre.textContent= this.domaine;
        
        this.tabCertif.forEach(certif =>{
          let lien = document.createElement('a');
          lien.href = certif[1]
          let nom = document.createElement('p');
          nom.textContent= certif[0];
          section.appendChild(titre);
          titre.appendChild(lien);
           lien.appendChild(nom);  
            });
          }
      }
      const net =[
        ["Comprendre le Web ","image/doc/comprendre-le-web.pdf"],
        [" Git et Github ","image/HTML 5 et CSS 3doc/git-et-github.pdf"],
        ["Les Solutions CMS","image/doc/solutions-cms.pdf"],
        ["HTML 5 et CSS 3","image/doc/html5-et-css3.pdf"]
      ];
      const algo=[["Fonctionnement des algorithmes","image/doc/algorithmes.pdf"]];
      const doc = [["Mettez en place un système de veille informationnelle","image/doc/veilInfo.pdf"],["Maintenez-vous à jour en développement","image/doc/jourDev.pdf"]]
      let internet = new Formation("INTERNET",net );

const proj = [["Gérez votre projet informatique facilement","image/doc/gestPro.pdf"]]
let algori = new Formation("ALGORITHME",algo);
let docu = new Formation("DOCUMENTATION",doc);
let projet = new Formation("GESTION DE PROJET",proj);
const auto = [["Apprenez à apprendre ","image/doc/appApp.pdf"],["Travaillez en autonomie","image/doc/travAuto.pdf"]]
let apprent = new Formation("AUTO APRENTISSAGE",auto);
      internet.afficheformation();
      algori.afficheformation();
      docu.afficheformation();
projet.afficheformation();
apprenti.afficheformation();