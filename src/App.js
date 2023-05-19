import { useState } from 'react';

function App() {
  return <Hooey />;
}

function Hooey() {
  const [c, setc] = useState(0);
  return (
    <>
      Number: {c}
      <button onClick={() => setc(c => c + 1)}>Add</button>
    </>
  );
}

export default App;
