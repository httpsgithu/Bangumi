# API 层

## 两种请求方式

- **`fetchAPI()`** — JSON API 调用，自动附加 Authorization header，支持重试
- **`fetchHTML()`** — HTML 页面抓取，携带 cookies，支持代理，cheerio 解析

## API 常量位置

- REST API: `src/constants/api/index.ts`（`API_SUBJECT()`, `API_USER_INFO()` 等）
- HTML 页面: `src/constants/html/`
- CDN: `src/constants/cdn/`
- 第三方: MAL、AniDB、Pixiv、Anitabi
