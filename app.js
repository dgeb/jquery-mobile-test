$(document).bind("pagecreate", function(event, ui) {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  var seconds = now.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  
  var page = $(event.target);
  page.find(".load-time").text(hours + ":" + minutes + ":" + seconds);
});

$(document).bind("pageshow", function(event, ui) {
  var prevPage = ui.prevPage;
  if (prevPage && prevPage.attr("data-dom-cache") != "true")
    prevPage.remove();

  // highlight the current nav button (necessary when re-loading cached pages)
  var page = $(event.target);
  page.find("#" + page.attr("data-id")).addClass("ui-btn-active");
});
