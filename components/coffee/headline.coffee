$ = require 'jquery'

do fill = (item = 'Personal web starter kit') ->
  $('.header').append "#{item}"
fill