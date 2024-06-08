export const validateFormData = (name, email, password) =>{
    if(name){
        const validateName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
        if(!validateName) return "Please give a valid name!"
    }
    const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validatPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!validateEmail) return "Please give valid email!";
    if(!validatPassword) return "Please give a strong password!"
    return null;
}