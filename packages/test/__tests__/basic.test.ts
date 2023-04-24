import { ESLint } from 'eslint';
import { promises } from 'fs';
import * as path from 'path';
import { expect, describe, test } from '@jest/globals';

function createFixtureLinter(eslint: ESLint, fixturesBase: string) {
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

describe('Basic', () => {
  const fixtureDir = path.resolve(__dirname, './fixtures/basic');

  const eslint = new ESLint({
    useEslintrc: true,
    cwd: fixtureDir,
    cache: false,
  });

  const fixtureLinter = createFixtureLinter(eslint, fixtureDir);

  test('random JS', async () => {
    const result = await fixtureLinter('just-random.js');
    expect(result.messages).toMatchInlineSnapshot(`
      [
        {
          "column": 15,
          "endColumn": 22,
          "endLine": 4,
          "fix": {
            "range": [
              72,
              79,
            ],
            "text": "'hello'",
          },
          "line": 4,
          "message": "Strings must use singlequote.",
          "messageId": "wrongQuotes",
          "nodeType": "TemplateLiteral",
          "ruleId": "quotes",
          "severity": 2,
        },
      ]
    `);
  });

  test('config.js', async () => {
    const result = await fixtureLinter('this.is.a.config.cjs');
    expect(result.messages).toMatchInlineSnapshot(`[]`);
  });

  test('import/no-unresolved.js', async () => {
    const result = await fixtureLinter('no-unresolved.js');
    expect(result.messages).toMatchInlineSnapshot(`
      [
        {
          "column": 8,
          "endColumn": 27,
          "endLine": 1,
          "line": 1,
          "message": "Unable to resolve path to module './missing-file.js'.",
          "nodeType": "Literal",
          "ruleId": "import/no-unresolved",
          "severity": 2,
        },
      ]
    `);
  });

  test('import/no-cycle', async () => {
    const result = await fixtureLinter('cyclic-a.js');
    expect(result.messages).toMatchInlineSnapshot(`
      [
        {
          "column": 1,
          "endColumn": 36,
          "endLine": 1,
          "line": 1,
          "message": "Dependency cycle detected.",
          "nodeType": "ImportDeclaration",
          "ruleId": "import/no-cycle",
          "severity": 2,
        },
      ]
    `);
  });
});
