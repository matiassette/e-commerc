const { Observable, fromEvent } = rxjs;
const { map, pipe } = rxjs.operators;

const input = document.getElementById('input');
const result = document.getElementById('result');

// OBJETO OBSERVER
const observer = {
    next: (res) => next(res, observer),
    error: (error) => console.log(error),
    complete: () => console.log("Fin contador por complete"),
  };
//   FUNCION VOLTEAR INPUT
const reverseInput = (str) => {
    let ladata = str.split("").reverse().join("")
    return ladata
}
// FUNCION DATA_HANDLER
function next (str, obs){
    if (str.toLowerCase() == 'rorre'){
        obs.error('Usaste una palabra taboo, estas denunciado por machista opresor')
        desubscribir()
    }
    else if ( str == 'etelpmoc'){
        obs.complete()
        desubscribir()
    }
    else{
        result.innerText = str
    }
}
// FUNCION UNSUBSCRIBE
function desubscribir(){
    input.value = ''
    input.disabled = true
    result.innerHTML = 'ROMPISTE TODO BRO'
    result.disabled = true
    cocinado.unsubscribe()
}
// USANDO FROMEVENT
const crudo = fromEvent(input, 'input')
const cocinado = crudo.pipe(map(x => reverseInput(x.target.value) )).subscribe(observer)

setTimeout(() => {
    desubscribir()
    alert('Se termino la hora de cyber papi')
}, 10000);