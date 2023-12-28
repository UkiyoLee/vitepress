import { type DefaultTheme } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      link: '/zh-CN/guide/what-is-vitepress',
      activeMatch: '/guide/'
    },
    {
      text: '参考',
      link: '/zh-CN/reference/site-config',
      activeMatch: '/reference/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        },
        {
          text: '贡献代码',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

export function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '介绍',
      collapsed: false,
      items: [
        { text: '什么是 VitePress?', link: 'what-is-vitepress' },
        { text: '开始', link: 'getting-started' },
        { text: '路由', link: 'routing' },
        { text: '部署', link: 'deploy' }
      ]
    },
    {
      text: '撰写',
      collapsed: false,
      items: [
        { text: 'Markdown 扩展', link: 'markdown' },
        { text: '资源管理', link: 'asset-handling' },
        { text: 'Frontmatter', link: 'frontmatter' },
        { text: '在 Markdown 中使用 Vue', link: 'using-vue' },
        { text: '国际化', link: 'i18n' }
      ]
    },
    {
      text: '定制化',
      collapsed: false,
      items: [
        { text: '使用定制化主题', link: 'custom-theme' },
        { text: '继承默认主题', link: 'extending-default-theme' },
        { text: '构建时数据加载', link: 'data-loading' },
        { text: 'SSR 兼容性', link: 'ssr-compat' },
        { text: '连接至 CMS', link: 'cms' }
      ]
    },
    {
      text: '实验性',
      collapsed: false,
      items: [
        { text: 'MPA 模式', link: 'mpa-mode' },
        { text: '网站导航生成', link: 'sitemap-generation' }
      ]
    },
    { text: '配置 & API 参考', base: '/reference/', link: 'site-config' }
  ]
}

export function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '参考',
      items: [
        { text: '网站配置', link: 'site-config' },
        { text: 'Frontmatter 配置', link: 'frontmatter-config' },
        { text: '命令行工具 (CLI)', link: 'cli' },
        {
          text: '默认主题',
          base: '/reference/default-theme-',
          items: [
            { text: '概览 Overview', link: 'config' },
            { text: '导航栏 Nav', link: 'nav' },
            { text: '边栏 Sidebar', link: 'sidebar' },
            { text: '首页 Home Page', link: 'home-page' },
            { text: '页脚 Footer', link: 'footer' },
            { text: '布局 Layout', link: 'layout' },
            { text: '徽章 Badge', link: 'badge' },
            { text: '组合页 Team Page', link: 'team-page' },
            { text: '上/下一页 Prev / Next Links', link: 'prev-next-links' },
            { text: '编辑链接 Edit Link', link: 'edit-link' },
            { text: '最近更新 Last Updated', link: 'last-updated' },
            { text: '搜索框 Search', link: 'search' },
            { text: '碳广告 Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}
