// import { Observable } from "rxjs";
const { Observable, fromEvent, pipe } = rxjs;
const { map, filter } = rxjs.operators;

const input = document.getElementById('input');
const result = document.getElementById('result');


// OBJETO OBSERVER
const observer = {
    next: (res) => result.innerText = res,
    error: (error) => console.log(error),
    complete: () => console.log("Fin contador por complete"),
  };


//   FUNCION VOLTEAR INPUT
const reverseInput = (str) => {
    let ladata = str.split("").reverse().join("")
    return ladata
}



// FUNCIONES MANEJADORAS DE INPUTS
function datos (e, observable){

        let datiño = reverseInput(e.target.value)
        console.log(e.target.value)
        if(e.target.value.toLowerCase() == 'error'){
            observable.error('Se produjo un error')
            crudo.unsubscribe()
        }
        else if (e.target.value.toLowerCase() == 'complete'){
            observable.complete()
            crudo.unsubscribe()
        }
        else observable.next(datiño)

}



// CREACION DE OBSERVABLE
const observable = new Observable ((observable) => {
    input.addEventListener('input', e =>datos(e, observable))
})



// SUSCRIPCION
const crudo = observable.subscribe(observer)


setTimeout(() => {
    crudo.unsubscribe()
    alert('sin mas tiempo')
}, 30000);