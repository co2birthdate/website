import clsx from 'clsx'
import MuiLink from '@mui/material/Link'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef } from 'react'

const NextComposed = forwardRef(function NextComposed(props, ref) {
  const { as, href, ...other } = props

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  )
})

const Link = ({
  href,
  activeClassName = 'active',
  className: classNameProps,
  innerRef,
  naked,
  ...otherProps
}) => {
  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, { [activeClassName]: router.pathname === pathname && activeClassName })

  return naked ? (
    <NextComposed
      className={className}
      ref={innerRef}
      href={href}
      {...otherProps}
    />
  ) : (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href}
      {...otherProps}
    />
  )
}

export default forwardRef((props, ref) => <Link {...props} innerRef={ref} />)
