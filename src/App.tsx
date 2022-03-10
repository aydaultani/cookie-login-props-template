import { RenderManager } from "./RenderManager";
import { useCookies } from 'react-cookie';


function WadoApp() {

  const [auth , setLogin] = useCookies(['loggedIn']);
  const [user , setUsername] = useCookies(['username']);
  const [auth_unique , setId] = useCookies(['id']);

  return (
    <div>
      <RenderManager loggedIn={auth.loggedIn} setLogin={setLogin} username={user.username} setUsername={setUsername} id={auth_unique.id} setId={setId}/>
    </div>
  )
}

export default WadoApp;