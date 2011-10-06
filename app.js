$(document).bind("mobileinit", function() {
  $.mobile.page.prototype.options.domCache = true;
});

$(document).bind('pageshow',function(event, ui) {
  if (ui.prevPage) ui.prevPage.remove();
});

$(document).bind('pagecreate',function(event, ui) {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  var seconds = now.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  
  var page = $(event.target);
  page.find('.load-time').text(hours + ":" + minutes + ":" + seconds);
});

