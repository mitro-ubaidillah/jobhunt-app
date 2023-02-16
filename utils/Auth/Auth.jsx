import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export const Auth = () => {
    const token = Cookies.get('token');
    if (token == undefined) {
        return false;
    }
    try {
        const decode = jwtDecode(token);
        if (decode.length == 0) {
            return false
        }
    } catch (e) {
        return false;
    }
    return true; 
}