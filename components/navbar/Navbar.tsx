import Link from "next/link"
import ActiveLink from "./ActiveLink"

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' }
]

export default function Navbar (): React.ReactElement {
  return (
    <nav className="w-auto flex px-4 py-2 bg-neutral-700 m-2 rounded-md">
      <Link href={'/'} className="flex items-center">
        🛖
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      <div className="flex gap-4">
        {navItems.map(navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}
      </div>
    </nav>
  )
}
