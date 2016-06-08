"use strict";

describe("rest", function () {
    it("examining how this works", function () {

        var sum = function sum() {
            var result = 0;

            for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
                numbers[_key] = arguments[_key];
            }

            for (var i = 0; i < numbers.length; i++) {
                result += numbers[i];
            };

            return result;
        };

        var result = sum(2, 3, 5);
        expect(result).toBe(10);
    });
});