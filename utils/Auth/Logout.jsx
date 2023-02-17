import Cookies from "js-cookie";
import FailedAlert from "../../components/alerts/FailedAlert";
import SuccessAlert from "../../components/alerts/SuccessAlert";
import { api } from "../../service/api";


const token = Cookies.get('token');

export const onLogoutHandler = async () => {
    await api.logout(token)
        .then(response => {
            SuccessAlert(response.data?.message);
            Cookies.remove('token');
        })
        .catch(() => {
            FailedAlert('Logout gagal');
        })
}