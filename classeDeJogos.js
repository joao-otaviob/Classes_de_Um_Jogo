class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade ;
      this.tipo = tipo ;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = ' magia';
          break;
        case 'guerreiro':
          ataque = ' espada';
          break;
        case 'monge':
          ataque = ' artes marciais';
          break;
        case 'ninja':
          ataque = ' shuriken';
          break;
        default:
          ataque = ' um ataque indefinido';
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  const mago = new Heroi('Gandalf', 150, 'mago');
  const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
  const monge = new Heroi('Bruce Lee', 32, 'monge');
  const ninja = new Heroi('Hattori Hanzo', 28, 'ninja');
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  