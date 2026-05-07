# MobX Store 规范

## Store 继承链

```
State → Computed → Fetch → Action
```

- **State**（extends `@utils/store`）— observable state、init()、save()、readStorage()
- **Computed**（extends State）— @computed 派生数据
- **Fetch**（extends Computed）— API 请求 → setState() + save()
- **Action**（extends Fetch）— 业务逻辑

## Store 文件拆分

每个 store 目录包含：`index.ts`、`state.ts`、`computed.ts`、`fetch.ts`、`action.ts`、`common.ts`（解析器）、`init.ts`（初始状态）、`types.ts`

## 18 个 Domain Store

| Store | 职责 |
|-------|------|
| `calendarStore` | 放送日历 |
| `collectionStore` | 用户收藏 |
| `discoveryStore` | 发现/搜索 |
| `monoStore` | 人物/制作人员 |
| `otaStore` | OTA 数据 |
| `rakuenStore` | 超展开（论坛） |
| `searchStore` | 搜索 |
| `smbStore` | SMB 网络文件 |
| `subjectStore` | 条目（动画/书籍/游戏） |
| `systemStore` | 系统设置 |
| `tagStore` | 标签 |
| `themeStore`（别名 `_`）| 主题/样式 |
| `timelineStore` | 时间线 |
| `tinygrailStore` | 小圣杯（股票游戏） |
| `uiStore` | UI 状态 |
| `userStore` | 用户认证 |
| `usersStore` | 其他用户信息 |

全局初始化：`src/stores/global.ts` → `GlobalStores.init()`
