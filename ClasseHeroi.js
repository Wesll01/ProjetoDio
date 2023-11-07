class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque desconhecido';
        break;
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso:
const heroi1 = new Heroi('Gandalf', 100, 'mago');
const heroi2 = new Heroi('Aragorn', 35, 'guerreiro');
const heroi3 = new Heroi('Bruce Lee', 32, 'monge');
const heroi4 = new Heroi('Hanzo', 28, 'ninja');

heroi1.atacar(); // Saída: o mago atacou usando usou magia
heroi2.atacar(); // Saída: o guerreiro atacou usando usou espada
heroi3.atacar(); // Saída: o monge atacou usando usou artes marciais
heroi4.atacar(); // Saída: o ninja atacou usando usou shuriken
