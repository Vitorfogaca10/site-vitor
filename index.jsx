import { NavLink } from "react-router-dom";



function Cadastro () {
    return (
        <div>
            <h2>Faça seu Cadastros</h2>
            <form>
                <input placeholder="Digite seu Nome" type="text"/>
                <input placeholder="Digite seu Email" type="email"/>
                <input placeholder="Digite seu Número" type="tel"/>
                <input placeholder="Digite sua Senha" type="password"/>
                <button>Cadastrar-se</button>
            </form>
            <NavLink to="/">Já tenho uma conta</NavLink>
        </div>
    )

}

export default Cadastro;