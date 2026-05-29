import { supabase } from "../lib/supabaseClient";

// // Tambahkan baris ini SEMENTARA di paling bawah file untuk uji coba:
// insertUserFeedback("test@gmail.com", "Halo, ini pesan uji coba dari Backend!")
//   .then(res => console.log("Hasil Tes Backend:", res));

export const testInsertFeedback = async (userEmail, message, setMessage) => {
  const { data, error } = await supabase
    .from("user_feedback")
    .insert([
      {
        user_email: userEmail,
        message: message,
      },
    ]);

  if (error) {
    console.log("Gagal masuk database karena:", error.message);
  } else {
    console.log("BERHASIL! Cek dashboard Supabase kamu sekarang!");

    setMessage(""); // Reset input setelah berhasil
  }
};

// Eksekusi otomatis saat disave
// testInsertFeedback("test@gmail.com", "Halo, ini pesan uji coba dari Backend!")
  // .then(res => console.log("Hasil Tes Backend:", res));



// Parameter & Argumen:
// Parameter adalah variabel yang kita definisikan di dalam fungsi untuk menerima nilai tersebut. Contoh:
export const contohFungsi = (param1, param2, param3) => {
  console.log("Parameter 1:", param1); // Output: Parameter 1: Nilai untuk Param1
  console.log("Parameter 2:", param2); // Output: Parameter 2: Nilai untuk Param2
  console.log("Ini adalah contoh fungsi dengan parameter.", param3);
}
// Argumen adalah nilai yang kita berikan saat memanggil fungsi, 
// <button onClick={() => contohFungsi("222", "cccc" , "gg")}>
//   Click Me
// </button>
