import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) =>
{
    let res: Response = await fetch(`http://localhost:5000/api/v1/getCart`, {
        method: "GET",
        credentials: 'include',
    });
    let data = await res.json();
    return data;
};