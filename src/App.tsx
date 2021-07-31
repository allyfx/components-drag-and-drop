import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { Home } from './pages/Home';

import './styles/global.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Home />
    </DndProvider>
  );
}

export default App;
