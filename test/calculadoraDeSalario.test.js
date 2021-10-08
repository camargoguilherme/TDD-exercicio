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

  test("valida salario de desenvolvedor >= 3000.00", () => {
    let funcionario = {
      nome: "Lucas Fuzeto",
      email: "lucas.fuzeto@email.com",
      salarioBase: 3500.0,
      cargo: cargos.DESENVOLVEDOR,
    };
    expect(calculadoraDeSalario.calculaSalario(funcionario)).toBe(2800.0);
  });

  test("valida salario de desenvolvedor < 3000.00", () => {
    let funcionario = {
      nome: "William Maia",
      email: "william.maia@email.com",
      salarioBase: 2800.0,
      cargo: cargos.DESENVOLVEDOR,
    };
    expect(calculadoraDeSalario.calculaSalario(funcionario)).toBe(2520.0);
  });

  test("valida salario de dba >= 2000.00", () => {
    let funcionario = {
      nome: "Bruno Balzanelo",
      email: "bruno.balzanelo@email.com",
      salarioBase: 3059.0,
      cargo: cargos.DBA,
    };
    expect(calculadoraDeSalario.calculaSalario(funcionario)).toBe(2294.25);
  });

  test("valida salario de dba < 2000.00", () => {
    let funcionario = {
      nome: "Thiago Assis",
      email: "thiago.assis@email.com",
      salarioBase: 1850.0,
      cargo: cargos.DBA,
    };
    expect(calculadoraDeSalario.calculaSalario(funcionario)).toBe(1572.5);
  });
});
