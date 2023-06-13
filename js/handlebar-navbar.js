$(document).ready(function() {
    $.get("../templates/navbar.hbs", function(templateHtml) {
      var navbarTemplate = Handlebars.compile(templateHtml);
      var navbarHtml = navbarTemplate();
      $("body").prepend(navbarHtml);
    });
  });
  