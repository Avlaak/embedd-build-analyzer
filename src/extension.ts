import * as vscode from 'vscode';
import { BuildAnalyzerProvider } from './BuildAnalyzerProvider';
import { checkForUpdates, scheduleAutoUpdateCheck } from './updater';

let provider: BuildAnalyzerProvider;

export function activate(context: vscode.ExtensionContext) {
    const cfg = vscode.workspace.getConfiguration('EmbeddBuildAnalyzer');
    const debug = cfg.get<boolean>('debug') ?? false;

    if (debug) {
        console.log('[Embedd Build Analyzer] Activating extension...');
    }

    provider = new BuildAnalyzerProvider(context);

    context.subscriptions.push(
        vscode.commands.registerCommand('EmbeddBuildAnalyzer.openTab', async () => {
            if (debug) {console.log('[Embedd Build Analyzer] Command: openTab');}
            await vscode.commands.executeCommand('workbench.view.extension.embeddBuildAnalyzerPanel');
            return provider.refresh();
        }),

        vscode.commands.registerCommand('EmbeddBuildAnalyzer.refresh', () => {
            if (debug) {console.log('[Embedd Build Analyzer] Command: refresh');}
            return provider.refresh();
        }),

        vscode.commands.registerCommand('EmbeddBuildAnalyzer.refreshPaths', () => {
            if (debug) {console.log('[Embedd Build Analyzer] Command: refreshPaths');}
            return provider.fullRefresh();
        }),

        vscode.commands.registerCommand('EmbeddBuildAnalyzer.checkUpdates', () => {
            if (debug) {console.log('[Embedd Build Analyzer] Command: checkUpdates');}
            return checkForUpdates(false);
        }),

        vscode.window.registerWebviewViewProvider('embeddBuildAnalyzer', provider)
    );

    if (debug) {
        console.log('[Embedd Build Analyzer] Commands and WebviewViewProvider registered.');
    }

    scheduleAutoUpdateCheck(context);
}

export function deactivate() {
    if (provider) {
        provider.dispose();
    }
}
