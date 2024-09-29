import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:  '/nex-lib/',
  title: "Nex Lib",
  description: 'Next Frontend Tooling',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/nex-lib/logo.svg' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: "local",
    },
    outline: {
      level: [1, 3],
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '联系我', link: '/me/contact' }
    ],

    sidebar: [
      {
        text: '入门',
        items: [
          { text: '简介', link: '/guide/' },
          { text: '为什么选择 NexLib', link: '/guide/why' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/webkubor/midjourney' },
      { icon: 'discord', link: 'https://discord.com/invite/MEMGsRvf' },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present webkubor",
    },
  }
})
