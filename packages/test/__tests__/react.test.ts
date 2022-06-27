import { describe, expect, test } from '@jest/globals';
import { ESLint } from 'eslint';
import * as path from 'path';
import { createFixtureLinter } from './helpers.js';

describe('React', () => {
  const fixtureDir = path.resolve(__dirname, './fixtures/react');

  const eslint = new ESLint({
    useEslintrc: true,
    cwd: fixtureDir,
    cache: false,
  });

  const fixtureLinter = createFixtureLinter(eslint, fixtureDir);

  test('test0', async () => {
    const result = await fixtureLinter('test0.tsx');
    expect(result.messages).toMatchInlineSnapshot(`Array []`);
  });

  test('component', async () => {
    const result = await fixtureLinter('component.tsx');
    // expect(result).toBe(null);
    expect(result.messages).toMatchInlineSnapshot(`Array []`);
  });

});
