function makeModuleNameMapper(srcPath, tsconfigPath) {
  // Get paths from tsconfig
  const { paths } = require(tsconfigPath).compilerOptions

  const aliases = {}

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach(item => {
    const key = item.replace('/*', '/(.*)')
    const path = paths[item][0].replace('/*', '/$1')
    aliases[key] = srcPath + '/' + path
  })
  return aliases
}

const TS_CONFIG_PATH = './tsconfig.json'
const SRC_PATH = '<rootDir>'

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH),
  // moduleNameMapper: {
  //   '@services/(.*)': '<rootDir>/src/api/services/$1',
  // },
}
