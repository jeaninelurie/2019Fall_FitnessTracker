import { api, User } from "./my-fetch";
import $router from "../router/index";

export const User_Server = {
    async signup(name, username){
        const { user_id } = await api('signupUser', { name, username });
        User.User_Id = user_id;
        $router.push( { name: 'profile' } );
    },
    async login(username){
        const { user_id } = await api('loginUser', {username});
        User.User_Id = user_id;
        console.log(User.User_Id);
        $router.push( { name: 'profile' } );
    },
    Get_Users(){
        return api('');
    }
}