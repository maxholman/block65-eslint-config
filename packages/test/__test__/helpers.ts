import { ESLint } from 'eslint';
import { promises } from 'fs';
import * as path from 'path';

export function createFixtureLinter(eslint: ESLint, fixturesBase: string) {
  return async (
    fileName: string,
    options?: { warnIgnored?: boolean },
  ): Promise<ESLint.LintResult> => {
    const fixturePath = path.resolve(fixturesBase, fileName);
    const code = (await promises.readFile(fixturePath)).toString();
    const [result] = await eslint.lintText(code, {
      ...options,
      filePath: fixturePath,
    });
    return result;
  };
}
