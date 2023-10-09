import { Hamburger, Moon, Search, Sun } from './general-icons'
import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  Mastodon,
  Folder,
} from './social-icons'

const socialIconComponents = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: Mastodon,
  folder: Folder,
}

type SocialIconProps = {
  kind: keyof typeof socialIconComponents
  href: string | undefined
  size?: number
}

export const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = socialIconComponents[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-900 dark:text-gray-200 h-${size} w-${size} hover:scale-105`}
      />
    </a>
  )
}

const generalIconComponents = {
  hamburger: Hamburger,
  moon: Moon,
  search: Search,
  sun: Sun,
}

type GeneralIconProps = {
  kind: keyof typeof generalIconComponents
  size?: number
}

export const GeneralIcon = ({ kind, size = 8 }: GeneralIconProps) => {
  const GeneralSvg = generalIconComponents[kind]

  return (
    <GeneralSvg
      className={`text-gray-900 dark:text-gray-200 h-${size} w-${size} hover:scale-101`}
    />
  )
}
