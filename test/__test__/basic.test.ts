import { ESLint } from 'eslint';
import { promises } from 'fs';
import * as path from 'path';
import * as util from 'util';

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

describe('welp', () => {
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
    expect(result.errorCount).toBe(0);
  });

  test('react/component', async () => {
    const result = await fixtureLinter('react/component.tsx');
    // expect(result).toBe(null);
    expect(result.errorCount).toBe(0);
  });

  test('react/storybook', async () => {
    const result = await fixtureLinter('react/component.stories.tsx');
    expect(result.errorCount).toBe(0);
  });

  test('random', async () => {
    const result = await fixtureLinter('random.ts');
    expect(result.errorCount).toBe(0);
  });

  test('config.js', async () => {
    const result = await fixtureLinter('this.is.a.config.js');
    expect(result.errorCount).toBe(0);
  });
});
