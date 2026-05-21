import { supabase } from "../lib/supabseClient";


export const onSignUp = async (FirstName, LastName, UserEmail, Password, navigate) => {
        
        const { data, error } = await supabase.auth.signUp({ 
            email: UserEmail,
            password: Password
        });

        if (error) {
            console.log("Error signing up: ", error.message);
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

<<<<<<< HEAD

}
//signIn
export const onSignIn = async (UserEmail, Password, navigate) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: UserEmail,
        password: Password
    }); 
}
