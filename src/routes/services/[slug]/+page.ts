import type { PageLoad } from './$types';
import API_URL from '../../../stores/store';
export const load: PageLoad = async ({ fetch, params }) =>
{

    let res: Response = await fetch(`${API_URL}/api/v1/services/${params.slug}`, {
        method: "GET",
        credentials: 'include',
    })
    let data = await res.json();
    data.slug = params.slug;
    return data;

}