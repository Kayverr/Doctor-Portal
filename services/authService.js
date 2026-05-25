import axios from "axios";

export const verifyToken = async (
    token
) => {

    const url =
    `${process.env.AUTH_SYSTEM_URL}/me`;

    const response =
    await axios.get(
        url,
        {
            headers: {
                Cookie:
                `token=${token}`
            },

            withCredentials: true
        }
    );

    return response.data;

};