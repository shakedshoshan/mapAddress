import { createRoot } from 'react-dom/client';
import './style.css' 
import Browser from 'webextension-polyfill';

const div = document.createElement('div');
div.id = '__root';
document.body.appendChild(div);

const rootContainer = document.querySelector('#__root');
if (!rootContainer) throw new Error("Can't find Content root element");
const root = createRoot(rootContainer);
root.render(
  <div className='absolute bottom-0 left-0 text-lg text-black bg-amber-400 z-50'  >
    content script <span className='your-class'>loaded</span>
  </div>
);

interface Message {
  type: string;
}

Browser.runtime.onMessage.addListener((message: unknown, sender, sendResponse) => {
  const msg = message as Message;
  if (msg.type === 'POPUP_BUTTON_CLICKED') {
    console.log('Button clicked in popup!');
  }
  return true;
});

try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}
