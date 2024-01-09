import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

export async function load({ parent }) {
    const { utilisateur } = await parent();
    if (utilisateur) throw redirect(307, '/');
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const body = await api.post('users/login', {
            username: data.get('username'),
            password: data.get('password')
        });

        if (body.errors) {
            return fail(401, body);
        }

        cookies.set('token', body.jwt, { path: '/' });

        throw redirect(307, "/location");
    }
};
