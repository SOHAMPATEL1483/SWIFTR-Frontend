import API_URL from '../../stores/store';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) =>
{
    let query = url.searchParams.get('search');
    if (!query) query = "";
    let res: Response = await fetch(`${API_URL}/api/v1/services?search=${query}`, {
        method: "GET",
        credentials: 'include',
    });
    let data = await res.json();
    return data;
};