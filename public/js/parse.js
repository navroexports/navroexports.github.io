$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
   	Parse.initialize("y3k5JfMXjc1VN6LvRTHoce5cODo2ERsJpuumMA0Z", "2awSiXPLi7UZrZCYm3moxGTYAfFA2H2NxZgj3ibm");

/*
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
/*----------------------------------------------------*/
/* parse contact form
------------------------------------------------------*/

	var CommentObject = Parse.Object.extend("CommentObject");
   
   $("#commentForm").on("submit", function(e) {
      e.preventDefault();

      console.log("Handling the submit");
      //add error handling here
      //gather the form data

      var data = {};
      data.name = $("#contactName").val();
      data.email = $("#contactEmail").val();
      data.subject = $("#contactSubject").val();
      data.message = $("#contactMessage").val();

      var comment = new CommentObject();
      comment.save(data, {
         success:function() {
            console.log("Success");
            //Alerts are lame - but quick and easy
            alert("Thanks for filling the form!");
         },
         error:function(e) {
            console.dir(e);
         }
      });
   });

});