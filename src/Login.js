
import React from "react";

export default class TelaLogin extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            usuario:"",
            senha:""
        }

    }



    render() {
        return(
            <div className="container" style={{marginTop: "130px"}}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <div className="card-group">
                        <div className="card p-4">
                        <div className="card-body">
                            <h1>Login</h1>
                            <p className="text-muted">Sign In to your account</p>
                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="icon-user"></i>
                                </span>
                            </div>
                            <input className="form-control" type="text" placeholder="Username"
                                onChange={(ev) => {
                            
                                    let usuario = ev.target.value;
                                    this.setState({usuario})
                                }
                            } />
                            </div>
                            <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="icon-lock"></i>
                                </span>
                            </div>
                            <input className="form-control" type="password" placeholder="Password" 
                                onChange={(ev) => {
                            
                                    let senha = ev.target.value;
                                    this.setState({senha})
                                }
                            }/>
                            </div>
                            <div className="row">
                            <div className="col-6">
                                <button className="btn btn-primary px-4" type="button"
                                    onClick={() => {

                                        const { logar } = this.props;
                                        const { usuario, senha } = this.state
                                        logar(usuario, senha);

                                    }}>
                                    ACESSAR
                                </button>
                            </div>
                            <div className="col-6 text-right">
                                <button className="btn btn-link px-0" type="button">Forgot password?</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card text-white bg-primary py-5 d-md-down-none" style={{width:"44%"}}>
                        <div className="card-body text-center">
                            <div>
                            <h2>Sign up</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="btn btn-primary active mt-3" type="button">Register Now!</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

}