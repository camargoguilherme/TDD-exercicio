class CalculadoraDeSalario {
  constructor() {}

  calculaSalarioLiquido(salBase, percentDeseconto) {
    return (salBase * (100 - percentDeseconto)) / 100;
  }

  salDesenvolvedor(salBase) {
    const percentDeseconto = salBase >= 3000.0 ? 20 : 10;
    return this.calculaSalarioLiquido(salBase, percentDeseconto);
  }

  salDBA(salBase) {
    const percentDeseconto = salBase >= 2000.0 ? 25 : 15;
    return (salBase * (100 - percentDeseconto)) / 100;
  }

  salTestador(salBase) {
    const percentDeseconto = salBase >= 2000.0 ? 25 : 15;
    return this.calculaSalarioLiquido(salBase, percentDeseconto);
  }

  salGerente(salBase) {
    const percentDeseconto = salBase >= 5000.0 ? 30 : 20;
    return this.calculaSalarioLiquido(salBase, percentDeseconto);
  }

  calculaSalario(funcionario) {
    if (
      funcionario.nome.length == 0 ||
      funcionario.email.length == 0 ||
      funcionario.salarioBase <= 0 ||
      funcionario.cargo.length == 0
    ) {
      return "campos 'nome', 'email', 'salarioBase' e 'cargo' precisam ser validos";
    }

    let percentDeseconto = 0;

    switch (funcionario.cargo) {
      case "desenvolvedor":
        return this.salDesenvolvedor(funcionario.salarioBase);
      case "dba":
        return this.salDBA(funcionario.salarioBase);
      case "testador":
        return this.salTestador(funcionario.salarioBase);
      case "gerente":
        return this.salGerente(funcionario.salarioBase);
    }
  }
}

module.exports = CalculadoraDeSalario;
