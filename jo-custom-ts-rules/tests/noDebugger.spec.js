"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lintRunner_1 = require("../lintRunner");
var noDebuggerRule_1 = require("../noDebuggerRule");
var rule = 'no-debugger';
describe('No debuger statement', function () {
    it("testing failure example", function () {
        var src = "debugger;";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
    });
    it("testing position example", function () {
        var src = "debugger;";
        var startPosition = src.indexOf('debugger;');
        var endPosition = startPosition + 'debugger;'.length;
        var failure = lintRunner_1.helper({ src: src, rule: rule }).failures[0];
        expect(failure.getStartPosition().getPosition()).toEqual(startPosition);
        expect(failure.getEndPosition().getPosition()).toEqual(endPosition);
        expect(failure.getFailure()).toBe(noDebuggerRule_1.Rule.FAILURE_STRING);
    });
    it("testing failure message example", function () {
        var src = "debugger;";
        var failure = lintRunner_1.helper({ src: src, rule: rule }).failures[0];
        expect(failure.getFailure()).toBe(noDebuggerRule_1.Rule.FAILURE_STRING);
    });
});
//# sourceMappingURL=noDebugger.spec.js.map