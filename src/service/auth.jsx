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

        

        // const { error: insertError } = await supabase.from("users").insert([
        //     {
        //        id: data?.user?.id,
        //         email: UserEmail,
        //        first_name: FirstName,
        //        last_name: LastName
        //     }
        // ])
// set local storage
        localStorage.setItem("userData", JSON.stringify(data?.user));



        navigate ("/");


}
//signup
export const onSignIn = async (FirstName, LastName, UserEmail, Password) => {
        const { data, error } = await supabase.auth.signUp({ 
           
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