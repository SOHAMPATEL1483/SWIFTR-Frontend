import { redirect, type Actions } from "@sveltejs/kit";
import API_URL from "../../stores/store";

export const actions: Actions = {
    removeItem: async ({ request, fetch }) =>
    {
        let formdata = await request.formData();
        let res: Response = await fetch(`${API_URL}/api/v1/services/${formdata.get("id")}/addToCart/`, {
            method: 'DELETE',
            credentials: 'include',
        })
        let data = await res.json();
        if ('data' in data)
            return { 'msg': 'Successfully removed item from cart' }

    },
    checkout: async ({ request, fetch }) =>
    {
        let res: Response = await fetch(`${API_URL}/api/v1/stripe/checkout/`, {
            method: 'POST',
            credentials: 'include',
            redirect: 'follow',
        });
        let data = await res.json();
        console.log(data.url);
        throw redirect(308, data.url);
    }

};