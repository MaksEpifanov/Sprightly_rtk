import ky from 'ky';

const prefixUrl = 'https://api.jikan.moe/v4';

export const api = ky.create({ prefixUrl });
