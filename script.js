$(".icon").click(function(){
    $(".nav_wrap__menuItems").toggle(300)
})

var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (vw < 800) {
  $('.nav_wrap__menuItems').hide();
}

$(window).on('load', function() {
  vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (vw < 800) {
    $('.nav_wrap__menuItems').hide();
  }else{
    $('.nav_wrap__menuItems').show();
  }
});


$(window).on('resize', function() {
  vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (vw < 800) {
    $('.nav_wrap__menuItems').hide();
  }else{
    $('.nav_wrap__menuItems').show();
  }
});