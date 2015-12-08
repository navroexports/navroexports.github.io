$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("eZ721QslkxZIbl7IizvVIORmNjXNWUqGxsHrXptA", "gNgDUkPPYPQJKQsSonXV9AW984OpwnhV7JTXGkE3");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});