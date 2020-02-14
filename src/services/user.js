import api from "./api"

const getUserData = (token, userID) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    return api().get(`/getPatients/${userID}`, config);
}

export {getUserData};