const promiseHandler = (resolve, reject) => {
    let index = 0;
    setTimeout(() => resolve(), 3000)
}

const login = async () => {
    return new Promise(promiseHandler)
        .then((index => {
            console.log("depois da promise")
        }))
}

const process = () => {
    console.log("Início de process.")
    login();
    console.log("fim do process")
}
process();