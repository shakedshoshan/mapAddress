import React from 'react';
import logo from '@assets/img/logo.svg';
import Browser from 'webextension-polyfill';

export default function Popup() {
  const handleClick = async () => {
    const [tab] = await Browser.tabs.query({ active: true, currentWindow: true });
    if (tab.id) {
      Browser.tabs.sendMessage(tab.id, { type: 'POPUP_BUTTON_CLICKED' });
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
      <header className="flex flex-col items-center justify-center text-white">
        <img src={logo} className="h-36 pointer-events-none animate-spin-slow" alt="logo" />
        <p>
          Edit <code>src/pages/popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <p>Popup styled with TailwindCSS!</p>
        <button 
          onClick={handleClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </header>
    </div>
  );
}
