$(document).ready(function() {
    $.get("../templates/footer.hbs", function(templateHtml) {
      var footerTemplate = Handlebars.compile(templateHtml);
      var footerHtml = footerTemplate();
      $("footer").prepend(footerHtml);
    });
  });
  