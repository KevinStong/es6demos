"use strict";

describe("destructuring", function () {
    it("old vs new", function () {

        var doWork = function doWork() {
            return {
                first: "jeff",
                last: "Mihalik"
            };
        };

        var _doWork = doWork();

        var first = _doWork.first;


        expect(first).toBe("jeff");
    });
});