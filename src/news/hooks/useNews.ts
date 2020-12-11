import { usePaginatedQuery } from 'react-query'
import firebase from 'firebase'
import { useState } from 'react'

export const useNews = (category?: string, startAfterId?: string) => {
  // const db = firebase.firestore()
  // let firebaseQuery = db
  //   .collection('articles')
  //   .orderBy('publishedAt', 'desc')
  //   .limit(25)

  // if (qCategory) {
  //   firebaseQuery = firebaseQuery.where('category', '==', category)
  // }

  // if (qStartAfterId) {
  //   firebaseQuery = firebaseQuery.startAfter(qStartAfterId)
  // }
  // const query = firebaseQuery.get()

  // const {
  //   resolvedData: rawData,
  //   isLoading,
  //   error,
  //   isFetching,
  //   fetchMore,
  // } = usePaginatedQuery(['articles', qStartAfterId], () => query)

  // const data = rawData?.docs.map(d => {
  //   return d.data()
  // })

  // return {
  //   setCategory: setQCategory,
  //   setStartAfterId: setQStartAfterId,
  //   data,
  //   isLoading,
  //   isFetching,
  //   error,
  //   fetchMore,
  // }
}
