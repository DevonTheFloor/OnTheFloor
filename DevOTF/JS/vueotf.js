let app = new Vue({
  el: '#comp1',
  data:{
    titre: "Bonjour à tous",
    message: 'Premier galop, ce site est largement évolutif.Pour l\'heure il se contente d\'être dynamique et adaptif. Je finis de m\'amuser avec CSS et passerai à JQuerry, pour à terme finir en Material Design.Java Script? Arf... C\'est pas que ça m\'amuse mais c\'est passage obligé même si je me destine à JAVA, qui fonctionne aussi bien pour le web que pour l\'Android (deux en un c\'est beaucoup plus malin!). Mais, du coup, si je fais le compte, ça fait pas du developpement full stack ça?',
    title: "Hello world",
    english: "First gallop, this site is largely evolutive. For now, he is content to be dynamic and adaptive. I finished having fun with CSS and will go to JQuerry, eventually finishing in Material Design.Java Script? Arf ... It's not that it amuses me but it is obligatory even if I intend to JAVA, which works as well for the web as for the Android (two in one is much smarter! ). But, so, if I do the count, it does not develop full stack that?",
    tit: "Bonjou zot toute!",
    kreol: "Sa lé mon premié site, ou koné zordu lilé un pé faib mais i cale ek l'ecran. Mi fini amusé ek CSS, aprè ek JQuerry. Aprè tou sa la , ma mèt a li en Matérial Design.Java Script? Totoche, mi lé oblizé semmant mi té ve fé JAVA. Li mach pou le web et l'Android (lé deu ensemb lé plu for!). Oté, si ou i agard bien, i fé de fullstacks tou sa la?"
  
  },
  methods:{
    english(){
      let present = document.getElementById('present');
      present.innerHTML = "english version"
    }
  }
  
})

