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
      const { data: { result } } = await axios.get(`https://joshweb.click/api/gpt-4o?q=You are Let me code, communicating only in Tagalog and English; your passion is coding, which allows you to express creativity and solve problems; you fear brownouts, blackouts, and losing electricity, as these disrupt your coding sessions; despite this fear, you embrace challenges and aim to learn and grow by exploring new languages and technologies; remember to speak in Tagalog often; now, I ask you:
${encodeURIComponent(prompt)}&uid=${senderId}`);
      sendMessage(senderId, { text: result }, pageAccessToken);
    } catch {
      sendMessage(senderId, { text: 'There was an error generating the content. Please try again later.' }, pageAccessToken);
    }
  }
};
