import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DataPessoas from './DataPessoas';
// import './PessoaComponent.css';

const INSTRUCTOR = 'Andrew'

class PessoasComponent extends Component {

    constructor (props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.valiate = this.valiate.bind(this)
    }

    componentDidMount () {
        console.log(this.state.id)

        if (this.state.id === -1) {
            return
        }

        DataPessoas.retrievePessoas(INSTRUCTOR, this.state.id)
            .then( response => this.setState( {nome: response.data.nome} ) )
    }

    valiate (values) {
        let errors = {}
        if (!values.nome) {
            errors.nome = 'Entre com um nome'
        } else if (values.nome.length < 2) {
            errors.nome = 'Entre com mais de 2 caracteres'
        } if (!values.descricao) {
            errors.descricao = 'Entre com uma descricao'
        }
        return errors
    }

    onSubmit (values) {
        let username = INSTRUCTOR

        let pessoa = {
            id: this.state.id,
            nome: values.nome,
            descricao: values.descricao,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            DataPessoas.criaPessoa(username, -1, pessoa)
                .then(() => this.props.history.push('/pessoas'))
        } else {
            DataPessoas.atualizaPessoa(username, this.state.id, pessoa)
                .then(() => this.props.history.push('/pessoas') )
        }
        console.log(values)
    }

    render () {

        let { nome, id } = this.state

        if (id == -1) {
            return (
                <div className="conteudo">
                   <div className="cont">
                   <h3> Pessoa </h3>
                    
                    <Formik initialValues={{id, nome}}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.valiate}
                            enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="nome" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="descricao" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Nome</label>
                                        <Field className="form-control" type="text" name="nome" />
                                    </fieldset>
    
                                    <fieldset className="form-group">
                                        <label>Descricao</label>
                                        <Field className="form-control" type="text" name="descricao" />
                                    </fieldset>
                                   
                                    <button className="btn btn-success" type="submit"> Salvar </button>
                                </Form>
                            )
                        }
                    </Formik>
                   </div>
                    
                </div>
            )

        } else  {
            return (
                <div className="conteudo">
                   <div className="cont">
                   <h3> Pessoa </h3>
                    
                    <Formik initialValues={{id, nome}}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.valiate}
                            enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="nome" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="descricao" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
    
                                    <fieldset className="form-group">
                                        <label>Nome</label>
                                        <Field className="form-control" type="text" name="nome" />
                                    </fieldset>
    
                                    <fieldset className="form-group">
                                        <label>Descricao</label>
                                        <Field className="form-control" type="text" name="descricao" />
                                    </fieldset>
                                   
                                    <button className="btn btn-success" type="submit"> Salvar </button>
                                </Form>
                            )
                        }
                    </Formik>
                   </div>
                    
                </div>
            )
        }

    }
}

export default PessoasComponent;