import Match from 'preact-router/match'

export const NavLink = ({
  activeClassName,
  class: c,
  path,
  partial,
  ...props
}) => (
  <Match path={path}>
    {({ matches, path: p, url }) => (
      <a
        {...props}
        class={
          matches ||
          (partial && p.startsWith(partial)) ||
          path.toLowerCase() === url.toLowerCase()
            ? ` ${c} ${activeClassName}`
            : c
        }
      />
    )}
  </Match>
)
