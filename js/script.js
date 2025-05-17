$(window).on("load", function() {
    "use strict";

    $(".preloader").fadeOut();

    // SHOWING PLAYLIST 

    $(".playlist-btn").on("click", function() {
      $(".jp-playlist").slideToggle();
      $(this).toggleClass("active");
      return false;
    });

    $("button.jp-shuffle").on("click", function() {
      $(this).toggleClass("on");
    });
    $("button.jp-repeat").on("click", function() {
      $(this).toggleClass("on");
    })

   // RESPONSIVE MOBILE MENU

    $(".menu-btn, .menuu-btn > a").on("click", function(){
      $(".responsive-mobile-menu").toggleClass("active");
      $(this).toggleClass("active");
      return false;
    });

    $(".close-menu, html").on("click", function(){
      $(".responsive-mobile-menu").removeClass("active");
      $(".menu-btn").removeClass("active");
    });

    $(".responsive-mobile-menu ul ul").parent().addClass("menu-item-has-children");
    $(".responsive-mobile-menu ul li.menu-item-has-children > a").on("click", function() {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    });

    $(".close-menu, .responsive-mobile-menu").on("click", function(e) {
      e.stopPropagation();
    });

    // SIDE PANEL SETTINGS 

    $(".side-panel-sec > a").on("click", function() {
        $(this).parent().toggleClass('active');
        return false;
    });

    // AJAX CONTACT FORM SCRIPT (WORKING CONTACT FORM)

    if($('#contact-form').length){
      $('#submit').on("click", function(){
        var o = new Object();
        var form = '#contact-form';
        var name = $('#contact-form .name').val();
        var email = $('#contact-form .email').val();
        if(name === '' || email === '') {
          $('#contact-form .response').html('<div class="failed">Please fill the required fields.</div>');
          return false;
        }
        $.ajax({
            url:"sendmail.php",
            method:"POST",
            data: $(form).serialize(),
            beforeSend:function(){
                $('#contact-form .response').html('<div class="text-info"><img src="images/preloader.gif"> Loading...</div>');
            },
            success:function(data){
                $('form').trigger("reset");
                $('#contact-form .response').fadeIn().html(data);
                setTimeout(function(){
                    $('#contact-form .response').fadeOut("slow");
                }, 5000);
            },
            error:function(){
                $('#contact-form .response').fadeIn().html(data);
            }
        });
      });
    };

    // ADDING SMOOTH SCROLLING TO TOP

    $(".scrollTop").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    // END ================

});



