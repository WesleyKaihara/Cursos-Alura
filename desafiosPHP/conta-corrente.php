<?php 

//Array associativos
function Msg(string $mensagem){
  echo $mensagem . PHP_EOL;
}

function depositar(array $conta,float $valorDeposito) : array{
  if($valorDeposito < 0){
    Msg("Depositos precisam ser positivos");
  }else{
    $conta['saldo'] +=$valorDeposito;
  }
 
  return $conta;
}

function sacar(array $conta,float $valorSaque) : array{

  if($valorSaque > $conta['saldo']){
    Msg('Valor indisponível');
  }else{
    $conta['saldo'] -=$valorSaque;
  }

  return $conta;
}

function mudarNomeConta(array &$conta,string $novoNome){
  $conta['titular'] = $novoNome;
}


$contas_correntes = [
  '12345678' => [
    //chave - valor
    'titular' => "Maria",
    'saldo'=> 2500
  ],
  '87654321' => [
    'titular' => "Juca",
    'saldo' => 2000
  ],
  '12312312' => [
    'titular' => 'Gustavo',
    'saldo' => 3200
  ]
];

$contas_correntes['12367831'] = [
  'titular' => 'Ana',
  'saldo' => '1200'
];  


$contas_correntes['12345678'] = sacar($contas_correntes['12345678'],500);

$contas_correntes['12345678'] = depositar($contas_correntes['12345678'],1200);

mudarNomeConta($contas_correntes['12367831'],'Julia');

foreach ($contas_correntes as $cpf => $conta) {
  echo "$conta[titular] │ $conta[saldo] ";
 }


//arrays php só aceitam inteiro e string

// 1 , 1.5 , '1' 

?>
