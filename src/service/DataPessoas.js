import axios from 'axios';

const INSTRUCTOR = 'Andrew'
const URL = 'http://localhost:8080'
const INSTRUCAO_API_URL = `${URL}/instructor/${INSTRUCTOR}`

class DataPessoas {

    retrieveTodasPessoas(name) {
        return axios.get(`${INSTRUCAO_API_URL}/pessoas`);
    }

    retrievePessoas (nome, id) {
        return axios.get(`${INSTRUCAO_API_URL}/pessoas/${id}`);
    }


    retrieveTodasPessoasNome(name, palavra) {
        return axios.get(`${INSTRUCAO_API_URL}/pessoas/nome/${palavra}`);
    }

    deletePessoa (name, id) {
        console.log("Executado Servico de remocao")
        return axios.delete(`${INSTRUCAO_API_URL}/pessoas/${id}`);
    }

    atualizaPessoa (nome, id, pessoa) {
        console.log("Pessoa atualizada")
        return axios.put(`${INSTRUCAO_API_URL}/pessoas/${id}`, pessoa);
    }


    criaPessoa (nome, id, pessoa) {
        console.log("Pessoa criada")
        return axios.post(`${INSTRUCAO_API_URL}/pessoas/${id}`, pessoa);
    }
}

export default new DataPessoas();