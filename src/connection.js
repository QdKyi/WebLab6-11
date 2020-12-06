import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/equip',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getTools() {
    await delay(2000);
    return (await instance.get()).data;
}

export async function getToolById(id) {
    await delay(2000);
    return (await instance.get(`/${id}`)).data;
}

export async function getFilteredTools(type, condition) {
    await delay(2000);
    return (await instance.get(`/filters/${type}&${condition}`)).data;
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
} 