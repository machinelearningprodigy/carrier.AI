// src/geminiApi.js
import axios from 'axios';

const API_KEY = 'AIzaSyBbaxcAPax4yXfi_b3IzRLmqXI-OHJJ16w'; // Replace with your Gemini API key
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

export const generateContent = async (prompt) => {
  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  try {
    const response = await axios.post(API_URL, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: { key: API_KEY },
    });

    return { result: response.data.candidates[0].content.parts[0].text };
  } catch (error) {
    console.error('Error calling Gemini API:', error.response?.data || error.message);
    throw error;
  }
};
