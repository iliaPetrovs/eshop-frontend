import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import style from './Breadcrumbs.module.css'
import classNames from 'classnames'

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase()
}

const Breadcrumbs = () => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState(null)

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/')
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav aria-label="breadcrumbs" className={style.breadcrumbs}>
      <ol className={classNames(['breadcrumb', style.breadcrumb])}>
        <li className={style.breadcrumbItem}>
          <a href="/">HOME</a>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li key={breadcrumb.href} className={style.breadcrumbItem}>
              <Link href={breadcrumb.href}>
                {convertBreadcrumb(breadcrumb.breadcrumb)}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
