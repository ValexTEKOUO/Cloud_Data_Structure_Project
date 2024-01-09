import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export const load = (async ({ locals }) => {
    if (locals.user) throw redirect(307, '/');
})

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const user = {
            username: data.get('username'),
            password: data.get('password')
        };

        const body = await api.post('users/register',  user );

        if (body.errors) {
            return fail(401, body);
        }


        throw redirect(307, '/login');
    }
};
