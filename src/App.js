import React, {useState} from 'react';
import DumForm from './components/DumFolder/DumForm'
import store from './Store/index'
import { Provider } from 'react-redux'
import Container from './components/dnd/Container'

export const myContext = React.createContext()
function App() {
  const [name, setName] = useState()
  const handleChangeName = name => {
    setName(name)
  }
  return (
    <myContext.Provider value={{
      name,
      changeName: handleChangeName
    }}>
      <div>
        <DumForm />
        <Container/>
      </div>
    </myContext.Provider>
  );
}

export default App;
