import type { PageLoad } from './$types';
import API_URL from '../../stores/store';
export const load: PageLoad = async ({ fetch }) =>
{
    let res: Response = await fetch(`${API_URL}/api/v1/stripe/getOrders`, {
        method: 'GET',
        credentials: 'include',
    })
    return await res.json();
}