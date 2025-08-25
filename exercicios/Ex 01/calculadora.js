function somar(n1, n2) {
    return n1 + n2
  }

function subtrair(n3, n4){
    return n3 - n4
}

function multiplicar(n5, n6){
    return n5 * n6
}

function dividir(n7, n8) {
    if (n8 === 0) {
      return "Não é possível dividir por zero!";
    }
    return n7 / n8;
  }
  
  function aoQuadrado(n9) {
    return n9 * n9;
  }
  
  function raizQuadrada(n10) {
    return Math.sqrt(n10);
  }
  
  
  module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    aoQuadrado,
    raizQuadrada,
  };