// test.js

function test(hostname, expected) {
	var result = domain(hostname);
	document.write("<li>" + hostname + " = ");	

	if(result==expected) {
		document.write(result);
		document.write("</li>");
	} else {
		document.write("<del>");
		document.write(result);
		document.write("</del> ");
		document.write("Expected \"" + expected + "\"</li>");
	}
}

document.write("This domain is " + document.location.domain());

document.write("<ol>");
test("www.jaguar.com", "jaguar.com");
test("www.jaguar.co.uk", "jaguar.co.uk");
test("jaguar.com", "jaguar.com");
test("jaguar.co.uk", "jaguar.co.uk");
test("www.landrover.com", "landrover.com");
test("www.landrover.co.uk", "landrover.co.uk");
test("landrover.com", "landrover.com");
test("landrover.co.uk", "landrover.co.uk");
test("google.de", "google.de");
test("www.google.de", "google.de");
test("bbc.co.uk", "bbc.co.uk");
test("www.bbc.co.uk", "bbc.co.uk");
test("news.bbc.co.uk", "bbc.co.uk");
document.write("</ol>");



