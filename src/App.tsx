import React from 'react';
import { Card } from "./components";

function App() {
  return (
    <main className="flex justify-center w-full p-2 items-center border-red-700 border">
      <div className=''>
        <Card method='Post' />
      </div>
    </main>
  );
}

export default App;
