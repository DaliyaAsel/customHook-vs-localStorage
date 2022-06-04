import './App.css';
import { Books } from './components/Books';
import { ContextBookComponent } from './hooks/ContextHook';
import { LocalStorage } from './components/LocalStorage';



function App() {

  return (
    <>
      <ContextBookComponent>
        <Books />
      </ContextBookComponent>

      <LocalStorage />
    </>

  );
}

export default App;
