//Learning JavaScript Chapter 18: JavaScript in the Browser
const para1 = document.getElementsByTagName('p')[0];
//console.log('para1: ', para1);
para1.textContent;
para1.innerHTML;
para1.textContent = "Modified HTML file";
para1.innerHTML = "<i>Modified</i> HTML file";

const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = "I was created dynamically!";
p2.textContent = "I was also created dynamically!";

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];

parent.insertBefore(p1, firstChild);
parent.appendChild(p2);

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
  })
}

function highlightParas(containing) {
  if(typeof containing === 'string')
    containing = new RegExp(`\\b${containing}\\b`, 'i');
  const paras = document.getElementsByTagName('p');
  console.log(paras);
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
