//$(document).bind("mobileinit", function() {
//  $.mobile.page.prototype.options.domCache = true;
//});

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

$(document).bind('pageshow',function(event, ui) {
  var prevPage = ui.prevPage ;
  if (ui.prevPage && !shouldPageBeCached(ui.prevPage))
    ui.prevPage.remove();
});

function shouldPageBeCached(page) {
  return page.attr("data-dom-cache") != "false" || $.mobile.page.prototype.options.domCache;
}