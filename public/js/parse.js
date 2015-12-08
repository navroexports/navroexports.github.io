$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("y3k5JfMXjc1VN6LvRTHoce5cODo2ERsJpuumMA0Z", "2awSiXPLi7UZrZCYm3moxGTYAfFA2H2NxZgj3ibm");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});