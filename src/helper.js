var fs = require("fs");
const {FILE_NAME, ENCODING} = require("./constants.js");

function readFromFile(searchKey) {
	var returnValue = null;
	const fileData = fs.readFileSync(FILE_NAME, {encoding: ENCODING, flag: "r"}); // read file synchronously.
	const lines = fileData.split(/\r?\n/); // split the contents by new line.
	lines.pop(); // remove last element as it is a \n character
	lines.reverse(); // reverse the array to search the last occurring key.
	lines.some(line => {
		var lineArray = line.trim().split(",");
		if(lineArray.length === 0) {
			return false;
		}
		if (lineArray.length <= 1) {
			throw new Error("Incorrect key-value pair encountered.");
		}
		var key = lineArray[0], value = lineArray[1];
		if (key.trim() == searchKey.trim()) {
			returnValue = value;
			return true;
		}
	});
	return returnValue;
}

function writeToFile(data) {
	fs.writeFileSync(FILE_NAME, data + "\n", {encoding: ENCODING, flag: "a+"});
	return true;
}

module.exports = {
	readFromFile, writeToFile
}