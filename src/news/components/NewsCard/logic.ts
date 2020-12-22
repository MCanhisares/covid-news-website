export const openNews = (url?: string) => {
  if (!url) {
    return
  }
  const win = window.open(url, '_blank')
  win?.focus()
}
