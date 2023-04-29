import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) =>
{
    let res: Response = await fetch(`http://localhost:5000/api/v1/services`, {
        method: "GET",
        credentials: 'include',
    });
    return await res.json();
}