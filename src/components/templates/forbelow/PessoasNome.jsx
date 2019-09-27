import React, {Component} from 'react';
import DataPessoas from '../../../service/DataPessoas.js';
import './ListaPessoa.css';
import '../../../index.css';
import './instrucaoApp.css'
import './bootstrap.css'

const INSTRUCTOR = 'Andrew';

class ListaPessoas extends Component {
    constructor (props) {
        super(props);
        this.state = {
            palavra: this.props.match.params.palavra,
            pessoas: [],
            message: null 
        }
        this.refreshPes = this.refreshPes.bind(this)

        this.buscarPessoa = this.buscarPessoa.bind(this)
        this.onChange = this.onChange.bind(this)

        this.atualizarPesssoaClicked = this.atualizarPesssoaClicked.bind(this)
        this.deletePessoaClicked = this.deletePessoaClicked.bind(this)
    }

    componentDidMount () {
        this.refreshPes();
    }

    refreshPes () {
        DataPessoas.retrieveTodasPessoasNome(INSTRUCTOR, this.state.palavra)
            .then(
                response => {
                    console.log(response);
                    this.setState( {pessoas: response.data} );
                }
            )
    }

    onChange = (event) => {
        this.setState({ id: event.target.value});
    }

    buscarPessoa = (event) => {
        this.setState({ id: event.target.value});
        console.log("id: " + this.state.id)

        if (this.state.id <= -1) {
            alert("Id inexistente")
        } else {

            this.props.history.push(`/pessoa/${this.state.id}`)
        }
    }

    atualizarPesssoaClicked (id) {
        console.log("Atualizado" + id)
        this.props.history.push(`/pessoas/${id}`)
    }

    deletePessoaClicked (id) {
        DataPessoas.deletePessoa(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({message: `Deletado Pessoa ${id} com sucesso`})
                    this.refreshPes()
                }
            )
    }

    render() {
        return (
            <div className="conteudo">
                <h3> Busca Por Nome </h3>

                <div  id="alinhar" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <input  type="number" placeholder="Digite um id" onChange={this.onChange} value={this.state.id} />
                    <label class="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" autocomplete="off" onClick={this.buscarPessoa} value="submit" checked/><i class="fa fa-search" aria-hidden="true" ></i>
                    </label>
                </div>

                {this.state.message && <div class="alert alert-sucess">{this.state.message}</div>}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th> Nome </th>
                                <th> Atualizar </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pessoas.map(
                                    pessoa =>
                                        <tr key={pessoa.id}>
                                            <td> {pessoa.id} </td>
                                            <td> {pessoa.nome}</td>
                                            <td> <button className="btn btn-success" onClick={() => this.atualizarPesssoaClicked(pessoa.id)}> Atualizar </button> </td>
                                            <td> <button className="btn btn-warning" onClick={() => this.deletePessoaClicked(pessoa.id)}> Delete </button> </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    
            </div>
        );
    }
}

export default ListaPessoas;