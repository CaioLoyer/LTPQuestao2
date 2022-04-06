class Jogador{
  constructor(nome, posiçao, dateNasc,dateAno, altura, nacionalidade, peso){
    this.nome = nome
    this.dateNasc = dateNasc
    this.dateAno = dateAno
    this.posiçao = posiçao
    this.altura = altura
    this.nacionalidade = nacionalidade
    this.peso = peso
  }

  exibirDados(){
    console.log(this.nome)
    console.log(this.dateNasc)
    console.log(this.dateAno)
    console.log(this.posiçao)
    console.log(this.altura)
    console.log(this.nacionalidade)
    console.log(this.peso)    
  }

  calqIdade(){
    return 2022 - this.dateAno
  }

  resultadoIdade(){
    return this.calqIdade()
  }

  calqAposentadoria(){
    if(this.posiçao == "ataque"){
      return 35 - jogador.resultadoIdade()
    }
    else if(this.posiçao == "meioCampo"){
       return 38 - jogador.resultadoIdade()
    }

    else if(this.posiçao == "defesa"){
       return 40 - jogador.resultadoIdade()
    }
    
  }
  resultadoAposentadoria(){
    return this.calqAposentadoria()
    
  }
}

let jogador = new Jogador("Roberto Carlos","meioCampo","28/07/1975","1992","178","brasileiro","67")

jogador.exibirDados();
console.log(jogador.resultadoIdade());
console.log(jogador.resultadoAposentadoria());