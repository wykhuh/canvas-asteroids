var Shared = (function() {
  'use strict';

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var colors = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#9400D3'
  ]

  function randomColor () {
    return colors[randomInt(0, 5)];
  }

  return {
    randomInt: randomInt,
    randomColor: randomColor
  }

}());
