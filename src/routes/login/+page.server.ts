import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

function getCookiesMap(cookiesString: any)
{
    if (!cookiesString)
        return null;
    return cookiesString.split(";")
        .map(function (cookieString: String)
        {
            return cookieString.trim().split("=");
        })
        .reduce(function (acc: any, curr: any)
        {
            acc[curr[0]] = curr[1];
            return acc;
        }, {});
}

export const actions: Actions = {
    signin: async ({ cookies, request, fetch }) =>
    {
        let data = Object.fromEntries(await request.formData());
        console.log(data);
        let res: Response = await fetch(`http://localhost:5000/api/v1/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        let cookiesmap = getCookiesMap(res.headers.get('set-cookie'));
        if (!cookiesmap)
            return fail(400, { "msg": "username or password is wrong" });
        let res_data = await res.json();
        console.log(res_data);
        console.log(res_data.user["_id"]);
        cookies.set("sessionId", cookiesmap.sessionId, {
            path: '/',
            httpOnly: true,
            expires: new Date(cookiesmap.Expires),
            sameSite: 'none',
            secure: true,
            encode: (s) => s,
        });
        cookies.set("_id", res_data.user["_id"], { path: "/" });
        cookies.set("username", res_data.user["username"], { path: "/" });
        cookies.set("roles", res_data.user["roles"], { path: "/" });

    },
    signok: async ({ fetch }) =>
    {
        let res: Response = await fetch(`http://localhost:5000/api/v1/getCart`, {
            method: "GET",
            headers: {
                credentials: 'include',
            }
        });
        let data = await res.json();
        console.log(data);
    }
};