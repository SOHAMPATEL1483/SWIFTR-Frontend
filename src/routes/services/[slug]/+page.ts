import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) =>
{

    let res: Response = await fetch(`http://localhost:5000/api/v1/services/${params.slug}`, {
        method: "GET",
        credentials: 'include',
    })
    let data = await res.json();
    data.slug = params.slug;

    return data;

}