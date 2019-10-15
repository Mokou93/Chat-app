import React from 'react';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
   <Contact name="Mokou" avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKfyE41eRKMZEor9-mWCCfaVbbIQYIjiZGbyrmWGwTi5BzqE5A" status={true} />
   <Contact name="Tracey Rose" avatar="https://randomuser.me/api/portraits/women/86.jpg" status={false} />
   <Contact name="Gertrude Lopez" avatar="https://randomuser.me/api/portraits/women/96.jpg" status={true} />
    </div>
  );
}

export default App;
