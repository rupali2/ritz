
$(function(){
// jQuery(document).ready(function() {

      // Same as document.addEventListener("DOMContentLoaded"...

    // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
    $("#navbarToggler").blur(function (event) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        $("#collapsable-nav").collapse('hide');
      }
    });
});
  
    // In Firefox and Safari, the click event doesn't retain the focus
    // on the clicked button. Therefore, the blur event will not fire on
    // user clicking somewhere else in the page and the blur event handler
    // which is set up above will not be called.
    // Refer to issue #28 in the repo.
    // Solution: force focus on the element that the click event fired on
//     $("#navbarToggler").click(function (event) {
//       $(event.target).focus();
//     });
//   });

//   $('.navbar-nav').click(function(){
//     $('.navbar-collapse').collapse('hide');
// });
// });

(function(global) {

    var dc= {};

    
    var homeHtml = "snippets/home-snippet.html";
    //Convinience function for inserting innerHtml for 'select'
    var insertHtml= function(selector,html){

        var targetElem = document.querySelector(selector);
        targetElem.innerHtml = html;
    };

    //Show loading icon inside element identified by 'selector'
    var showLoading = function(selector){
        var html = "<div class ='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector,html);

    };

    document.addEventListener("DOMContentLoaded", function (event){


        //on first load,show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText){
                document.querySelector("#main-content".innerHtml= responseText)
            },
            false);
            });

            global.$dc=dc;
        })(window);
  