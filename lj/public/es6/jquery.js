//Learning JavaScript Chapter 19: jQuery

$(function() {//shortcut to (document).ready()
  'use strict';
  //code here is run after all HTML has been loaded and the DOM is constructed
  //jQuery object that matches all <p> tags
  const $paras = $('p');
  $('p')
        .append('<sup>*</sup>')
        .after('<hr>')
        .before('<hr>');
  $('p:even').css('color','red');


  //////////////////////////////////////////////////////////////////////////////
  //Learning JavaScript Chapter 18: JavaScript in the Browser
  const para1 = document.getElementsByTagName('p')[0];
  //console.log('para1: ', para1);
  para1.textContent;
  para1.innerHTML;
  para1.textContent = 'Modified HTML file';
  para1.innerHTML = '<i>Modified</i> HTML file';

  const highlightActions = document.querySelectorAll('[data-action="highlight"]');
  for(let a of highlightActions) {
  	a.addEventListener('click', evt => {
  		evt.preventDefault();
  		highlightParas(a.dataset.containing);
  	});
  }

  const removeHighlightsActions = document.querySelectorAll('[data-action="removeHighlights"]');
  for(let a of removeHighlightsActions) {
  	a.addEventListener('click', evt => {
  		evt.preventDefault();
  		removeParaHighlights();
  	});
  }

  function highlightParas(containing) {
  	if(typeof containing === 'string')
  		containing = new RegExp(`\\b${containing}\\b`, 'i');
  	const paras = document.getElementsByTagName('p');
  	for(let p of paras) {
  		if(!containing.test(p.textContent)) continue;
  		p.classList.add('highlight');
  	}
  }

  highlightParas('unique');

  function removeParaHighlights() {
  	const paras = document.querySelectorAll('p.highlight');
  	for(let p of paras) {
  		p.classList.remove('highlight');
  	}
  }
});
