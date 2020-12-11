import { usePaginatedQuery } from 'react-query'
import firebase from 'firebase'

export const useNews = (category?: string, startAfterId?: string) => {
  const db = firebase.firestore()
  let firebaseQuery = db
    .collection('articles')
    .orderBy('publishedAt', 'desc')
    .limit(25)

  if (category) {
    firebaseQuery = firebaseQuery.where('category', '==', category)
  }

  if (startAfterId) {
    firebaseQuery = firebaseQuery.startAfter(startAfterId)
  }
  const query = firebaseQuery.get()

  const {
    resolvedData: rawData,
    isLoading,
    error,
    isFetching,
    fetchMore,
  } = usePaginatedQuery('articles', () => query)

  const data = rawData?.docs.map(d => {
    return d.data()
  })

  return {
    data,
    isLoading,
    isFetching,
    error,
    fetchMore,
  }
}
