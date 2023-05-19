import type { PageLoad } from './$types';
import API_URL from '../../stores/store';
export const load: PageLoad = async ({ fetch }) =>
{
    let res: Response = await fetch(`${API_URL}/api/v1/stripe/getOrders`, {
        method: 'GET',
        credentials: 'include',
    })
    let user_order = await res.json();
    let res2: Response = await fetch(`${API_URL}/api/v1/stripe/getProviderOrders`, {
        method: 'GET',
        credentials: 'include',
    })
    let provider_order = await res2.json();
    console.log(provider_order);
    //@ts-ignore
    user_order.orders.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1)
    if (!provider_order.msg)
        provider_order.sort((a: any, b: any) => a.updatedAt > b.updatedAt ? -1 : 1)
    return { user_order, provider_order };
}