/*!
 * https://github.com/4dz/tld.js/
 * by Adam Perry
 */

function domain(hostname) {
	var domain  = hostname,
	    domains = domain.split("."),
	    count   = domains.length,
	    levels  = 2,
	    MAX_TLD_LENGTH = 3;

	if(count>2) {
		if(domains[count-2].length <= MAX_TLD_LENGTH) {
			levels = 3;
		}
		domains = domains.slice(count-levels);
		domain = domains.join(".");
	}

	return domain;	
}

document.location.domain = function() { 
	return domain(document.location.hostname);
};