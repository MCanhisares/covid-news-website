import { Loading } from '../../../common/loading'
import React from 'react'
import { NewsList } from '../../components/NewsList'
import { useNews } from '../../hooks/useNews'

export const NewsContainer = () => {
  const { isLoading, error, data } = useNews()

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <span>Ops, ocorreu um erro</span>
  }

  return <NewsList articles={data || []} />
}
