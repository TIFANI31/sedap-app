import axios from 'axios'

const API_URL = "https://xrxdakweljgkxegtpqlg.supabase.co/rest/v1/note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyeGRha3dlbGpna3hlZ3RwcWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk5MDUsImV4cCI6MjA2NDQ4NTkwNX0.kWvuz_gK3Y_7AvHAm2ihDJNLONT_-yOc-7XQoYSaC3M"

const headers = {
  "Content-Type": "application/json",
  "apikey": API_KEY,
  "Authorization": `Bearer ${API_KEY}`,
};

export const notesAPI = {
  async fetchNotes() {
    const res = await axios.get(API_URL, { headers });
    return res.data;
  },

  async createNote(data) {
    const res = await axios.post(API_URL, data, { headers });
    return res.data;
  },

  async deleteNote(id) {
    const res = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
    return res.data;
  },

   async update(id, data) {
    const res = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers });
    return res.data;
  },
};
