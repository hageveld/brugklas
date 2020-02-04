import axios from 'axios';
import { navigate } from 'gatsby';

const API_ENDPOINT = 'https://api.hageveld.dev';

const api = axios.create({
    baseURL: API_ENDPOINT
});

const reportError = (error: Error) => {
    const time = Date.now();
    const data = {
        time,
        error: {
            message: error.message,
            stack: error.stack
        },
        data: {
            type: 'API_INTERACTION_FAILURE'
        }
    };

    navigate('/error', {
        state: {
            data
        }
    });
};

export const sendFormData = async (formData: any) => {
    /*const response: any = await api
        .post('/brugklas', {
            ...formData
        })
        .catch(error => {
            reportError(error);
        });
    return response.data.result;*/
    await new Promise(resolve => setTimeout(resolve, 3000));
    return true;
};
