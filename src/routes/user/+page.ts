import type { PageLoad } from './$types';
import API_URL from '../../stores/store';
export const load: PageLoad = async ({ fetch, parent }) =>
{
    let { user } = await parent();
    let res: Response = await fetch(`${API_URL}/api/v1/stripe/getOrders`, {
        method: 'GET',
        credentials: 'include',
    })
    let user_order = await res.json(), provider_order = [];
    if (user.roles === "provider")
    {
        let res2: Response = await fetch(`${API_URL}/api/v1/stripe/getProviderOrders`, {
            method: 'GET',
            credentials: 'include',
        })
        provider_order = await res2.json();
    }
    user_order.orders.sort((a: any, b: any) => a.updatedAt > b.updatedAt ? -1 : 1);
    provider_order.sort((a: any, b: any) => a.updatedAt > b.updatedAt ? -1 : 1);
    return { user_order, provider_order };
}