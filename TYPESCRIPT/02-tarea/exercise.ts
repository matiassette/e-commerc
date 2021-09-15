async function operacion(num1:number, num2:number, str:string) {
    try{
        let {Suma} = await import("./suma")
        let {Resta} = await import("./resta")
        let resultado:any;
        switch (str){
            case "suma" || "Suma":
                 resultado = new Suma(num1,num2)
                return resultado.sumar()
                break
            case "resta" || "Resta":
                 resultado = new Resta(num1,num2)
                return resultado.restar()
                break
        }
    }
    catch (error){
        console.log(error);
    }
}
async function operaciones() {
    let unaSuma = await operacion(5,3, "suma")
    console.log(unaSuma)
    let unaResta = await operacion(10, 5, "resta")
    console.log(unaResta);
}
operaciones()


















// async function operacion (num1:number, num2: number, str:string ) {
//     switch (str){
//         case 'suma' || 'Suma':
//             const miSuma = await import("./suma")
//             return miSuma(num1, num2)
//             break;
//         case 'resta' || 'Resta':
//             return num1 - num2
//             break
//     }
// }


