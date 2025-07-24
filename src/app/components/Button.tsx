'use client'

import Link from 'next/link'

interface ButtonProps {
  href: string
  label: string
  type?: 'primary' | 'secondary'
}

export default function Button({ href, label, type = 'primary' }: ButtonProps) {
  const base = 'inline-block px-6 py-2 font-semibold rounded-md text-white transition-all'
  const styles =
    type === 'primary'
      ? `${base} bg-blue-600 hover:bg-blue-700`
      : `${base} bg-gray-600 hover:bg-gray-700`

  return (
    <Link href={href} className={styles}>
      {label}
    </Link>
  )
}

