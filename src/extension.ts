import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "shaant-shakti-color-theme" is now active!'
  );
  const disposable = vscode.commands.registerCommand(
    "shaant-shakti-color-theme.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from shaant-shakti-color-theme!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
