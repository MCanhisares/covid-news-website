import { Loading } from '../../../common/loading'
import React from 'react'
import { useNews } from '../../hooks/useNews'
import { Article } from '../../models/Article'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { NewsCard } from '../../components/NewsCard'
import { openNews } from '../../components/NewsCard/logic'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  margin: 20px;
`

export const NewsContainer = () => {
  const { category } = useParams<{ category: string }>()
  const { isLoading, isFetching, error, data } = useNews(category)

  if (isLoading || isFetching) {
    return <Loading />
  }

  if (error) {
    return <span>Ops, ocorreu um erro</span>
  }

  const renderItem = (article: Article) => {
    return (
      <Wrapper key={article.articleId}>
        <NewsCard article={article} openNews={openNews} />
      </Wrapper>
    )
  }

  return (
    <Container>{((data || []) as Article[]).map(a => renderItem(a))}</Container>
  )
}
