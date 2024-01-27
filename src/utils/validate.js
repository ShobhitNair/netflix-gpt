export const checkValidData = (email,password) =>{


    const isEmailValid =/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isPasswordValid = /^(?!.*[#!])(?=.*[A-Z])(?=.*[0-9]).{9,}$/.test(password);

    if(!isEmailValid) return 'Email ID is not valid';
    if(!isPasswordValid) return 'Password is not valid';

    return null;

}