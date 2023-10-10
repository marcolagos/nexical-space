import siteMetadata from '@/data/siteMetadata'
import { headerNavLinks } from '@/data/navigationLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 125"
              enable-background="new 0 0 100 100"
              fill="currentColor"
              className="text-blue-600 w-16 h-16 dark:text-blue-600"
            >
              <path d="M38.6,95h22.8V72.2h-6V89H44.6V72.2H27.8V61.4h16.8V44.6h16.8V27.8h16.8V5H55.4v6h16.8v10.8H55.4v16.8H44.6V21.8H21.8v22.8  h16.8v10.8H21.8v22.8h16.8V95z M27.8,38.6V27.8h10.8v10.8H27.8z" />
            </svg>
            <div className="text-2xl font-semibold whitespace-nowrap	">
              {siteMetadata.headerTitle}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100 hover:scale-101"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
