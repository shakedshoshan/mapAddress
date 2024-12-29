console.log('background script loaded');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('background script received message', message);
  if (message.type === 'POPUP_BUTTON_CLICKED') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, message);
      }
    });
  }
  return true;
});
