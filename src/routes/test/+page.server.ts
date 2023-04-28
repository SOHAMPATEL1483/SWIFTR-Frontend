import type { Actions, PageServerLoad } from './$types';

export const load = (async () =>
{
    return {};
}) satisfies PageServerLoad;



export const actions: Actions = {
    testaction: async ({ cookies, fetch }) =>
    {
        console.log(cookies.getAll());
        let res: Response = await fetch(`http://localhost:5000/api/v1/getCart`, {
            method: "GET",
            headers: {
                credentials: 'include',
            }
        });
        let data = await res.json();
        console.log(data);
    },
    setcookie: async ({ cookies }) =>
    {
        cookies.set("sessionId", "s:sSGiN2q8V5pwOkXdHxU-WFiTFoV5qvHC.tVNG5D0MWg9P/oVmWZeVFBOYu4IOQrZVNRyZlODRy5o", { path: "/", sameSite: 'none' })
    }
};