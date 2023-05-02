import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    removeItem: async ({ request, fetch }) =>
    {
        let formdata = await request.formData();
        let res: Response = await fetch(`http://localhost:5000/api/v1/services/${formdata.get("id")}/addToCart/`, {
            method: 'DELETE',
            credentials: 'include',
        })
        let data = await res.json();
        if ('data' in data)
            return { 'msg': 'Successfully removed item from cart' }

    }

};