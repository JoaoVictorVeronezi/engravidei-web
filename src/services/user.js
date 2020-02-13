import api from "./api"

const getUserData = (token, userID) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    return api().get(`/usuarios/${userID}`, config);
}

export {getUserData};