$(function() {
  var Mustache = require('mustache');
 
  $.getJSON('js/data.json', function(data) {
    var template = $('#data-script').html();
    var html = Mustache.to_html(template, data);
    $('#data').html(html);    
  }); //getJSON
  
}); //function