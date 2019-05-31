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
    
// sign-up
    $("#sign-up").submit(e => {

       let username = $('input[name=username]').val();
       let email = $('input[name=email]').val();
       let password = $('input[name=password]').val()

       let formData = JSON.stringify({username, email, password})
      
  
    if (username == '' || email == '' || password == '') {
        alert("Please fill all fields...!!!!!!");
    } else if (password.length < 8) {
        alert("Password should atleast 8 character in length...!!!!!!");
    }else {
          $.ajax({
            method: "POST",
            url: "http://localhost:3000/user",
            dataType: "json",
            contentType: "application/json",
            data: formData,
            encode: true
          }).done(function(data) {
            // window.location.href = ".html";
            alert('Sign-in successful!!!!!!')
          });
        }
        e.preventDefault();
      }); 
  });

