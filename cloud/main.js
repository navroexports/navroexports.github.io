
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

var Mailgun = require('mailgun');
Mailgun.initialize('mg.navroexports.com', 'key-b22bf4f5662c594d640e0ec3703754fd');

Parse.Cloud.beforeSave("CommentObject", function(request, response) {

	var text = "Hello Nav,<br><br> You have received a new message on your website. Here are the details:<br><br>" + 
		"From: "+request.object.get("name") + "<br>"+
		"Email: "+request.object.get("email") + "<br>"+
		"Subject: "+request.object.get("subject") + "<br>"+
		"Comments:<br>" + request.object.get("message");

	console.log(request.object.get("contactEmail"));
	Mailgun.sendEmail({
			to: "info@navroexports.com",
			from: request.object.get("name") + "<" + request.object.get("email") + ">",
			subject: "New comment on navroexports.com : " + request.object.get("subject"),
			html: "<html>" + text + "</html>",
			text: ""
		}, {
		success: function(httpResponse) {
			response.success();
		},
		error: function(httpResponse) {
			console.error(httpResponse);
			response.error("Uh oh, something went wrong");
		}
	});

});