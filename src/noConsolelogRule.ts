import { IRuleMetadata, RuleFailure, Rules, RuleWalker } from 'tslint';
import { CallExpression, SourceFile } from 'typescript';

export class Rule extends Rules.AbstractRule {
  public static metadata: IRuleMetadata = {
    ruleName: 'no-consolelog',
    description:
      'Disallows console.log()',
    optionsDescription: 'Not configurable.',
    options: null,
    type: 'functionality',
    typescriptOnly: true,
  };

  public static FAILURE_STRING = 'console.log() is not allowed';
  public static MATCH_REGEX = /^(console\.log\()/;

  public apply(sourceFile: SourceFile): RuleFailure[] {
    return this.applyWithWalker(
      new NoFocusedTestWalker(sourceFile, this.getOptions()),
    );
  }
}

class NoFocusedTestWalker extends RuleWalker {
  public visitCallExpression(node: CallExpression): void {
    const match = node.getText().match(Rule.MATCH_REGEX);

    if (match && match[0]) {
      this.addFailureAt(node.getStart(), match[0].length, Rule.FAILURE_STRING);
    }

    super.visitCallExpression(node);
  }
}