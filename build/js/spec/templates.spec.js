"use strict";

var _templateObject = _taggedTemplateLiteral(["Mr. ", " ", ""], ["Mr. ", " ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

describe("templates", function () {
    it("is better then string concat", function () {

        var first = "kevin";
        var last = "stong";
        var result = "Mr. " + first + " " + last;
        expect(result).toBe("Mr. kevin stong");
    });

    it("example showing tag templates", function () {

        var fullName = function fullName(strings) {
            for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                values[_key - 1] = arguments[_key];
            }

            var properFirst = values[0].charAt(0).toUpperCase() + values[0].slice(1);
            var properLast = values[1].charAt(0).toUpperCase() + values[1].slice(1);

            return strings[0] + properFirst + strings[1] + properLast;;
        };

        var first = "kevin";
        var last = "stong";
        var result = fullName(_templateObject, first, last);
        console.log(result);
        expect(result).toBe("Mr. Kevin Stong");
    });
});