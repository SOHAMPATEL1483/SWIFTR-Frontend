import type { PageLoad } from './$types';
import * as dotenv from 'dotenv';
dotenv.config();

export const load: PageLoad = async ({ fetch }) =>
{
    let res: Response = await fetch(`${process.env.API_URL}/api/v1/getCart`, {
        method: "GET",
        credentials: 'include',
    });
    let data = await res.json();
    return data;
};