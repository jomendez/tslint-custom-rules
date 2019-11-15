import * as ts from "typescript";
import * as Lint from "tslint";

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "No empty methods";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    const walker = new Walker(sourceFile, this.getOptions());
    return this.applyWithWalker(walker);
  }
}

class Walker extends Lint.RuleWalker {

  public visitMethodDeclaration(node: ts.MethodDeclaration): void {
    this.addFailureIfEmptyMethod(node);
    super.visitMethodDeclaration(node);
  }

  protected visitFunctionDeclaration(node: ts.FunctionDeclaration) {
    this.addFailureIfEmptyMethod(node);
    super.visitFunctionDeclaration(node);
  }

  protected visitArrowFunction(node: ts.ArrowFunction) {
    this.addFailureIfEmptyMethod(node);
    super.visitArrowFunction(node);
  }

  private addFailureIfEmptyMethod(node: ts.MethodDeclaration | ts.FunctionDeclaration | ts.ArrowFunction): void {
    if (node && node.body && (node.body as any).statements && (node.body as any).statements.length === 0) {
      this.addFailureAtNode(node, Rule.FAILURE_STRING);
    }
  }

}