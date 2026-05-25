import axios from "axios";

// Send custom notification
export const sendCustomNotification = async (
    data,
    token
) => {

    const baseURL =
    process.env.NOTIFICATION_SYSTEM;

    const url =
    `${baseURL}/notification`;

    const res = await axios.post(
        url,
        data,
        {
            headers: {
                Authorization:
                `Bearer ${token}`
            }
        }
    );

    return res.data;

};