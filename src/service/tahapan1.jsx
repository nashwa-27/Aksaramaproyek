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
    return sortedData;
};
// getDataTahapan
export const getGamesByChapterId = async (chapterId) => {
    const { data, error } = await supabase
        .from('games')
        .select('id, question, option, answer,chapter_id')
        .eq('chapter_id', chapterId);
    
    if (error) {
        console.error("Error fetching chapter data:", error);
        return []; // Kembalikan array kosong jika terjadi error
    }
    console.log("Data games:", data);
    localStorage.setItem("gamesData", JSON.stringify(data));
    const sortedData = data.sort((a, b) => a.id - b.id);
    return sortedData
};
// import { supabase } from "../lib/supabseClient";

//     export const tampilkanTahapan1 = (bab1, bab2) => {
//     // Menampilkan langsung data bab yang dimasukkan ke dalam parameter
//     console.log("Tahapan1 Bab 1:", bab1);
//     console.log("Tahapan1 Bab 2:", bab2);

//     return {
//         bab1,
//         bab2
//     };
// };                                      