

jQuery(document).ready(function(){


  $('#deupara').hide(0).delay(1000).show(500);


$('#deupara').on('click', (function(){
        $('#dmcol').css('display','block');
      } ) );

$('#dmcol').on('click', (function(){
        $('#pmcol').css('display', 'block');
      } ) );

$('#pmcol').on('click', (function(){
        $('body').css('background-color', 'orange').css('background-image','url("image/cadeauexplo.png")');
      } ) );
});





