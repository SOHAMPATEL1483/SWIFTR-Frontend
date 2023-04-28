import type { Handle } from "@sveltejs/kit";


export const handle: Handle = async ({ event, resolve }) =>
{
    let user: any = {
        isLoggedIn: false,
        username: '',
        roles: '',
        _id: '',
    };
    if (event.cookies.get("sessionId"))
    {
        user.isLoggedIn = true;
        user["username"] = event.cookies.get('username');
        user["roles"] = event.cookies.get('roles');
        user["_id"] = event.cookies.get('_id');
    }
    event.locals = { user };
    return await resolve(event);
}