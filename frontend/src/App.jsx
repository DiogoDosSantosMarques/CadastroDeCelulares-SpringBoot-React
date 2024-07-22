import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

//componentes
import NavBar from './componentes/NavBar/NavBar';
import Home from './componentes/Home/Home';
import Cadastrar from './componentes/CadastrarCelular/Cadastrar';
import Sobre from './componentes/Sobre/Sobre';
import Editar from './componentes/EditarCelular/Editar';

function App() {


  return (
    <>

    <BrowserRouter>

    <NavBar />
    
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/cadastrar' element={<Cadastrar />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='/editar/:id' element={<Editar />} />
      


      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
