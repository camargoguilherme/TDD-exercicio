class CalculadoraDeSalario {
  constructor() {}

  salDesenvolvedor(salBase) {
    let percentDeseconto = 0;
    if (salBase >= 3000.0) {
      percentDeseconto = 20;
    }
    if (salBase < 3000.0) {
      percentDeseconto = 10;
    }
    return (salBase * (100 - percentDeseconto)) / 100;
  }

  salDBA(salBase) {
    let percentDeseconto = 0;
    if (salBase >= 2000.0) {
      percentDeseconto = 25;
    }
    if (salBase < 2000.0) {
      percentDeseconto = 15;
    }
    return (salBase * (100 - percentDeseconto)) / 100;
  }

  salTestador(salBase) {
    let percentDeseconto = 0;

    if (salBase >= 2000.0) {
      percentDeseconto = 25;
    }
    if (salBase < 2000.0) {
      percentDeseconto = 15;
    }
    return (salBase * (100 - percentDeseconto)) / 100;
  }

  salGerente(salBase) {
    let percentDeseconto = 0;
    if (salBase >= 5000.0) {
      percentDeseconto = 30;
    }
    if (salBase < 5000.0) {
      percentDeseconto = 20;
    }
    return (salBase * (100 - percentDeseconto)) / 100;
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
