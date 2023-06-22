'use strict';

const { mainModule } = require('process');

// need to write the "callback" compareYear
function sortYear(arr) {
  arr.sort(compareYear);
  return arr;
}


function compareYear(a, b) {
  return b.year - a.year;
}

function sortTitle(arr) {
  arr.sort(compareTitle);
  return arr;
}


function compareTitle(a, b) {
  const articleRegex = /^(?:The|A|An)\s+/i;
  const titleA = a.title.replace(articleRegex, '');
  const titleB = b.title.replace(articleRegex, '');
  return titleA.localeCompare(titleB);
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle};
