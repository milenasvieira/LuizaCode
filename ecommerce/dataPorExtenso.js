function dataPorExtenso(data) {
    let dia = data.slice(0,2);
    let mes = data.slice(3,5);
    let ano = data.slice(6);

    switch (mes){
        case '01':
            mes = 'janeiro'
            break;
        case '02':
            mes = 'fevereiro'
            break;
        case '03':
            mes = 'março'
            break;
        case '04':
            mes = 'abril'
            break;
        case '05':
            mes = 'maio'
            break;
        case '06':
            mes = 'junho'
            break;
        case '07':
            mes = 'julho'
            break;
        case '08':
            mes = 'agosto'
            break;
        case '09':
            mes = 'setembro'
            break;
        case '10':
            mes = 'outubro'
            break;
        case '11':
            mes = 'novembro'
            break;
        case '12':
            mes = 'dezembro'
            break;
        default: 0
            break;
    }
    console.log(`${dia} de ${mes} de ${ano}`)
}

dataPorExtenso(07/11/1997);