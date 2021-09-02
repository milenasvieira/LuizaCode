var salario = prompt('Informe o seu salário atual: ');

if (salario <= 280 && typeof(salario) == 'number') {
    let aumento = salario * 0.20
    let novoSalario = aumento + salario
    console.log(`O salário antes o ajuste é ${salario}\nO percentual de aumento foi 20% \nO valor do aumento é de ${aumento}\nO seu novo salário é ${novoSalario}`)
} else if (salario > 280 && salario <= 700 && typeof(salario) == 'number') {
        let aumento = salario * 0.15
        let novoSalario = aumento + salario
        console.log(`O salário antes o ajuste é ${salario}\nO percentual de aumento foi 15% \nO valor do aumento é de ${aumento}\nO seu novo salário é ${novoSalario}`)
} else if (salario > 700 && salario <= 1500 && typeof(salario) == 'number') {
        let aumento = salario * 0.10
        let novoSalario = aumento + salario
        console.log(`O salário antes o ajuste é ${salario}\nO percentual de aumento foi 10% \nO valor do aumento é de ${aumento}\nO seu novo salário é ${novoSalario}`)
} else if (salario > 1501 && typeof(salario) == 'number') {
        let aumento = salario * 0.05
        let novoSalario = aumento + salario
        console.log(`O salário antes o ajuste é ${salario}\n O percentual de aumento foi 5%\n O valor do aumento é de ${aumento}\nO seu novo salário é ${novoSalario}`)
};