import React from 'react'
import styled from 'styled-components'
import { Article } from '../../models/Article'
import { format, parseISO } from 'date-fns'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 200px;
`

const Img = styled.img`
  width: 30%;
  object-fit: cover;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
const Date = styled.p`
  margin-bottom: 4px;
  color: #738a94;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`

const Title = styled.h1`
  color: black;
`

const Description = styled.p``

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Tag = styled.p`
  color: #26a8f4;
  text-decoration: none;
  background-color: transparent;
`

type Props = {
  article: Article
}

export const NewsCard: React.FC<Props> = ({ article }) => {
  const date = article.publishedAt && parseISO(article.publishedAt)
  return (
    <Container>
      <Img src={article.urlToImage} />
      <ContentWrapper>
        {date && <Date>{format(date, 'dd MMMM yyyy')}</Date>}
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>

        {article.tags && (
          <TagsWrapper>
            {article.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsWrapper>
        )}
      </ContentWrapper>
    </Container>
  )
}
