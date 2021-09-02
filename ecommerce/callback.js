const proces = (callbackFunction) => {
    console.log("Cheguei aqui.")

    callbackFunction()
}

process();

const login = (callMessage) => {
    console.log("tentando logar");

    callMessage();
}

const loginResponseMessage = () => {
    console.log("Aqui eu vou mostrar a mensagem que o login retornou");
}

login(loginResponseMessage);