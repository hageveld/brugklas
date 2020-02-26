import axios from 'axios';
import { navigate } from 'gatsby';
import { store } from '../store';
import querystring from 'querystring';

const API_ENDPOINT = 'https://brugklas.hageveld.nl/api';

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
    const response: any = await api
        .post('/submit.php', querystring.stringify(formData))
        .catch(error => {
            reportError(error);
        });
    return true;
};

export const requestLogin = async (email: string, password: string) => {
    const data = {
        type: 'login',
        email,
        password
    };
    const response: any = await api.post('/admin.php', querystring.stringify(data)).catch(error => {
        reportError(error);
    });
    return response.data.result;
};

export const getAdminData = async () => {
    const state = store.getState();
    const data = {
        type: 'getdata',
        email: state.admin.email,
        password: state.admin.password
    };
    const response: any = await api.post('/admin.php', querystring.stringify(data)).catch(error => {
        reportError(error);
    });
    return response.data.result;
};

export const viewEntry = async (id: string) => {
    const state = store.getState();
    const data = {
        type: 'getentry',
        email: state.admin.email,
        password: state.admin.password,
        id
    };
    const response: any = await api.post('/admin.php', querystring.stringify(data)).catch(error => {
        reportError(error);
    });
    return response.data.result;
};

export const deleteEntry = async (id: string) => {
    const state = store.getState();
    const data = {
        type: 'deleteentry',
        email: state.admin.email,
        password: state.admin.password,
        id
    };
    const response: any = await api.post('/admin.php', querystring.stringify(data)).catch(error => {
        reportError(error);
    });
    return response.data.result;
};

export const updateContactedEntry = async (id: string, contacted: boolean) => {
    const state = store.getState();
    const data = {
        type: 'updatecontacted',
        email: state.admin.email,
        password: state.admin.password,
        id,
        contacted: contacted ? '1' : '0'
    };
    const response: any = await api.post('/admin.php', querystring.stringify(data)).catch(error => {
        reportError(error);
    });
    return response.data.result;
};

export const changePassword = async (password: string) => {
    const state = store.getState();
    const data = {
        type: 'changepassword',
        email: state.admin.email,
        password: state.admin.password,
        newpassword: password
    };
    const response: any = await api.post('/admin.php', querystring.stringify(data)).catch(error => {
        reportError(error);
    });
    return response.data.result;
};
