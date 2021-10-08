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
  }
}

module.exports = CalculadoraDeSalario;
