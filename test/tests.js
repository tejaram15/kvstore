// Requiring module
const fs = require('fs');
const assert = require('assert');
const helper = require('../src/helper.js');
const {FILE_NAME, BLOB_DIR} = require("../src/constants.js");


describe("Unit tests", () => {
	before("Setup Directory", () => {
		if (!fs.existsSync(BLOB_DIR)){
			fs.mkdirSync(BLOB_DIR);
		}
	});

	after("Cleaning up test files", () => {
		fs.rmdirSync(BLOB_DIR, { recursive: true });
	});

	describe( "Write tests", () => {
		it("Can write to file", () => {
			var result = helper.writeToFile("TestKey,TestValue");
			assert.equal(result, true);
		});

		it("Can read from file", () => {
			var result = helper.readFromFile("TestKey");
			assert.equal(result, "TestValue");
		});
	});
});