class CalculadoraDeSalario {
  constructor() {}

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
        if (funcionario.salarioBase >= 3000.0) {
          percentDeseconto = 20;
        }
        // if (funcionario.salarioBase < 3000.0) {
        //   percentDeseconto = 10;
        // }
        return (funcionario.salarioBase * (100 - percentDeseconto)) / 100;
    }
  }
}

module.exports = CalculadoraDeSalario;
