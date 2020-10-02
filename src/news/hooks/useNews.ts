import axios from 'axios'
import { useQuery } from 'react-query'
export const useNews = () => {
  const apiKey = 'b6a930280dcb49759db636d0b87d5612'

  const fetchNews = axios.get(
    `http://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=${apiKey}`
  )

  return useQuery('news', () => fetchNews)
}
