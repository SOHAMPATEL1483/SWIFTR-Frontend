import type { PageServerLoad } from './$types';
import * as dotenv from 'dotenv'
dotenv.config()

export const load: PageServerLoad = async ({ fetch }) =>
{
    let res: Response = await fetch(`${process.env.API_URL}/api/v1/services`, {
        method: "GET",
        credentials: 'include',
    });
    return await res.json();
}