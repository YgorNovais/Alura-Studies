export function tempoparaSegundos(tempo: string){
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

    const horasemSegundos = Number(horas) * 3600;
    const minutosemSegundos = Number(minutos) * 60;
    return horasemSegundos + minutosemSegundos + Number(segundos);
}