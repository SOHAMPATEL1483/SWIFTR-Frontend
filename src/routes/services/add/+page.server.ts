import type { Actions, PageServerLoad } from './$types';
import * as dotenv from 'dotenv';
dotenv.config();


export const actions: Actions = {
    AddService: async ({ request, fetch }) =>
    {
        let formdata = await request.formData();
        console.log(formdata);
        let res: Response = await fetch(`${process.env.API_URL}/api/v1/uploadImage/`, {
            method: 'POST',
            body: formdata,
            credentials: 'include'
        });
        let data = await res.json();
        formdata.set('image', data.filePath);
        let res2: Response = await fetch(`${process.env.API_URL}/api/v1/services/`, {
            method: 'POST',
            body: formdata,
            credentials: 'include'
        });
        console.log(await res2.json());
    }
};