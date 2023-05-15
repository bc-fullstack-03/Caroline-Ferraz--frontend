import './SignUp.scss'

const SignUp = () => {
    return (
        <body>
            <main>
                <section>
                    <img src="./src/components/Login/assets/parrot-logo-blue.svg"></img>
                    <h1>Sysmap Parrot</h1>
                    <p>Cadastre-se e comece a usar!</p>
                    <form>
                        <div className="label-input">
                            <label>Seu nome:</label>
                            <input className="input-name" name="name" placeholder="  Digite seu nome"></input>
                        </div>
                        <div className="label-input">
                            <label>Endereço de e-mail:</label>
                            <input className="input-email" type="email" name="email" placeholder="  Digite seu e-mail"></input>
                        </div>
                        <div className="label-input">
                            <label>Sua senha:</label>
                            <input className="input-password" type="password" name="password" placeholder="  Digite sua senha"></input>
                        </div>
                        <div className="label-input">
                            <label>Confirme sua senha:</label>
                            <input className="input-password-confirm" type="password" name="password" placeholder="  Digite sua senha novamente"></input>
                        </div>
                        <button>Cadastrar</button>                  
                    </form>
                    <p>Já possui uma conta? <a href="">Faça Login!</a></p>
                </section>
            </main>
        </body>
    )
}

export default SignUp