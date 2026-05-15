import { supabase } from "../lib/supabseClient";

export const onSignUp = async (FirstName, LastName, UserEmail, Password) => {
        const { data, error } = await supabase.auth.signUp({ 
            email: 'giza23@yopmail.com',
            password: '12345678'
        });

        if (error) {
            console.log("Error signing up: ", error.message);
            return;
        }

        const { error: insertError } = await supabase.form("users").insert([
            {
               id: data?.user?.id,
                email: "email@gmail.com",
               fisrt_name: "Giza",
               last_name: "Aura Widyandhari"
            }
        ])
}