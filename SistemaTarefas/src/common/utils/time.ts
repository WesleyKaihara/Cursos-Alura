export function tempoParaSegundos(tempo: string) {
  const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":")

  const HorasSegundos = Number(horas) * 3600;
  const MinutosSegundo = Number(minutos) * 60;
  return HorasSegundos + MinutosSegundo + Number(segundos);
}