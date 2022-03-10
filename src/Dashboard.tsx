export interface DashboardProps {
    setLogin : any,
    setUsername : any,
    setId : any,
    id : string,
    username : string,
}

export function Dashboard(props : DashboardProps) {
    const login = () => {
        props.setLogin("loggedIn" , false)
        props.setUsername("username" , "")
        props.setId("id" , "")
    }
    return (
        <div>
            <h1>Dashboard Page</h1>
            <h2>NAME : {props.username}</h2>
            <h2>ID : {props.id}</h2>
            <button onClick={login}>logout</button>
        </div>
    )
}