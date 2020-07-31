# MÓDULOS PUBLICOS

**(SIN AUTENTIFICACIÓN)** Esta carpeta contiene todos los módulos o componentes públicos que podrán ser accedidos sin ningún tipo de privilegios tales como el login, páginas 404, 500, etc.
Contiene más que todo las zonas públicas de la aplicación:
Landing page, registro de usuarios si se requiere, páginas informativas, formulario de contacto, formulario de recuperación de contraseña, etc.

Además deben incluir recursos que solo sean públicos dentro de la aplicación.

## Estructura del modulo Public

```console
public
├── components
├── containers
│   ├── index.ts
│   ├── layout
│   │   ├── layout.component.html
│   │   ├── layout.component.spec.ts
│   │   └── layout.component.ts
│   └── login
│       ├── login.component.html
│       ├── login.component.scss
│       ├── login.component.spec.ts
│       └── login.component.ts
├── models
│   ├── auth.model.ts
│   ├── index.ts
│   └── login-form.model.ts
├── public.module.ts
├── public-routing.module.ts
└── readme.md
```

**Nota:** Todos los componentes relacionados con las páginas publicas de la aplcación deben ser creados en la carpeta containers
