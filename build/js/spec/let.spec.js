"use strict";

describe("test", function () {
    it("will work?", function () {
        var doWork = function doWork() {
            return 8;
        };

        var result = doWork();
        expect(result).toBe(3);
    });
});