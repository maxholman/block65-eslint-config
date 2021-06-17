import { ESLint } from 'eslint';
import { promises } from 'fs';
import * as path from 'path';

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
  const eslint = new ESLint({
    useEslintrc: true,
    cwd: path.resolve(__dirname, '..'),
    cache: false,
  });

  // beforeAll(async () => {
  //   console.log(
  //     util.inspect(
  //       await eslint.calculateConfigForFile(
  //         path.resolve(__dirname, '../fixtures/react/component.tsx'),
  //       ),
  //       { depth: Infinity },
  //     ),
  //   );
  // });

  const fixtureLinter = createFixtureLinter(
    eslint,
    path.resolve(__dirname, '../fixtures'),
  );

  test('react/test0', async () => {
    const result = await fixtureLinter('react/test0.tsx');
    expect(result.messages).toMatchInlineSnapshot(`Array []`);
  });

  test('react/component', async () => {
    const result = await fixtureLinter('react/component.tsx');
    // expect(result).toBe(null);
    expect(result.messages).toMatchInlineSnapshot(`Array []`);
  });

  test('react/storybook', async () => {
    const result = await fixtureLinter('react/component.stories.tsx');
    expect(result.messages).toMatchInlineSnapshot(`Array []`);
  });

  test('random TS', async () => {
    const result = await fixtureLinter('random.ts');
    expect(result.messages).toMatchInlineSnapshot(`Array []`);
  });

  test('random JS', async () => {
    const result = await fixtureLinter('just-random.js');
    expect(result.messages).toMatchInlineSnapshot(`Array []`);
  });

  test('config.js', async () => {
    const result = await fixtureLinter('this.is.a.config.cjs');
    expect(result.messages).toMatchInlineSnapshot(`Array []`);
  });

  test('import/no-unresolved.js', async () => {
    const result = await fixtureLinter('import/no-unresolved.js');
    expect(result.messages).toMatchInlineSnapshot(`
Array [
  Object {
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
});
