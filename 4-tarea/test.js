
        const { Observable, fromEvent, pipe } = rxjs;
        const { map, filter } = rxjs.operators;
// Agarrando inputs
        const input = document.getElementById('input');
        const output = document.getElementById('output');

        const mirror = (str) => {
            return str.split("").reverse().join("");
        }

        const observable = new Observable((observable) => {

            let newOutput;

            input.addEventListener('input', (e) => {

                if(e.target.value.toLowerCase() == 'error')
                observable.error('Se ingreso error');

                if(input.value.toLowerCase() == 'complete')
                observable.complete();

                if (e.data == null) {
                    newOutput = output.value.substring(1)
                }
                else {
                    newOutput = mirror(output.value);
                    newOutput += e.data;
                }

                observable.next(newOutput)
            });

        })

        const next = (data) => {
            output.value = data;
        }

        const error = (message) =>{
            console.log(message);
            unsuscribe();
        }

        const complete = () => {
            console.log('Complete');
            unsuscribe();
        }

        const unsuscribe = () => {
            input.disabled = true;
            input.value = '';
            output.disabled = true;
            output.value = '';
            sub.unsubscribe();
        }

        const handler = {
            next,
            error,
            complete,
        }

        const sub = observable
        .pipe(map((data) => mirror(data)))
        .subscribe(handler);

      setTimeout(() => {
          console.log('Desuscripción automática');
          unsuscribe();
      }, 30000);