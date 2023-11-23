import axios from 'axios';

export const api = axios.create({
    baseURL: `https://vass-chile.modyo.cloud/api/content/spaces/${process.env.VUE_APP_SPACE}/types/${process.env.VUE_APP_TYPE_LENGUAJES}/entries`
})

export const api2 = axios.create({
    baseURL: `https://vass-chile.modyo.cloud/api/content/spaces/${process.env.VUE_APP_SPACE}/types/${process.env.VUE_APP_TYPE_PLAYLIST}/entries`
})

