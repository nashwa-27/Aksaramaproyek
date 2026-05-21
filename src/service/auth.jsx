// 1. PASTIKAN PATH INI BENAR (Sesuaikan jika letak foldernya berbeda)
import { supabase } from "../lib/supabaseClient"; 

// SIGN UP
export const onSignUp = async (
  FirstName,
  LastName,
  UserEmail,
  Password,
  navigate
) => {
  // Buat akun auth
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: UserEmail,
    password: Password,
  });

  // Cek error auth
  if (signUpError) {
    console.log("Error signing up:", signUpError.message);
    return;
  }

  // PERBAIKAN: Menggunakan signUpData, bukan data
  localStorage.setItem("userData", JSON.stringify(signUpData?.user));

  navigate("/");
};

// SIGN IN (PERBAIKAN: Menambahkan navigate ke parameter)
export const onSignIn = async (UserEmail, Password, navigate) => {
  // PERBAIKAN: Menggunakan signInWithPassword dan mengubah nama variabel penampung
  const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
    email: UserEmail,
    password: Password,
  });

  if (signInError) {
    console.log("Login Error:", signInError.message);
    return;
  }

  // PERBAIKAN: Menggunakan signInData sesuai variabel di atas
  localStorage.setItem("userData", JSON.stringify(signInData?.user));

  navigate("/");
};

// SIGN OUT
export const onSignOut = async () => {
  const { error: signOutError } = await supabase.auth.signOut();

  if (signOutError) {
    console.log(signOutError.message);
  }

  localStorage.removeItem("userData");
};