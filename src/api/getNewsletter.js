import api from './apiConfig'

export async function getNewsletterEntry(id) {
    console.log("trying to get newsletter entry with id:", id);ç
    try {
        const res = await api.get(`/api/newsletter/${id}`);
        console.log("Newsletter entry:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error fetching reports:", error);
    }
  }