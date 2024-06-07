import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const myApi = createApi({
    reducerPath: "myApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://openlibrary.org/",
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: ({ limit, offset, search }) =>
                `search.json?title=${search}&offset=${offset}&limit=${limit}`,
        }),
    }),
});

export const { useGetBooksQuery } = myApi;
export { myApi };
