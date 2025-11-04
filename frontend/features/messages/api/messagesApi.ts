import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {ApiResponse} from "@/types/apiResponse";
import type {Message} from "@/features/messages/types/message";


export const messagesApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    tagTypes: ['Messages'],
    endpoints: (builder) => ({
        getMessages: builder.query<Message[], void>({
            query: () => '/messages',
            transformResponse: (response: ApiResponse<Message[]>) => response.data ?? [],
            providesTags: ['Messages'],
        }),
        addMessage: builder.mutation<Message, { content: string }>({
            query: (body) => ({
                url: '/messages',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Messages'],
        }),
        updateMessage: builder.mutation<Message, { id: number; content: string }>({
            query: ({id, ...body}) => ({
                url: `/messages/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Messages'],
        }),
        deleteMessage: builder.mutation<Message, { id: number }>({
            query: ({id}) => ({
                url: `/messages/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Messages'],
        }),
    }),
})

export const {
    useGetMessagesQuery,
    useAddMessageMutation,
    useUpdateMessageMutation,
    useDeleteMessageMutation,
} = messagesApi