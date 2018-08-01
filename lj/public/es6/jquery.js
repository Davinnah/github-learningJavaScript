//Learning JavaScript Chapter 19: jQuery
<script src="https://code.jquery.com/jquery-3.3.1.js"
			  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
			  crossorigin="anonymous"></script>

$(function() {//shortcut to (document).ready()
  'use strict';
  //code here is run after all HTML has been loaded and the DOM is constructed
  //jQuery object that matches all <p> tags
  const $paras = $('p');
  console.log($paras.length);
  console.log(typeof $paras);
  console.log($paras instanceof $);
  console.log($paras instanceof jQuery);

});
