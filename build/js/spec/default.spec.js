"use strict";

describe("defaults", function () {
    it("examining how this works", function () {

        var doWork = function doWork() {
            var name = arguments.length <= 0 || arguments[0] === undefined ? "kevin" : arguments[0];

            return name;
        };

        var result = doWork(undefined);

        expect(result).toBe("kevin");
    });
});