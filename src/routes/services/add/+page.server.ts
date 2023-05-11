import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import API_URL from '../../../stores/store';

export const load: PageServerLoad = async ({ cookies }) =>
{
    if (cookies.get('roles') == 'user')
        throw error(404, {
            message: 'You Can\'t access this page because you are not a provider'
        });

};

export const actions: Actions = {
    AddService: async ({ request, fetch }) =>
    {
        let formdata = await request.formData();
        let res: Response = await fetch(`${API_URL}/api/v1/uploadImage/`, {
            method: 'POST',
            body: formdata,
            credentials: 'include'
        });
        let data = await res.json();
        formdata.set('image', data.filePath);
        let res2: Response = await fetch(`${API_URL}/api/v1/services/`, {
            method: 'POST',
            body: formdata,
            credentials: 'include'
        });
    }
};