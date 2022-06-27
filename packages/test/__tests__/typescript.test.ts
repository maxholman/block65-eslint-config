import { describe, expect, test } from '@jest/globals';
import { ESLint } from 'eslint';
import * as path from 'path';
import { createFixtureLinter } from './helpers.js';

describe('Typescript', () => {
  const fixtureDir = path.resolve(__dirname, './fixtures/typescript');

  const eslint = new ESLint({
    useEslintrc: true,
    cwd: fixtureDir,
    cache: false,
  });

  const fixtureLinter = createFixtureLinter(eslint, fixtureDir);

  test('random TS', async () => {
    const result = await fixtureLinter('random.ts');
    expect(result.messages).toMatchSnapshot();
  });
  test('imports', async () => {
    const result = await fixtureLinter('imports.ts');
    expect(result.messages).toMatchSnapshot();
  });
});
