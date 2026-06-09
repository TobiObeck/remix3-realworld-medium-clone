import { createController } from 'remix/router'

import { assetServer } from '../assets.ts'
import { routes } from '../routes.ts'
import { HomePage as RemixDefaultScaffoldHomePage } from '../ui/scaffold-home-page.tsx'
import { LoginPage } from '../ui/LoginPage.tsx'
import { HomePage } from '../ui/HomePage.tsx'
import { RegisterPage } from '../ui/RegisterPage.tsx'
import { SettingsPage } from '../ui/SettingsPage.tsx'
import { ArticlePage } from '../ui/ArticlePage.tsx'

export default createController(routes, {
  actions: {
    async assets(context) {
      return (
        (await assetServer.fetch(context.request)) ?? new Response('Not Found', { status: 404 })
      )
    },
    home(context) {
      return context.render(<HomePage />)
    },
    login(context) {
      return context.render(<LoginPage />)
    },
    register(context) {
      return context.render(<RegisterPage />)
    },
    article(context) {
      console.log('context.params', context.params)
      return context.render(<ArticlePage slug={context.params.slug} />)
    },
    settings(context) {
      return context.render(<SettingsPage />)
    },
    zzRemixDefaultScaffoldPage(context) {
      return context.render(<RemixDefaultScaffoldHomePage />)
    },
  },
})
