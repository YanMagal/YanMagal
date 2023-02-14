while(true) {
var x= prompt("Digite o valor de x");
var y= prompt("Digite o valor de y");

if(x=="N" || y== "N") {
    break;
}

var resultado= Number(x) + Number(y);

alert("O resultado é:" + resultado);
}