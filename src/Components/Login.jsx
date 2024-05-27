import React from "react";
const Login = () => {
    debugger

    const [cep, setCep] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [error, setError] = React.useState(null)

    function validaCep(value){
        if(value.length === 0){
            setError("O campo não pode estar vazio!")
            return false
        } else if (!/\d{5}-\d{3}/.test(value)){
            setError("Digite um CEP válido!")
            return false
        } else {
            setError(null)
            return true
        }
    }

    function validaEmail(value){
        if(value.length === 0){
            setError("O campo não pode estar vazio!")
            return false
        } else if (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(value)){
            setError("Digite um email válido!")
            return false
        } else {
            setError(null)
            return true
        }
    }
    function validaSenha(value){
        if(value.length === 0){
            setError("O campo não pode estar vazio!")
            return false
        } else if (/[A-Z]/.test(value) && /[0-9]/.test(value) && !/[aeiou]/.test(value) && /^[@#][A-Za-z0-9]{7,13}$/.test(value)){
            setError("Digite uma Senha válido!")
            return false
        } else {
            setError(null)
            return true
        }
    }
///

    function handleBluer ({target}){
        validaCep(target.value)
    }
    function handleBluer1 ({target}){
        validaEmail(target.value)
    }
    function handleBluer2 ({target}){
        validaSenha(target.value)
    }

    function preventDefalt (event){
        event.preventDefalt()
    }

    return (
            <form onSubmit={preventDefalt}>
            <label htmlFor="cep">CEP</label>
            <input type="text" 
            style={error ? {borderColor:"red"} :
            {borderColor:"green"}}
            id="cep"
            value={cep}
            onBlur={handleBluer}
            onChange={({target}) => setCep(target.value)}
            />
            <label htmlFor="email">Email</label>
            <input type="email" 
            style={error ? {borderColor:"red"} :
            {borderColor:"green"}}
            id="email"
            value={email}
            onBlur={handleBluer1}
            onChange={({target}) => setEmail(target.value)}
            />
            <label htmlFor="senha">Senha</label>
            <input type="password" 
            style={error ? {borderColor:"red"} :
            {borderColor:"green"}}
            id="senha"
            value={senha}
            onBlur={handleBluer2}
            onChange={({target}) => setSenha(target.value)}
            />

            {error && <p>{error}</p>}
            <button>Enviar</button>
        </form>
    )
}

export default Login;