'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ActiveLink ({
  path, text
}: ActiveLinkProps): React.ReactElement {
  const pathName = usePathname()

  return (
    <Link className={`hover:underline hover:text-blue-600 transition-colors ${path === pathName && 'text-blue-600'}`} href={path}>
      {text}
    </Link>
  )
}

interface ActiveLinkProps {
  path: string
  text: string
}
