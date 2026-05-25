import axios from "axios";

// Create lab request
export const createLabRequest =
async (
    data,
    token
) => {

    const baseURL =
    process.env.ADAPTER_LAYER_URL;

    const url =
    `${baseURL}/lab`;

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

// Fetch lab results
export const getLabResults =
async (
    patientId,
    token
) => {

    const baseURL =
    process.env.ADAPTER_LAYER_URL;

    const url =
    `${baseURL}/lab/${patientId}`;

    const res = await axios.get(
        url,
        {
            headers: {
                Authorization:
                `Bearer ${token}`
            }
        }
    );

    return res.data;

};