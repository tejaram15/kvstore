var helpers = require('./helper.js');

function setValue(key, value) {
	try {
		helpers.writeToFile(key + "," + value);
	} catch(ex) {
		return false;
	}
	return true;
}

function getValue(key) {
	try {
		return helpers.readFromFile(key);
	} catch (ex) {
		// Log the exception
	}
	return null;
}