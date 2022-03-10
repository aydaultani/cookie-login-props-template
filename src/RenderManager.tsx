import { Login } from "./Login";
import { Dashboard } from "./Dashboard";

export interface RenderManagerProps {
    loggedIn : string,
    username : string,
    id : string,
    setLogin: any
    setUsername : any
    setId : any
}

export function RenderManager(props : RenderManagerProps) {
    if (props.loggedIn === "true") {
        return (
            <div>
                <Dashboard setLogin={props.setLogin} setUsername={props.setUsername} username={props.username} setId={props.setId} id={props.id}/>
            </div>
        )
    }
    
    if (props.loggedIn === "false") {
        return(
            <Login setLogin={props.setLogin} setUsername={props.setUsername} setId={props.setId}/>
    )
  }

  return (
      <div>
          <h1>an error happened on our end</h1>
      </div>
  )

}