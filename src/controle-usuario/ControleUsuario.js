class ControleUsuario {

    constructor() {
        this._usuario = {
            login:"admin",
            senha:"1234"
        }

        this._logado = false;
    }

    logado = () => {
        return this._logado;
    }

    logar =(usuario, senha) => {

        if (this._usuario.login === usuario && this._usuario.senha === senha) {
            this._logado = true;
            return true;
        } else {
            return false;
        }

    }

    deslogar = () => {
        this._logado = false;
    }

}

const controleUsuario = new ControleUsuario();
export default controleUsuario;