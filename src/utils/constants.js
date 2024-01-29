export const LOGO ='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const USER_AVATAR ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHv-Ga0Qg90F9CTloSMXpOUe-o5lL_6Pu9GrDOWqU2pk7EcdwldSl8SIIObT8sfyKeujM&usqp=CAU';
export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
export const API_OPTIONS = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
        }
}
export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500";

export const  GPT_KEY = process.env.REACT_APP_GPT_KEY 