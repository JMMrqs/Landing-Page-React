import { serverUrl } from '../url.js';

/**
 * Fetches data from the specified path and updates the state with the retrieved data.
 *
 * @param {string} path - The endpoint to fetch data from
 * @param {function} setState - The function to update the state with the retrieved data
 * @return {Promise<void>} A Promise that resolves when the state is updated
 */
export async function fetchIntoState(path, setState) {
    const response = await fetch(`${serverUrl}${path}`);
    const data = await response.json();
    setState(data);
}

/**
 * Treats and posts form submission to the server. Async fuction.
 *
 * @param {Event} The form submission event.
 * @return {Response} Response returned from the server.
 */
export async function postFormData(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch(`${serverUrl}/api/contact/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const resMessage = await res.json();
    console.log(resMessage);
}
