import type { PageLoad } from './$types';
import API_URL from '../../stores/store';
export const load: PageLoad = async ({ fetch }) =>
{
    let res: Response = await fetch(`${API_URL}/api/v1/stripe/getOrders`, {
        method: 'GET',
        credentials: 'include',
    })
    let data = await res.json();
    //@ts-ignore
    data.orders.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1)
    return data;
}