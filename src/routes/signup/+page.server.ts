import { fail, json, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () =>
{
    return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
    signup: async ({ cookies, request }) =>
    {
        let formdata = await request.formData();
        let res: Response = await fetch('http://localhost:5000/api/v1/auth/register', {
            method: 'POST',
            body: formdata,
        })
        let data = await res.json();
        if ('user' in data)
        {
            throw redirect(300, "/login");
        }
        else
            return fail(400, { msg: data.msg });

    }
};