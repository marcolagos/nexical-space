'use client'

import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import siteMetadata from '@/data/siteMetadata'
import { GeneralIcon } from './icons'
import useSound from 'use-sound'

const SearchButton = () => {
  const [ThemeSound] = useSound('/static/sounds/open.mp3')

  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <SearchButtonWrapper aria-label="Search">
        <button
          className="block cursor-pointer"
          onClick={() => {
            ThemeSound()
          }}
        >
          <GeneralIcon kind={'search'} size={5} />
        </button>
      </SearchButtonWrapper>
    )
  }
}

export default SearchButton
