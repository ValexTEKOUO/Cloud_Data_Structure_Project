import * as api from '$lib/api';
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params, cookies }) {

        let token = cookies.get('token', { path: '/' });

        if (!token || token == "null") throw redirect(307, "/login")

        const [locations, user] = await Promise.all([
                api.get(`locations`, token),
                api.get('users/me',token)
            ]);
            return {
                roger: locations,
                token,
                user
            };
}

export const actions = {
    createLocation: async ({ cookies, params, request }) => {
        const data = await request.formData();

        const location = {
            filmName: data.get('filmName'),
            filmType: data.get('filmType'),
            filmProducerName: data.get('filmProducerName'),
            endDate: new Date(data.get('endDate')),
            district: data.get('district'),
            geolocation:{
                coordinates: [parseFloat(data.get('lattitude')),parseFloat(data.get('longitude'))],
                type: "Point"
            },
            sourceLocationId: data.get('sourceLocationId'),
            filmDirectorName: data.get('filmDirectorName'),
            address: data.get('address'),
            startDate: new Date(data.get('startDate')),
            year: data.get('year'),
        };

        (await api.post(`locations/`,location,cookies.get('token')));
    },

    deleteLocation: async ({ cookies, url }) => {
        const id_ = url.searchParams.get('id');
        await api.del(`locations/${id_}`, cookies.get('token'));
    },

    editLocation: async ({ cookies,url,request }) => {

        const id = url.searchParams.get('id');
        const data = await request.formData();

        const location = {
            filmName: data.get('filmName'),
            filmType: data.get('filmType'),
            filmProducerName: data.get('filmProducerName'),
            endDate: new Date(data.get('endDate')),
            district: data.get('district'),
            geolocation:{
                coordinates: [parseFloat(data.get('lattitude')),parseFloat(data.get('longitude'))],
                type: "Point"
            },
            sourceLocationId: data.get('sourceLocationId'),
            filmDirectorName: data.get('filmDirectorName'),
            address: data.get('address'),
            startDate: new Date(data.get('startDate')),
            year: data.get('year'),
        };

        await api.patch(`locations/${id}`, location, cookies.get('token'));
    },
};