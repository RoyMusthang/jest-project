const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => { // async para deixar assincrono.
    await expect(answerPhone(true)).resolves.toBe('Oi!'); // await para esperar algo ser resolvido, chama a função 
    // com parametro true .resolves para pegar o acerto e comparar com a resposta esperada
  });
  test('ocupado', async () => {
    await expect(answerPhone(false)).rejects.toThrow(Error('Infelizmente não podemos atender...'));
    // https://jestjs.io/pt-BR/docs/expect#tothrowerror toThrow para injetar error
  });
});
