export const checkValidData=(email,password)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        email
      );
      const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

        if(!isEmailValid) return "email is not valid";
         if (!isPasswordValid) return 'password must be 8 characters long and contain atleast one capital letter and small letter';

         return null;
}