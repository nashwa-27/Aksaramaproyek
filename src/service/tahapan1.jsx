import { supabase } from "../lib/supabseClient";

    export const tampilkanTahapan1 = (bab1, bab2) => {
    // Menampilkan langsung data bab yang dimasukkan ke dalam parameter
    console.log("Tahapan1 Bab 1:", bab1);
    console.log("Tahapan1 Bab 2:", bab2);

    return {
        bab1,
        bab2
    };
};