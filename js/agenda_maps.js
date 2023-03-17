var ag = document.getElementsByClassName("modalag");
var mo = document.getElementById("corpomodal")

$(ag).click(function(){
  if($(this).closest('.modal-body').find('.corpomaps').css('display') == 'block'){
    $(this).closest('.modal-body').find('.corpomaps').fadeOut(300)
  }
  setTimeout(() => {
    
  $(this).closest('.modal-body').find('.corpoagenda').fadeToggle(300);
  }, 301)
  
})

$(".modalmp").click(function(){
  if($(this).closest('.modal-body').find('.corpoagenda').css('display') == 'block'){
    
    $(this).closest('.modal-body').find('.corpoagenda').fadeOut(300)
  }
  setTimeout(() => {

  $(this).closest('.modal-body').find('.corpomaps').fadeToggle(300);
  }, 301)
  
})

