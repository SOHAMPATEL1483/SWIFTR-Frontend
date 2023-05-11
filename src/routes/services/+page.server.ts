import type { PageServerLoad } from './$types';
import API_URL from '../../stores/store';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies, fetch }) =>
{
    if (!cookies.get('sessionId'))
        throw error(404, {
            message: 'You must be logged in to view this page'
        });
    let res: Response = await fetch(`${API_URL}/api/v1/services`, {
        method: "GET",
        credentials: 'include',
    });
    return await res.json();
}