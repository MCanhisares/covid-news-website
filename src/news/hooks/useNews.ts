import { useQuery } from 'react-query'
import firebase from 'firebase'

export const useNews = () => {
  const db = firebase.firestore()
  const firebaseQuery = db
    .collection('articles')
    .orderBy('publishedAt', 'desc')
    .get()
  const { data: rawData, isLoading, error } = useQuery(
    'articles',
    () => firebaseQuery
  )

  const data = rawData?.docs.map(d => {
    return d.data()
  })

  return {
    data,
    isLoading,
    error,
  }
}
