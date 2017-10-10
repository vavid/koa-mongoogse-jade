$(function() {
  var subParam = location.search.substr(1);
  if (
    subParam.indexOf("oad_ggwm_0_ggwm_kycs1") > 0 ||
    subParam.indexOf("oad_ggwm_0_ggwm_kycs2") > 0 ||
    subParam.indexOf("oad_ggwm_1_ggwm_kycbcs1") > 0 ||
    subParam.indexOf("oad_ggwm_1_ggwm_kycbcs2") > 0
  ) {
    var urlStr = "//www.googleadservices.com/pagead/conversion_async.js";
    $.ajax({
      url: urlStr,
      type: "GET",
      method: "GET",
      contentType: "text/html",
      dataType: "script",
      success: function(data) {
        /* <![CDATA[ */
        goog_snippet_vars = function() {
          var w = window;
          w.google_conversion_id = 942563492;
          w.google_conversion_label = "gPZLCPmhuGAQpMG5wQM";
          w.google_remarketing_only = false;
        };
        // DO NOT CHANGE THE CODE BELOW.
        goog_report_conversion = function(url) {
          goog_snippet_vars();
          window.google_conversion_format = "3";
          var opt = new Object();
          opt.onload_callback = function() {
            if (typeof url != "undefined") {
              window.location = url;
            }
          };
          var conv_handler = window["google_trackConversion"];
          if (typeof conv_handler == "function") {
            conv_handler(opt);
          }
        };
        /* ]]> */
      }
    });
  }
});
