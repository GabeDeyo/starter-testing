var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.header').append("" + item);
})('Personal web starter kit');

fill;
