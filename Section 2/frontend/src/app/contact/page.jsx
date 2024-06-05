import React from 'react';


const App = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 p-4">
        <img className="mx-auto w-1/2 sm:w-full" src="https://via.placeholder.com/150" alt="Placeholder" />
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-2">Feedback</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
      </div>
    </div>
  );
}

export default App;