import sha256 from 'crypto-js/sha256';

export interface LoginProps {
    setLogin : any,
    setUsername : any,
    setId : any,
}

export function Login(props : LoginProps) {

    var current_username:string;
    
    const handleSubmit = (event:any) => {

        if (current_username) {
            var unhashed_id = current_username + Math.floor(Math.random() * 10) + new Date() + Math.floor(Math.random() * 100045234)
            var id = sha256(unhashed_id).toString()

            event.preventDefault();
            props.setUsername("username" , current_username)
            props.setLogin("loggedIn" , true)
            props.setId("id" , id)
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input type="text" onChange={(e) => current_username = e.target.value}/>
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}