import type { PageServerLoad } from './$types';
import API_URL from '../../stores/store';

export const load: PageServerLoad = async ({ fetch }) =>
{
    let res: Response = await fetch(`${API_URL}/api/v1/services`, {
        method: "GET",
        credentials: 'include',
    });
    return await res.json();
}