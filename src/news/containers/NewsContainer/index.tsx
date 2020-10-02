import { useNews } from '../../hooks/useNews'
import { Loading } from '../../../common/loading'
import React from 'react'
import { NewsList } from '../../components/NewsList'

export const NewsContainer = () => {
  const { isLoading, isError, data } = useNews()

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <span>Ops, ocorreu um erro</span>
  }

  return <NewsList articles={data?.data.articles || []} />
}
