export class Resta {
    private miNum1: number;
    private miNum2: number;
    constructor(num1:number, num2:number){
        this.miNum1 = num1
        this.miNum2 = num2
    }
    restar = ()=>{
        return this.miNum1 - this.miNum2
    }   
}