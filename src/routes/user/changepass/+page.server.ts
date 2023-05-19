import { error, redirect } from '@sveltejs/kit';
import API_URL from '../../../stores/store';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) =>
{
    if (!cookies.get('sessionId'))
        throw error(404, {
            message: 'You must be logged in to view this page'
        });
};

export const actions: Actions = {
    changePassword: async ({ request, fetch }) =>
    {
        let formdata = await request.formData();
        let res: Response = await fetch(`${API_URL}/api/v1/my-profile/changePassword`, {
            method: 'PATCH',
            body: formdata,
            credentials: 'include',
        })
        // console.log(await res.json());
        throw redirect(301, "/user");
    }
};