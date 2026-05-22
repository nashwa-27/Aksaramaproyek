<<<<<<< HEAD
import { supabase } from "../lib/supabaseClient";

// Tambahkan baris ini SEMENTARA di paling bawah file untuk uji coba:
insertUserFeedback("test@gmail.com", "Halo, ini pesan uji coba dari Backend!")
  .then(res => console.log("Hasil Tes Backend:", res));
=======
import { supabase } from "../lib/supabseClient";
export const testInsertFeedback = async () => {
  const { data, error } = await supabase
    .from("user_feedback")
    .insert([
      {
        user_email: "backend_sukses@test.com",
        message: "Sumbatan aman! Fitur feedback sudah berhasil masuk database.",
      },
    ]);

  if (error) {
    console.log("Gagal masuk database karena:", error.message);
  } else {
    console.log("BERHASIL! Cek dashboard Supabase kamu sekarang!");
  }
};

// Eksekusi otomatis saat disave
testInsertFeedback();
>>>>>>> 8082a204f140c317495d618f8484112ba87f4ae4
