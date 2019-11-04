
/*=============== ANGLAIS ==================*/
$(function(){
   $('#anglais').click(function(){
      $('.lgANG').toggle(),
	$('.lgFR').css('display','none'); // AFFICHE ET CACHE A CHAQUE CLIQUE SUR LE BOUTTON,
});	
});
/*============== KREOL =====================*/
$(function(){
   $('#kreol').click(function(){
      $('.lgKRL').toggle(),
	$('.lgFR').css('display','none'),
	$('.lgANG').css('display','none'); // AFFICHE ET CACHE A CHAQUE CLIQUE SUR LE BOUTTON
   });
});

/*================== FRANCAIS =================*/
$(function(){
   $('#francais').click(function(){
      $('.lgFR').toggle(),
	$('.lgKRL').css('display','none'),
	$('.lgANG').css('display','none'); // AFFICHE ET CACHE A CHAQUE CLIQUE SUR LE BOUTTON
   });
});
