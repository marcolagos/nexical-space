import { rewriteUrl } from '@netlify/functions'

exports.handler = async (event) => {
  const { request } = event

  request.url = rewriteUrl(request.url, {
    base: '/',
  })

  return await fetch(request)
}
