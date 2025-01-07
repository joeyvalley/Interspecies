import api from './apiConfig'

export async function getNewsletterEntry(id) {
    try {
        const res = await api.get(`/api/newsletter/${id}`);
        console.log("Newsletter entry:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error fetching reports:", error);
        throw error; // or return an error indicator, depending on your use case
    }
  }