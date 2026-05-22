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