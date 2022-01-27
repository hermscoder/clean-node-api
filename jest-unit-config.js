// arquivo js que altera a propriedade que define pra quais arquivos olhar durante o test
const config = require('./jest.config')
config.testMatch = ['*/*.spec.ts']
module.export = config
