"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tslint_1 = require("tslint");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoFocusedTestWalker(sourceFile, this.getOptions()));
    };
    Rule.metadata = {
        ruleName: 'no-consolelog',
        description: 'Disallows console.log()',
        optionsDescription: 'Not configurable.',
        options: null,
        type: 'functionality',
        typescriptOnly: true,
    };
    Rule.FAILURE_STRING = 'console.log() is not allowed';
    Rule.MATCH_REGEX = /^(console\.log\()/;
    return Rule;
}(tslint_1.Rules.AbstractRule));
exports.Rule = Rule;
var NoFocusedTestWalker = /** @class */ (function (_super) {
    __extends(NoFocusedTestWalker, _super);
    function NoFocusedTestWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoFocusedTestWalker.prototype.visitCallExpression = function (node) {
        var match = node.getText().match(Rule.MATCH_REGEX);
        if (match && match[0]) {
            this.addFailureAt(node.getStart(), match[0].length, Rule.FAILURE_STRING);
        }
        _super.prototype.visitCallExpression.call(this, node);
    };
    return NoFocusedTestWalker;
}(tslint_1.RuleWalker));
//# sourceMappingURL=noConsolelogRule.js.map