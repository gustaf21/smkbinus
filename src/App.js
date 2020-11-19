import {BrowserRouter, Switch, Link} from 'react-router-dom';
import Home from './component/Home';
import Sejarah from './component/Sejarah';
import Guru from './component/Guru';
import Alamat from './component/Alamat';
import Jurusan from './component/Jurusan';
import Kepalasekolah from './component/Kepalasekolah';

function App() {
  return (
     <BrowserRouter>
         <Switch>
           <Link path="/" exact component={Home} />
           <Link path="/Sejarah" exact component={Sejarah} />
           <Link path="/Guru" exact component={Guru} />
           <Link path="/Jurusan" exact component={Jurusan} />
           <Link path="/Alamat" exact component={Alamat} />
           <Link path="/Kepalasekolah" component={Kepalasekolah}/>
         </Switch>
     </BrowserRouter>
  );
}

export default App;