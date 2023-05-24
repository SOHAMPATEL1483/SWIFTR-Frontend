import type { PageLoad } from './$types';
import API_URL from '../../stores/store';
export const load: PageLoad = async ({ fetch }) =>
{
    let res: Response = await fetch(`${API_URL}/api/v1/getCart`, {
        method: "GET",
        credentials: 'include',
    });
    let data = await res.json();
    data.data = data.data.filter((a: any) => a.services);
    return data;
};