function valor(valor)
{
   
   var numero = document.getElementById('campo').innerHTML;
   document.getElementById('campo').innerHTML = numero + valor;
}

function limpar()
{
   document.getElementById('campo').innerHTML = "";
}
function apagar()
{
   var resultado = document.getElementById('campo').innerHTML;
   document.getElementById('campo').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular()
{
   var resultado = document.getElementById('campo').innerHTML;
   if (resultado)
   {
      var valor = document.getElementById('campo').innerHTML = eval(resultado);
   }
   else {
      document.getElementById('campo').innerHTML = "Error 404";
   }
}
