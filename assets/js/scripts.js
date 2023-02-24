$( document ).ready(function() {
  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });
});

AOS.init({
  duration: 2500 // values from 0 to 3000, with step 50ms
});
