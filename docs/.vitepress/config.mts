import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:  '/nex-lib/',
  title: " nex-lib Docs",
  description: "前端业务中常用的业务工具库",
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
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
          { text: '简介', link: '/introduce' },
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
