import React from 'react'
import { render } from '@testing-library/react'
import { NewsCard } from '../news/components/NewsCard'
import { Article } from '../news/models/Article'

test('renders News Card', () => {
  const article: Article = {
    articleId:
      '33297aec44982f83431d38d627e2b6490ae09a53d1b4a50de85b5c3280a29e0d',
    author: 'UOL',
    description:
      'O país registrou nas últimas 24 horas 594 novas mortes pelo novo coronavírus, totalizando 146.011 óbitos desde o começo da pandemia pela covid-19. Os dados são do consórcio de imprensa do qual o UOL faz parte.A atualização, no entanto, não conta com infor',
    publishedAt: '2020-10-03T23:20:20Z',
    title:
      'Brasil tem 594 novas mortes por covid-19 e ultrapassa 146 mil óbitos - UOL Notícias',
    url:
      'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/10/03/covid-casos-mortes-brasil-3-de-outubro.htm',
    urlToImage:
      'https://conteudo.imguol.com.br/c/entretenimento/32/2020/10/01/files-in-this-file-aerial-photo-taken-on-june-2-2020-shows-a-gravedigger-standing-at-the-nossa-senhora-aparecida-cemetery-where-covid-19-victims-are-buried-daily-in-the-neighbourhood-of-1601596476977_v2_615x300.jpg',
  }
  const component = render(<NewsCard article={article} />)

  expect(component).toBeTruthy()
})
