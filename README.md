# eslint-config-robatwilliams

A [shareable](https://eslint.org/docs/developer-guide/shareable-configs) ESLint config for rules I use.

Although it's shareable, it's probably not granular enough to be truly reusable across diverse project setups. The likely usage is to use parts of it to extend [eslint-recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js) (or similar) as a starting point for a new project.

The settings for core rules are organised as per the sections of the [rules page](https://eslint.org/docs/rules) of the documentation, which [may change](https://github.com/eslint/eslint/issues/7991).

The tests are not comprehensive - removing or changing a rule won't necessarily cause a test failure. They're typically not included for rules inherited from `eslint-recommended`. The `reference` tests include cases which demonstrate why certain rules/options are not enabled. All rules are applied to specific sections' tests for greater coverage and detection of conflicting rules (although they are disabled where cumbersome or cause tedious changes to expected errors).

## Plugins included
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)

## Backlog
See project's GitHub issues.

## See also
* [awesome-eslint](https://github.com/dustinspecker/awesome-eslint)
