import { supabase } from "../lib/supabaseClient";


// SIGN UP
export const onSignUp = async (
  FirstName,
  LastName,
  UserEmail,
  Password,
  navigate
) => {

  // buat akun auth
  const {
    data: signUpData,
    error: signUpError
  } = await supabase.auth.signUp({
    email: UserEmail,
    password: Password
  });

  // cek error auth
  if (signUpError) {
    console.log(
      "Error signing up:",
      signUpError.message
    );
    return;
  }

  // insert ke tabel users
  const {
    error: insertError
  } = await supabase
    .from("users")
    .insert([
      {
        id: signUpData?.user?.id,
        email: UserEmail,
        first_name: FirstName,
        last_name: LastName,
        current_chapter_id: 1
      }
    ]);

  // cek error insert
  if (insertError) {
    console.log(
      "Insert Error:",
      insertError.message
    );
    return;
  }

  // simpan local storage
  localStorage.setItem(
    "userData",
    JSON.stringify(signUpData?.user)
  );

  // pindah halaman
  navigate("/");
};



// SIGN IN
export const onSignIn = async (
  email,
  password,
  navigate
) => {

  const {
    data: signInData,
    error: signInError
  } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (signInError) {
    console.log(
      "Login Error:",
      signInError.message
    );
    return;
  }

  localStorage.setItem(
    "userData",
    JSON.stringify(signInData?.user)
  );

  navigate("/");
};



// SIGN OUT
export const onSignOut = async () => {

  const {
    error: signOutError
  } = await supabase.auth.signOut();

  if (signOutError) {
    console.log(
      signOutError.message
    );
  }

  localStorage.removeItem("userData");
};