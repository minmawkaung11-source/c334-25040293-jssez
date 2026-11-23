import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/05fb6601-29d9-4a83-8275-aa8d245767c9/chat',
  mode: 'window',
  loadPreviousSession: false,
  showWelcomeScreen: false,
  defaultLanguage: 'en',
  initialMessages: [
    'Hi! I answer questions about the JS-SEZ.',
    'My answers come from the SMF JS-SEZ Playbook, with page numbers.'
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'Answers from the SMF JS-SEZ Playbook',
      footer: '',
      getStarted: 'New conversation',
      inputPlaceholder: 'Ask about the JS-SEZ…'
    }
  }
});

// The "Open the advisor" button on the page opens the chat window.
document.getElementById('open-advisor')?.addEventListener('click', () => {
  const toggle = document.querySelector('.chat-window-toggle');
  if (toggle) toggle.click();
});
