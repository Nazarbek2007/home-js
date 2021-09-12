var mass = [];


for( let i = 0; i < Infinity; i++) {
    var one = prompt('Введите имя через "add" или удалите имя через "del" !')
     let answer = one.split(' ')
    
    if (answer[0] === "add"){
        mass.push(answer[1])
    } else if(answer[0] === "del"){
        mass.splice(mass.indexOf(answer[1]), 1)
    } else if( answer[0] === "stop") {
        break
    }
    console.log(mass);
}
console.log(mass);

