import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import API_URL from '../../stores/store';

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
        let res: Response = await fetch(`${API_URL}/api/v1/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        let cookiesmap = getCookiesMap(res.headers.get('set-cookie'));
        // if (!cookiesmap)
        //     return fail(400, { "msg": "username or password is wrong" });
        let res_data = await res.json();
        console.log(res_data);
        if ('user' in res_data)
        {
        }
        else
        {
            return fail(400, { msg: res_data.msg });
        }
        cookies.set("sessionId", cookiesmap.sessionId, {
            path: '/',
            httpOnly: true,
            expires: new Date(cookiesmap.Expires),
            sameSite: 'none',
            secure: true,
            encode: (s) => s,
        });
        cookies.set("_id", res_data.user["_id"], { path: "/", expires: new Date(cookiesmap.Expires) });
        cookies.set("username", res_data.user["username"], { path: "/", expires: new Date(cookiesmap.Expires) });
        cookies.set("roles", res_data.user["roles"], { path: "/", expires: new Date(cookiesmap.Expires), });

    },
    logout: async ({ cookies }) =>
    {
        console.log(cookies.getAll());
        cookies.delete("sessionId", { path: "/" });
        cookies.delete("_id", { path: "/" });
        cookies.delete("username", { path: "/" });
        cookies.delete("roles", { path: "/" });
        let res: Response = await fetch(`${API_URL}/api/v1/auth/logout`);
        console.log(await res.json());
    }

};