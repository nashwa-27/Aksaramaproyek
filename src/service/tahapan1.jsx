import { supabase } from "../lib/supabaseClient";

export const getDataTahapan = async () => {
    const { data, error } = await supabase
        .from('chapter')
        .select('id, title, materi_1, materi_2, desc');
    
    if (error) {
        console.error("Error fetching chapter data:", error);
        return []; // Kembalikan array kosong jika terjadi error
    }
    console.log("Data chapters:", data);
    localStorage.setItem("chapterData", JSON.stringify(data));

    const sortedData = data.sort((a, b) => a.id - b.id);

    return sortedData
};
// getDataTahapan
export const getDataGames = async () => {
    const { data, error } = await supabase
        .from('chapter')
        .select('id, created_at, question, option, answer,chapter_id');
    
    if (error) {
        console.error("Error fetching chapter data:", error);
        return []; // Kembalikan array kosong jika terjadi error
    }
    console.log("Data chapter:", data);
    localStorage.setItem("chapterData", JSON.stringify(data));

    const sortedData = data.sort((a, b) => a.id - b.id);

    return sortedData
};