import api from './apiConfig'

export async function getAllEssays(){
    console.log("Populating frontend with essays");
    try {
        const res = await api.get(`/api/essays/`);
        const sortedEssays = res.data.sort((a, b) => a.title.localeCompare(b.title));
        return sortedEssays;
    } catch (error) {
        console.error("Error fetching reports:", error);
    }
}

export async function getEssay(id) {
    console.log("trying to get newsletter entry with id:", id);
    try {
        const res = await api.get(`/api/essays/${id}`);
        console.log("Essay:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error fetching reports:", error);
    }
  }