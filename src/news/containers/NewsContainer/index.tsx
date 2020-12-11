import { Loading } from '../../../common/loading'
import React, { useEffect, useState } from 'react'
import { useNews } from '../../hooks/useNews'
import { Article } from '../../models/Article'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { NewsCard } from '../../components/NewsCard'
import { useInfiniteQuery, usePaginatedQuery } from 'react-query'
import firebase from 'firebase'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  margin: 20px;
`

export const NewsContainer = () => {
  const { category } = useParams<{ category: string }>()

  const [loading, setLoading] = useState<boolean>(false)
  const [fetchingMore, setFetchingMore] = useState<boolean>(false)
  const [data, setData] = useState<firebase.firestore.DocumentData[]>([])
  const [lastDocument, setLastDocument] = useState<any>(undefined)

  const getQuery = (category: string, lastDocument: any) => {
    const db = firebase.firestore()
    let firebaseQuery = db
      .collection('articles')
      .orderBy('publishedAt', 'desc')
      .limit(25)

    if (category) {
      firebaseQuery = firebaseQuery.where('category', '==', category)
    }

    if (lastDocument) {
      firebaseQuery = firebaseQuery.startAfter(lastDocument)
    }
    return firebaseQuery.get()
  }

  const query = async (category: string) => {
    console.log('emtre=i')
    data.length > 0 ? setFetchingMore(true) : setLoading(true)
    const result = await getQuery(category, lastDocument)
    const articles = result.docs.map(d => d.data())
    setData(data.concat(articles))
    setLastDocument(result.docs[result.docs.length - 1])
    setLoading(false)
    setFetchingMore(false)
  }

  useEffect(() => {
    query(category)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(), {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', () => handleScroll())
    }
  }, [])

  const renderItem = (article: Article) => {
    return (
      <Wrapper key={article.articleId}>
        <NewsCard article={article} />
      </Wrapper>
    )
  }

<<<<<<< HEAD
=======
  const handleScroll = async () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight

    if (bottom) {
      await query(category)
    }
  }

  if (loading) {
    return <Loading />
  }

  if (!data) {
    return null
  }

>>>>>>> Trying to add pagination
  return (
    <div>
      <span onClick={() => query(category)}> MUITO BOMMM </span>
      <Container>{data.map(a => renderItem(a))}</Container>
    </div>
  )
}
