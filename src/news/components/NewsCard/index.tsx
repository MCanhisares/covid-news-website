import React from 'react'
import styled from 'styled-components'
import { Article } from '../../models/Article'
import { format, parseISO } from 'date-fns'
import { Container } from 'react-bootstrap'
import ptBR from 'date-fns/locale/pt-BR'
import './index.css'

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

const Title = styled.h2`
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

  const openNews = (url?: string) => {
    if (!url) {
      return
    }
    const win = window.open(url, '_blank')
    if (win != null) {
      win.focus()
    }
  }

  return (
    <Container className="card-container" onClick={() => openNews(article.url)}>
      <Img src={article.urlToImage} />
      <ContentWrapper>
        {date && <Date>{format(date, 'dd MMMM yyyy', { locale: ptBR })}</Date>}
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
