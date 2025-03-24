import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const baseUrl = 'https://api.openai.com/v1';

export const getOpenAIResponse = async (messages) => {
  try {
    const response = await axios.post(`${baseUrl}/chat/completions`, {
      model: 'gpt-4',
      messages,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching data from OpenAI:', error);
    throw error;
  }
};
