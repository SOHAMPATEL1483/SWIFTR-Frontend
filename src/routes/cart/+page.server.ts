import type { Actions } from "@sveltejs/kit";
import * as dotenv from 'dotenv';
dotenv.config();

export const actions: Actions = {
    removeItem: async ({ request, fetch }) =>
    {
        let formdata = await request.formData();
        let res: Response = await fetch(`${process.env.API_URL}/api/v1/services/${formdata.get("id")}/addToCart/`, {
            method: 'DELETE',
            credentials: 'include',
        })
        let data = await res.json();
        if ('data' in data)
            return { 'msg': 'Successfully removed item from cart' }

    }

};