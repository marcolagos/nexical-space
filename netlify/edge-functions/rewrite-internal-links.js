const { rewriteUrl } = require('@netlify/functions')

exports.handler = async (event) => {
  const { request } = event

  request.url = rewriteUrl(request.url, {
    base: '/',
  })

  return await fetch(request)
}
