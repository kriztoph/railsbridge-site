if (typeof(rails_ver) != "undefined") {
	var rails_ver = "unknown";
}

if (typeof(module) != "undefined") {
	var module = "unknown";
}

var title = $("title").text();
var post_url = window.location;

if (typeof(debug) == "undefined" ) {
	var url = "http://railsbridge.org/";
} else {
	var url = "http://localhost:3000";
}
$.ajax({
  dataType: 'jsonp',
  data: "title=" + title + "&permlink=" + post_url + "&rails_ver=" + rails_ver + "&module=" + module,
  url: url + '/post_authorities/get_auth.json',
  success: function (data) {
	document.write("This post is: " + data.authority + ". <a href='http://railsbridge.org'>RailsBridge</a>");
  }
});