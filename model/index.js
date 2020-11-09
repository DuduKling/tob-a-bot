exports.verCardapio = (msg, params) => {
    let resposta = {
        type: 'image',
        url: 'http://lorempixel.com/output/food-q-c-640-480-10.jpg'
    }

    return resposta
}

exports.verStatus = () => {
    let resposta = {
        type: 'text',
        message: 'Calma que já estamos preparando o seu pedido'
    }

    return resposta
}

exports.default = () => {
    return {
        type: 'text',
        message: 'Sinto muito, não entendi o que você quer'
    }
}