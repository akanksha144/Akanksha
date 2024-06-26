import './App.css';
import { useState } from 'react';
import Notes from './components/notes';

function App() {
  const [notes,setNotes]=useState([
    {
      id:1,
      text:"Hey how you doin ? Please study more with smile"
    },
    {
      id:2,
      text:"Please make project as much as you can !!!"
    },
  ]);
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;
