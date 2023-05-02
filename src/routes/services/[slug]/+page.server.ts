import { fail, json } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import * as dotenv from 'dotenv';
dotenv.config();


export const actions: Actions = {
    AddCartItem: async ({ fetch, params }) =>
    {
        let res: Response = await fetch(`${process.env.API_URL}/api/v1/services/${params.slug}/addToCart/`, {
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
        let res: Response = await fetch(`${process.env.API_URL}/api/v1/reviews/`, {
            method: 'POST',
            //@ts-ignore
            body: formdata,
            credentials: 'include',
        });
        console.log("successfullly called api to post review");
    }

};

