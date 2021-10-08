const CalculadoraDeSalario = require("../lib/calculadoraDeSalario");

const calculadoraDeSalario = new CalculadoraDeSalario();

const cargos = {
  DESENVOLVEDOR: "desenvolvedor",
  DBA: "dba",
  TESTADOR: "testador",
  GERENTE: "gerente",
};

describe("CalculadoraDeSalario", () => {
  test("verifica campos do funcionario", () => {
    let funcionario = {
      nome: "",
      email: "vagner.silva@email.com",
      salarioBase: 7000.0,
      cargo: cargos.GERENTE,
    };
    expect(calculadoraDeSalario.calculaSalario(funcionario)).toBe(
      "campos 'nome', 'email', 'salarioBase' e 'cargo' precisam ser validos"
    );
  });
});
