// @ts-nocheck
import { PUBLIC_SUPABASE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createServerClient } from '@supabase/ssr';
import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
    event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY, {
        cookies: {
            get: (key) => event.cookies.get(key),
            set: (key, value, options) => {
                event.cookies.set(key, value, options);
            },
            remove: (key, options) => {
                event.cookies.remove(key, options);
            },
        },
    });

    const { data: { session } } = await event.locals.supabase.auth.getSession();

    if (!session && event.url.pathname.startsWith('/home')) {
        throw redirect(302, '/');
    }

    return resolve(event);
};