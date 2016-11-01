# Bootstrapping

    ng new --routing=true --style=scss bb-demo-sample

- Crea estructura básica + ejecuta `npm install`.
- VER: `package.json`.
- VER: `angular-cli.json`.
  - Cómo añadir `bootstrap`:
    - npm install --save-dev bootstrap.
    - Añadir a `angular-cli.json` en `styles` (igual para JS).
- VER: `environments.js`.
- VER: `main.ts` e `index.html`: `<app-root>...</app-root>`.

# Modules

- VER: `app.module.ts`. Explicar cada atributo.
- VER: `github-client.module.ts`. Autocontenido.

# Components

- VER: `route-not-found.component.ts`.
  - Inline template.
  - `constructor` con dependency injection.
  - Nunca instanciamos un componente/módulo con `new XComponent(...)`.
- VER: `app.component.ts`.
  - Template by url.
  - SCSS vs. CSS.
  - Components have lifecycle. `OnInit` vs. `constructor`.
  - Tiene un `<router-outlet></router-outlet>``
- VER: `enter-username-component.ts`.
  - V --> C binding: (ngSubmit).
  - V <-- C binding: [disabled].
  - V <-> C binding: [(ngModel)].

# Router

- VER: `app-routing.module.ts`.
  - Routes asociadas a un componente.
  - Jerarquía de rutas.
  - Rutas parametrizables.
  - `<router-outlet>` (con nombres para varias opciones).
- VER: `enter-username.component.ts`.
  - Cómo navego a con el click del botón.
- VER: `route-not-found.component.ts`. Cómo coge la url del injected activated route.

# Pipes

- VER: `app.component.ts`. ng2-moment pipe.
- VER: `route-not-found.component.ts`. route | async.

# Directivas

- VER: `repositories.component.ts`.
  - `*ngIf`: loading, por ejemplo.
  - `*ngFor`: para la lista de repos.

# Inyección de Dependencias:

- VER: (varios). `ActivatedRoute`.
- VER: `github-client-service.ts`. Http.

# Otros
- VER: `github-client-service.ts`.
  - Cómo uso el tipo que mapea el JSON de github.
  - Observable.map().
- CONTAR: cómo se hace i18n.


