```
Backend
├─ .editorconfig
├─ .npmrc
├─ package.json
├─ pnpm-lock.yaml
├─ prisma
│  ├─ migrations
│  │  ├─ 20250308130544_init
│  │  │  └─ migration.sql
│  │  ├─ 20250309021014_init
│  │  │  └─ migration.sql
│  │  ├─ 20250309052814_init
│  │  │  └─ migration.sql
│  │  ├─ 20250309065420_init
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  ├─ schema.prisma
│  └─ seed.ts
├─ src
│  ├─ app.ts
│  ├─ application
│  │  ├─ dtos
│  │  │  ├─ accessToken.interface.dto.ts
│  │  │  ├─ auth.interface.dto.ts
│  │  │  ├─ product.interface.dto.ts
│  │  │  └─ refresToken.interface.dto.ts
│  │  ├─ services
│  │  │  ├─ auth.service.ts
│  │  │  └─ product.service.ts
│  │  └─ use-cases
│  │     ├─ accessToken
│  │     │  └─ createAccessToken.auth.use-case.ts
│  │     ├─ auth
│  │     │  ├─ auth-use-cases.ts
│  │     │  ├─ login.auth.use-case.ts
│  │     │  └─ register.auth.use-case.ts
│  │     ├─ product
│  │     │  ├─ create.product.use-case.ts
│  │     │  ├─ delete.product.use-case..ts
│  │     │  ├─ get.product.use-case.ts
│  │     │  ├─ getAll.product.use-case.ts
│  │     │  ├─ product.use-cases.ts
│  │     │  └─ update.product.use-case.ts
│  │     └─ refreshToken
│  │        └─ createRefreshToken.auth.use-case.ts
│  ├─ configurations
│  │  ├─ bcrypt.ts
│  │  ├─ customErrors.ts
│  │  ├─ envs.ts
│  │  └─ jwt.ts
│  ├─ domain
│  │  ├─ entities
│  │  │  ├─ accessToken.ts
│  │  │  ├─ auth.entity.ts
│  │  │  ├─ index.entity.ts
│  │  │  ├─ product.entity.ts
│  │  │  └─ refreshToken.entity.ts
│  │  └─ interfaces
│  │     ├─ accessToken.repository.interface.ts
│  │     ├─ auth.repository.interface.ts
│  │     ├─ product.repository.interface.ts
│  │     └─ refreshToken.repository.interface.ts
│  ├─ infrastructure
│  │  ├─ database
│  │  │  └─ prisma.service.ts
│  │  └─ repositories
│  │     ├─ accessToken.repository.ts
│  │     ├─ auth.repository.ts
│  │     ├─ product.repository.ts
│  │     └─ refreshToken.repository.ts
│  ├─ presentation
│  │  ├─ controllers
│  │  │  ├─ auth.controller.ts
│  │  │  └─ product.controller.ts
│  │  ├─ dtos
│  │  │  ├─ auth.dto.ts
│  │  │  └─ product.dto.ts
│  │  └─ routes
│  │     ├─ app.routes.ts
│  │     ├─ auth.routes.ts
│  │     └─ product.routes.ts
│  ├─ Server.ts
│  └─ shared
│     └─ middlewares
│        ├─ joi.middleware.ts
│        └─ token.middleware.ts
└─ tsconfig.json

```
```
