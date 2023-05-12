import './Login.scss'

const Login = () => {
    return (
        <main>
            <section>
                <img src="./src/components/Login/assets/parrot-logo-blue.svg"></img>
                <h1>Sysmap Parrot</h1>
                <p>Faça seu login e comece a usar!</p>
                <form>
                    <div className="label-input">
                        <label>Endereço de e-mail:</label>
                        <input className="input-email" type="email" name="email" placeholder="  Digite seu e-mail"></input>
                    </div>
                    <div className="label-input">
                        <label>Sua senha:</label>
                        <input className="input-password" type="password" name="password" placeholder="  Digite sua senha"></input>
                    </div>
                    <button>Entrar</button>                  
                </form>
                <p>Não possui uma conta? <a href="">Crie uma agora!</a></p>
            </section>
        </main>
    )
}

export default Login