const axios = require('axios');
const prompt = require('prompt-sync')();
async function buscarcep(cep) {

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    return response.data
}

async function main() {
    const cep = prompt('Digite o CEP, sem pontos ou virgula: ');
    console.log(cep)

    await buscarcep(cep).then((response) => {
        console.log(`Logradouro: ${response.logradouro}`);
        console.log(`Logradouro: ${response.bairro}`);
        console.log(`Logradouro: ${response.localidade}`);
        console.log(`Logradouro: ${response.uf}`);
    });
}


main();