import { createDraftSafeSelector, createEntityAdapter } from "@reduxjs/toolkit"
import { apiSlice } from "../app/api/apiSlice"

const listAdapter = createEntityAdapter({})

const initialState = listAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getList: builder.query({
      query: () => "/character/1,2",
      transformResponse: (response) => {
        return listAdapter.setAll(initialState, response)
      },
      providesTags: (result, error, arg) => [
        { type: "IntroduceList", id: "LIST" },
        ...result.ids.map((id) => ({ type: "IntroduceList", id })),
      ],
    }),
  }),
})

export const { useGetListQuery } = extendedApiSlice
//Return the query result object
export const selectListResult = extendedApiSlice.endpoints.getList.select()

//Creates memoized selector
const selectListData = createDraftSafeSelector(
  selectListResult,
  (listResult) => listResult.data
)

export const {
  selectAll: selectAllList,
  selectById: selectListById,
  selectIds: selectListIds,
} = listAdapter.getSelectors((state) => selectListData(state) ?? initialState)
