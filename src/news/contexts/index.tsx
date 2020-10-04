import React, { createContext, useState } from 'react'
import { Article } from '../models/Article'

export const NewsContext = createContext({})

export const NewsContextProvider = (props: any) => {
  const [data, setData] = useState<Article[]>([])

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  )
}
