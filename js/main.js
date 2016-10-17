// Thinks I love to do.
var loveArray = [
    'code',
    'books',
    'code',
    'movies',
    'series',
    'code',
    'bicycle'
];

var loveColols = [
  '#1abc9c',
  '#3498db',
  '#9b59b6',
  '#34495e',
  '#e67e22',
  '#c0392b',
  '#f1c40f'
];

// Find love span by id.
var loveId = document.getElementById('love');
var i = 1;

// Change loved things and bg color every 1 sec.
setInterval(function() {

    // Next array item and color.
    loveId.innerHTML = loveArray[i];
    loveId.style.backgroundColor = loveColols[i];

    // Increase i or reset to 0.
    i = (i == loveArray.length - 1) ? 0 : i + 1;
}, 1000);
