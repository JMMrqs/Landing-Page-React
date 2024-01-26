import { serverUrl } from '../url.js';
export async function fetchFromServer(path) {
    const response = await fetch(`${serverUrl}${path}`);
    const data = await response.json();
    console.log(data);
    return await data;
}
