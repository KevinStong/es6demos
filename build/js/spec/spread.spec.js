"use strict";

describe("spread", function () {
    it("works as the opposite of rest", function () {

        var sum = function sum(x, y, z) {

            var result = x + y + z;

            return result;
        };

        var variableArray = [2, 3, 5, 4, 5];
        var result = sum.apply(undefined, variableArray);
        expect(result).toBe(10);
    });
});