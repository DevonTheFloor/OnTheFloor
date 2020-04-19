let app3 = new Vue({
  el:'#accueil',
  data:{
        message: "petit test en francais et on verra"
  },
  methods:{
    englishVersion(){
      message: "english version"
    }
  }

})


let app = new Vue({
  el: '#comp1',
  data:{
  message: 'Premier galop, ce site est largement évolutif. Pour l\'heure il se contente d\'être dynamique et adaptif. Je finis de m\'amuser avec CSS et passerai à JQuerry, pour à terme finir en Material Design.Java Script? Arf... C\'est pas que ça m\'amuse mais c\'est passage obligé même si je me destine à JAVA, qui fonctionne aussi bien pour le web que pour l\'Android (deux en un c\'est beaucoup plus malin!). Mais, du coup, si je fais le compte, ça fait pas du developpement full stack ça?'
}
  
})

/* First gallop, this site is largely evolutive. For now, he is content to be dynamic and adaptive. I finished having fun with CSS and will go to JQuerry, eventually finishing in Material Design.
        Java Script? Arf ... It's not that it amuses me but it is obligatory even if I intend to JAVA, which works as well for the web as for the Android (two in one is much smarter! ). But, so, if I do the count, it does not develop full stack that? */

//let forma = new Vue({
//  el:"#forma",
//  data: {
//    liste:[
//      {certif: Comprendre le Web},
//      {certif: Git et Github},
//      {certif: Les Solutions CMS},
//      {certif:  HTML 5 et CSS 3}
//    ]
//      
//    
//  }
//})
