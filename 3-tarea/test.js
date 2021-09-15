(()=>{
    let count = 0
    function runText(str,t=1000,cb){
        let splitted = str.split(' ')
        for (let i = 0; i < splitted.length; i++) {
            console.log(splitted[i])
            count++
        }
        setTimeout(cb, t);
    }

    runText("hola padre", 1000, ()=>{
        runText("hola madre", 1000, ()=>{
            runText('mister groso', 1000, ()=>{
                console.log('termine master', count)
            })
        })
    })
})();
