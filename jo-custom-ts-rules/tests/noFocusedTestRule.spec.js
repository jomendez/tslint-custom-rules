"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lintRunner_1 = require("../lintRunner");
var rule = 'no-focused-test';
describe('No focus test fdescribe, fit', function () {
    it("No focus fdescrive", function () {
        var src = "\n       fdescribe('test', ()=>{\n\n       })\n        ";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
    });
    it("No focus fit", function () {
        var src = "\n       fit('test', ()=>{\n\n       })\n        ";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
    });
});
//# sourceMappingURL=noFocusedTestRule.spec.js.map