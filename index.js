function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const ranked = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  var selector = '#grand-node'
  var query = document.querySelector(selector)
  while (query.children[0]) {
    var selector = `${selector} div`
    var query = document.querySelector(selector)
  }
  return query;
}
