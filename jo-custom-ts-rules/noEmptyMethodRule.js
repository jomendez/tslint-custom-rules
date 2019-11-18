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
var Lint = require("tslint");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new Walker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = "No empty methods";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var Walker = /** @class */ (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitMethodDeclaration = function (node) {
        this.addFailureIfEmptyMethod(node);
        _super.prototype.visitMethodDeclaration.call(this, node);
    };
    Walker.prototype.visitFunctionDeclaration = function (node) {
        this.addFailureIfEmptyMethod(node);
        _super.prototype.visitFunctionDeclaration.call(this, node);
    };
    Walker.prototype.visitArrowFunction = function (node) {
        this.addFailureIfEmptyMethod(node);
        _super.prototype.visitArrowFunction.call(this, node);
    };
    Walker.prototype.addFailureIfEmptyMethod = function (node) {
        if (node && node.body && node.body.statements && node.body.statements.length === 0) {
            this.addFailureAtNode(node, Rule.FAILURE_STRING);
        }
    };
    return Walker;
}(Lint.RuleWalker));
//# sourceMappingURL=noEmptyMethodRule.js.map