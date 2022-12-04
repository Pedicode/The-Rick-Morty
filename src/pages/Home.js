import React from "react"
import ListCart from "../components/ListCart"
import { useGetListQuery } from "../redux/listSlice"
const Home = () => {
  const {
    data: listData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetListQuery()

  let content
  if (isLoading) {
    content = <p>Loading...</p>
    if (isError) {
      content = <p>{error?.data?.message}</p>
    }
  }
  if (isSuccess) {
    const { ids } = listData
    const RowContent = ids?.length
      ? ids.map((userId) => <ListCart key={userId} userId={userId} />)
      : null
    content = <>{RowContent}</>
  }

  return content
}

export default Home
