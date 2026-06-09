import type { Handle, RemixNode } from 'remix/ui'
import { BaseHead } from './BaseDocument.tsx'

export interface LayoutProps {
  title?: string
  head?: RemixNode
  children?: RemixNode
}

export function Layout(handle: Handle<LayoutProps>) {
  const isUserAuthenticated = false // TODO implement authentication

  let { children, head } = handle.props

  return () => {
    return (
      <>
        <BaseHead head={head} />
        {!isUserAuthenticated ? <UnAuthenticatedLayout /> : <AuthenticatedLayout />}
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

function UnAuthenticatedLayout() {
  return () => {
    return (
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              {/* <!-- Add "active" class when you're on that page" --> */}
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Sign in
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

function AuthenticatedLayout() {
  return () => {
    return (
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              {/* <!-- Add "active" class when you're on that page" --> */}
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/editor">
                {' '}
                <i class="ion-compose"></i>&nbsp;New Article{' '}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/settings">
                {' '}
                <i class="ion-gear-a"></i>&nbsp;Settings{' '}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile/eric-simons">
                <img src="" class="user-pic" />
                Eric Simons
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

function Footer() {
  return () => {
    return (
      <footer>
        <div class="container">
          <a href="/" class="logo-font">
            conduit
          </a>
          <span class="attribution">
            An interactive learning project. Code &amp; design licensed under MIT.
          </span>
        </div>
      </footer>
    )
  }
}
