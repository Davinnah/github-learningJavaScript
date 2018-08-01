//Learning JavaScript Chapter 19: jQuery

$(function() {//shortcut to (document).ready()
  'use strict';
  //code here is run after all HTML has been loaded and the DOM is constructed
  //jQuery object that matches all <p> tags
  const $paras = $('p');
  console.log($paras.length);
  console.log(typeof $paras);
  console.log($paras instanceof $);
  console.log($paras instanceof jQuery);

  //Calling jQuery with HTML creates new DOM elements
  const $newPara = $('<p>Newly created paragraph...</p>');


});
