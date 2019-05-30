$(document).ready(function() {  
    $(".to-signup").on("click", function() {
      $(this)
        .addClass("top-active-button")
        .siblings()
        .removeClass("top-active-button");
      $(".form-signin").slideUp();
      $(".form-signup").slideDown(500);
    });
  
    $(".to-signin").on("click", function() {
      $(this)
        .addClass("top-active-button")
        .siblings()
        .removeClass("top-active-button");
  
      $(".form-signin").slideDown();
      $(".form-signup").slideUp(500);
    });
    
    $(".form-signin").submit(function() {
      $(".to-signin")
        .addClass("top-active-button")
        .siblings()
        .removeClass("top-active-button")
    });
    
  });