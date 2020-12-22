import React from 'react'
import styled from 'styled-components'
import { Article } from '../../models/Article'
import { NewsCard } from '../NewsCard'
import { openNews } from '../NewsCard/logic'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  margin: 20px;
`

type Props = {
  articles: Article[]
}
export const NewsList: React.FC<Props> = ({ articles }) => {
  return <Container> {articles.map(a => renderItem(a))}</Container>
}

export const renderItem = (article: Article) => {
  return (
    <Wrapper key={article.articleId}>
      <NewsCard article={article} openNews={openNews} />
    </Wrapper>
  )
}