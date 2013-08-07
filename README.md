tld.js
======

Get the domain from a hostname or location object.

This simple library is useful when writing code that needs to identify or set the 2nd level domain of a website, usually in conjunction with document.domain or for Google Analytics.

For example,

	www.example.com ==> example.com
	example.com ==> example.com
	subdomain.example.com ==> example.com
	www.subdomain.example.com ==> example.com

Usage:
======

Either use the method domain, e.g.

	domain("www.example.com");
	domain(document.location.hostname);

Or use the location object directly, e.g.

	document.location.domain();

