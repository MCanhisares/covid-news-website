import { Loading } from '../../../common/loading'
import React, { useEffect, useState } from 'react'
import { useNews } from '../../hooks/useNews'
import { Article } from '../../models/Article'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { NewsCard } from '../../components/NewsCard'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  margin: 20px;
`

export const NewsContainer = () => {
  const { category } = useParams<{ category: string }>()
  const [lastArticleId, setLastArticleId] = useState<string | undefined>(
    undefined
  )
  const { isLoading, isFetching, error, data } = useNews(
    category,
    lastArticleId
  )

  useEffect(() => {}, [])

  if (isLoading || isFetching) {
    return <Loading />
  }

  if (error) {
    return <span>Ops, ocorreu um erro</span>
  }

  const renderItem = (article: Article) => {
    return (
      <Wrapper key={article.articleId}>
        <NewsCard article={article} />
      </Wrapper>
    )
  }

  return (
    <Container>{((data || []) as Article[]).map(a => renderItem(a))}</Container>
  )
}
