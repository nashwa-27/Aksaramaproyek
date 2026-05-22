import { supabase } from "../lib/supabaseClient";

// Tambahkan baris ini SEMENTARA di paling bawah file untuk uji coba:
insertUserFeedback("test@gmail.com", "Halo, ini pesan uji coba dari Backend!")
  .then(res => console.log("Hasil Tes Backend:", res));