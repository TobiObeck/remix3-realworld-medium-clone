import type { Handle, RemixNode } from 'remix/ui'

export interface DocumentProps {
  children?: RemixNode
  head?: RemixNode
  title?: string
}

export function BaseHead(handle: Handle<DocumentProps>) {
  return () => {
    let { head, title = 'Conduit' } = handle.props

    return (
      <head>
        <meta charset="utf-8" />
        <title>{title}</title>
        {/* <!-- Icons: the ion-* classes used in the templates below (legacy Ionicons v2) --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
        />
        {/* <!-- Fonts the theme uses --> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700|Lora:400,700"
        />
        {/* <!-- The shared Conduit theme (serve styles.css from your own app) --> */}
        <link rel="stylesheet" href="/styles.css" />
        {head}
      </head>
    )
  }
}
