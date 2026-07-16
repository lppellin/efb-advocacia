import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App1';
import App3 from './App3';
import './index.css';

function Main() {
  const [version, setVersion] = useState(3);

  return (
    <>
      {/* Version Switcher */}
      <div className="fixed bottom-6 right-6 z-[99999] bg-black/80 backdrop-blur-md border border-white/20 p-2 rounded-full flex gap-2 shadow-2xl">
        {[1, 3].map((v) => (
          <button
            key={v}
            onClick={() => setVersion(v)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
              version === v ? 'bg-white text-black' : 'text-white/50 hover:text-white'
            }`}
          >
            V{v}
          </button>
        ))}
      </div>

      {version === 1 && <App1 />}
      {version === 3 && <App3 />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
