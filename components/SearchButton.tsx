'use client'

import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import siteMetadata from '@/data/siteMetadata'
import { GeneralIcon } from './icons'
import useSound from 'use-sound'

const SearchButton = () => {
  const [ThemeSound] = useSound('/static/sounds/open.mp3')

  if (siteMetadata.search) {
    const SearchButtonWrapper = KBarButton

    return (
      <SearchButtonWrapper aria-label="Search">
        {/* Produces button nested button error */}
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
