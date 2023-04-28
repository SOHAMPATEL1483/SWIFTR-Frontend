import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
    signup:async ({cookies,request}) => {
        let body = Object.fromEntries(await request.formData());
        console.log(body);
        
    }
};