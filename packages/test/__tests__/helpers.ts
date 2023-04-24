import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { ESLint } from 'eslint';

export function createFixtureLinter(eslint: ESLint, fixturesBase: string) {
  return async (
    fileName: string,
    options?: { warnIgnored?: boolean },
  ): Promise<ESLint.LintResult> => {
    const fixturePath = resolve(fixturesBase, fileName);
    const code = (await readFile(fixturePath)).toString();
    const [result] = await eslint.lintText(code, {
      ...options,
      filePath: fixturePath,
    });
    return result;
  };
}
