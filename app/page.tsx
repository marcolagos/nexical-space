import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allReferences } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allReferences)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
