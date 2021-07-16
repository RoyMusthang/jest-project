const adventure = require('../src/setupTeardown');
/*
Para universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
indo grupo parte em direção ao sucesso, mas,
com devido a ameaça de criaturas temíveis, o grupo não chegará inteiro ao fim.
Após cada aventura um de nossos aventureiros cairá.
Nos testes abaixo verifica a quantidade de aventureiros após cada iteração.
Ha Sua missão aqui é
Aparentimente:

  - Use a função randomAttack do objeto adventure
  que remove um dos aventureiros toda vez que é chamada,
  ela deve funcionar entre cada teste.
  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.

PS: Os codinomes dos aventureiros são reais! Tentem descobrir quem é quem!

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('quem sobreviveu?', () => {
  beforeEach(() => {
    adventure.randomAttack();
  });

  afterAll(() => {
    const adventure1 = `it's good to eat ${adventure.specialists[0].nome}, `;
    const adventure2 = `the ${adventure.specialists[0].classe}`;
    console.log(adventure1 + adventure2);
  });

  test('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
