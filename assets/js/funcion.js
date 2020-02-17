 $(document).ready(function(){
     $(window).resize(function(){
        var width = $('html').width();

        if (width > 768){
           $(".nav-content-link").slideDown(0);         
        }
     });
     
 
$(".menu-ham").click(function(){
 $(".nav-content-link").slideToggle();
});
});
