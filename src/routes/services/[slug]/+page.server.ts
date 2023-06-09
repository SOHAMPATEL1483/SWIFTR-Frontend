import { fail, json, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import API_URL from '../../../stores/store';

export const actions: Actions = {
    AddCartItem: async ({ fetch, params }) =>
    {
        let res: Response = await fetch(`${API_URL}/api/v1/services/${params.slug}/addToCart/`, {
            method: 'POST',
            credentials: 'include',
        })
        return { 'msg': 'Successfully added to cart' };
    },
    PostReview: async ({ request, fetch, params }) =>
    {
        let formdata = (await request.formData());
        //@ts-ignore
        formdata.review = parseInt(formdata.review, 10);
        let res: Response = await fetch(`${API_URL}/api/v1/reviews/`, {
            method: 'POST',
            //@ts-ignore
            body: formdata,
            credentials: 'include',
        });
        console.log("successfullly called api to post review");
    },
    RemoveService: async ({ params, fetch }) =>
    {
        let res: Response = await fetch(`${API_URL}/api/v1/services/${params.slug}`, {
            method: 'DELETE',
            credentials: 'include',
        });
        console.log(await res.json());
        if (res.ok)
            throw redirect(301, "/services")
    }

};

