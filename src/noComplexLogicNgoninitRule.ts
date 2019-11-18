import * as ts from "typescript";
import * as Lint from "tslint";

export class Rule extends Lint.Rules.AbstractRule {
    public static failureString = (text) => `Do not add complex logic to ${text}`;

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        const walker = new Walker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    }
}

class Walker extends Lint.RuleWalker {

    public visitMethodDeclaration(node: ts.MethodDeclaration): void {
        if (node && node.name && (node.end - node.pos) >= 800 && node.name.getText() === 'ngOnInit') {
            this.addFailureAtNode(node, Rule.failureString(node.name.getText()));
        }
        super.visitMethodDeclaration(node);
    }
 
}