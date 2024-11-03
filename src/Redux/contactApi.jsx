import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://backend' }), 
    endpoints: (builder) => ({
        sendContactForm: builder.mutation({
            query: (formData) => ({
                url: '/contact.php', 
                method: 'POST',
                body: formData,
            }),
        }),
    }),
});

export const { useSendContactFormMutation } = contactApi;
