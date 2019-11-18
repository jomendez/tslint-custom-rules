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
var ts = require("typescript");
var FAILURE_STRING_RETURN = 'Public methods must have return type.';
var FAILURE_STRING_PARAMS = 'All arguments of public method must have types.';
var ALLOW_ANY_OPTIONS = 'allow-any';
var ALLOWED_METHODS_OPTION = 'allowedMethods';
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new Walk(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var Walk = /** @class */ (function (_super) {
    __extends(Walk, _super);
    function Walk(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.allowAny = _this.getOptions().includes(ALLOW_ANY_OPTIONS);
        _this.allowedMethods = _this.getOptions()
            .filter(Walk.isAllowedMethodsOption)
            .reduce(function (acc, option) { return acc.concat(option[ALLOWED_METHODS_OPTION]); }, []);
        return _this;
    }
    Walk.isPublicMethod = function (node) {
        if (!node.modifiers) {
            return true;
        }
        return Walk.hasNonPublicModifiers(node.modifiers);
    };
    Walk.hasNonPublicModifiers = function (modifiers) {
        var kinds = modifiers.map(function (modifier) { return modifier.kind; });
        var nonPublicModifiers = [
            ts.SyntaxKind.PrivateKeyword,
            ts.SyntaxKind.ProtectedKeyword,
        ];
        return kinds.filter(function (kind) { return nonPublicModifiers.includes(kind); }).length === 0;
    };
    Walk.prototype.isTyped = function (node) {
        return Boolean(node.type &&
            (this.allowAny || node.type.kind !== ts.SyntaxKind.AnyKeyword));
    };
    // tslint:disable-next-line:no-untyped-public-signature
    Walk.isAllowedMethodsOption = function (option) {
        return (typeof option === 'object' &&
            option.hasOwnProperty(ALLOWED_METHODS_OPTION));
    };
    Walk.prototype.isAllowedMethod = function (node) {
        return this.allowedMethods.includes(node.name.getText());
    };
    Walk.prototype.visitMethodDeclaration = function (node) {
        var _this = this;
        if (Walk.isPublicMethod(node) && !this.isAllowedMethod(node)) {
            if (!node.parameters.every(function (parameter) {
                return _this.isTyped(parameter) || Boolean(parameter.dotDotDotToken);
            })) {
                this.addFailureAtNode(node, FAILURE_STRING_PARAMS);
            }
            if (!this.isTyped(node)) {
                this.addFailureAtNode(node, FAILURE_STRING_RETURN);
            }
        }
        _super.prototype.visitMethodDeclaration.call(this, node);
    };
    return Walk;
}(Lint.RuleWalker));
//# sourceMappingURL=noUntypedPublicSignatureRule.js.map