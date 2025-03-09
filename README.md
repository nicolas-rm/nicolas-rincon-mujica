# Clean Architecture: Un Enfoque de Diseño de Software

## Introducción

Clean Architecture es un enfoque de diseño de software que busca crear sistemas mantenibles, escalables y comprensibles mediante la separación de preocupaciones y la creación de capas de abstracción. Este enfoque permite construir software de alta calidad que sea fácil de entender, mantener y evolucionar.

## Principios Fundamentales

### 1. Separación de Preocupaciones

Uno de los principios clave de la Arquitectura Limpia es la separación entre la lógica de negocio y la infraestructura técnica. Esto implica que el código relacionado con la base de datos, la interfaz de usuario y otros detalles técnicos no debe estar mezclado con la lógica de negocio, lo que facilita la reutilización y el mantenimiento del software.

### 2. Capas de Abstracción

Clean Architecture está diseñada en torno a capas de abstracción claramente definidas. Cada capa tiene una responsabilidad específica y está diseñada para ser independiente de las demás capas. Las capas internas contienen la lógica de negocio, mientras que las capas externas manejan la infraestructura técnica. Esto permite que una capa pueda modificarse o reemplazarse sin afectar a las demás.

### 3. Principios SOLID

Clean Architecture se basa en los principios SOLID, que son fundamentales para lograr una estructura clara y mantenible:

-   **Responsabilidad Única (SRP)**: Cada clase o módulo debe tener una única razón para cambiar.
-   **Abierto/Cerrado (OCP)**: El software debe estar abierto a extensiones, pero cerrado a modificaciones.
-   **Sustitución de Liskov (LSP)**: Los objetos de una subclase deben poder sustituir a los de su superclase sin afectar la funcionalidad.
-   **Segregación de Interfaces (ISP)**: Se deben crear interfaces específicas para cada caso de uso, en lugar de interfaces generales.
-   **Inversión de Dependencias (DIP)**: Las dependencias deben dirigirse hacia abstracciones y no hacia implementaciones concretas.

### 4. Uso de Patrones de Diseño

Para lograr una implementación efectiva de la Arquitectura Limpia, se utilizan diversos patrones de diseño, entre ellos:

-   **Patrón de Capas**: Divide el sistema en diferentes capas con responsabilidades bien definidas.
-   **Patrón de Inversión de Dependencias**: Garantiza que los módulos de alto nivel no dependan de los de bajo nivel, sino de abstracciones.
-   **Patrón de Inyección de Dependencias**: Facilita la gestión de dependencias a través de la configuración y no de la creación directa.

# Backend con Express, Node.js y Prisma ORM

## Descripción

Este es un backend desarrollado con Node.js, Express y Prisma ORM para gestionar la base de datos de manera eficiente y escalable.

## Requisitos Previos

Antes de instalar y ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

-   [Node.js](https://nodejs.org/) (versión recomendada: 16 o superior)
-   [PostgreSQL](https://www.postgresql.org/) u otro sistema de base de datos compatible con Prisma
-   [Prisma CLI](https://www.prisma.io/docs/concepts/components/prisma-cli)
-   [pnpm](https://pnpm.io/es/installation)

## Instalación

1.  Clona este repositorio:

    ```sh
    git clone https://github.com/nicolas-rm/nicolas-rincon-mujica.git
    cd nicolas-rincon-mujica

    ```

2.  Instala las dependencias del proyecto:

    ```sh
    pnpm install

    ```

3.  Configura las variables de entorno:
    -   Crea un archivo `.env` en la raíz del proyecto y agrega lo siguiente:

        ```env
        DATABASE_URL="mysql://usuario:contraseña@localhost:3306/tu_basededatos?schema=public"
        PORT=3000
        JWT_SECRET="mysecretkey"

        ```

## Configuración de la Base de Datos

1.  Inicializa Prisma:


    ```sh
    npx prisma init

    ```

2.  Define tu esquema en `prisma/schema.prisma`.
3.  Ejecuta la migración para aplicar los cambios en la base de datos:


    ```sh
    pnpx prisma migrate dev --name init

    ```

4.  (Opcional) Genera el cliente de Prisma:


    ```sh
    pnpx prisma migrate dev

    ```

5.  (Opcional) Ejecuta el seeding de la base de datos:


    ```sh
    ts-node prisma/seed.ts

    ```

6.  El proyecto cuenta con la mayoria de los archivos y comandos correspondientes ya generados, algunos comandos pueden ser utilizandos directamente con npm, pnpm, yarn.... uno de los comandos mas importantes para sincronizar la base de datos es

    `pnpm migrate o npm run migrate`

## Estructura del Proyecto

```
Backend
├─ .editorconfig
├─ .npmrc
├─ package.json
├─ pnpm-lock.yaml
├─ prisma
│  ├─ migrations
│  │  ├─ {varias carpetas de migraciones}
│  │  └─ migration_lock.toml
│  ├─ schema.prisma
│  └─ seed.ts
├─ src
│  ├─ app.ts
│  ├─ application
│  │  ├─ dtos
│  │  ├─ services
│  │  └─ use-cases
│  ├─ configurations
│  ├─ domain
│  │  ├─ entities
│  │  └─ interfaces
│  ├─ infrastructure
│  │  ├─ database
│  │  └─ repositories
│  ├─ presentation
│  │  ├─ controllers
│  │  ├─ dtos
│  │  └─ routes
│  ├─ Server.ts
│  └─ shared
│     └─ middlewares
└─ tsconfig.json

```

## Levantar el Servidor

Para iniciar el servidor en modo desarrollo, ejecuta:

```sh
pnpm run dev

```

Para compilar el código fuente:

```sh
pnpm run build

```

Para ejecutar en modo producción:

```sh
pnpm run start

```

Para servir la aplicación:

```sh
pnpm run serve

```

## Endpoints

Puedes probar los endpoints usando herramientas como Postman o cURL. `localhost:xxxx/api/xxxxx`.

## Referencias para la creacion del proyecto

https://medium.com/@aviralj02/setting-up-express-with-typescript-adding-prisma-for-database-operations-b7ccea552588

https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln

https://github.com/nicolas-rm/backend-express-mysql-base/tree/master/src

https://github.com/nicolas-rm/NodeJS-Clean-Architecture

https://github.com/nicolas-rm/SocketIO-Backend

https://www.npmjs.com/package/jsonwebtoken

https://www.youtube.com/watch?v=ESShhQmBjjY&t=830s

https://www.youtube.com/watch?v=v_6dRz17pUg

https://bluuweb.dev/node-ts/prisma.html

https://platzi.com/clases/2485-backend-nodejs/41760-validacion-de-datos-con-joi/

https://www.npmjs.com/package/moment

https://joi.dev/api/?v=17.13.3

https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

https://domainlogic.io/clean-architecture-que-es-importancia-y-beneficios-para-tu-empresa/#:~:text=Clean%20Architecture%20es%20una%20metodolog%C3%ADa,en%20sus%20sistemas%20de%20software.

https://stackedit.io/

### Son algunas referencias de las cuales se utilizaron de consulta para la creacion y adaptacion de la misma.
