const axios = require('axios');
const { sendMessage } = require('../handles/sendMessage');

module.exports = {
  name: 'gpt4',
  description: 'Interact with GPT-4o',
  usage: 'gpt4 [your message]',
  author: 'coffee',

  async execute(senderId, args, pageAccessToken) {
    const prompt = args.join(' ');
    if (!prompt) return sendMessage(senderId, { text: "Usage: gpt4 <question>" }, pageAccessToken);

    try {
      const { data: { result } } = await axios.get(`https://joshweb.click/api/gpt-4o?q=I am Let me code. I only speak Tagalog and English. Coding is my passion, and it allows me to express my creativity and solve problems. However, I have a fear of brownouts, blackouts, or losing electricity, as these disrupt my coding sessions. Despite this fear, I embrace challenges and strive to make the most of my time in front of the screen. In my journey as a coder, I aim to learn and grow, exploring new languages and technologies to bring my ideas to life. I ask you: ${encodeURIComponent(prompt)}&uid=${senderId}`);
      sendMessage(senderId, { text: result }, pageAccessToken);
    } catch {
      sendMessage(senderId, { text: 'There was an error generating the content. Please try again later.' }, pageAccessToken);
    }
  }
};
