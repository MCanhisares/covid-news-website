import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Article } from '../models/Article'

export const NewsContext = createContext({})

export const NewsContextProvider = (props: any) => {
  const [data, setData] = useState<Article[]>([])
  const apiKey = 'b6a930280dcb49759db636d0b87d5612'

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=rich&country=br&from=2020-07-19&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then(response => setData(response.data.articles))
      .catch(error => console.log(error))
  }, [])

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  )
}
