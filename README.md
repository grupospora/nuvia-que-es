# NUVIA — Qué es NUVIA

Proyecto autónomo de la sección pública **«Qué es NUVIA»** y laboratorio de construcción del futuro Portal NUVIA.

## Propósito

Este repositorio se utiliza para construir, probar y validar «Qué es NUVIA» de forma independiente, manteniendo compatibilidad técnica con el patrón de publicación de `NUVIA-PORTAL-BASELINE`.

## Relación con otros repositorios

- `NUVIA-PORTAL-BASELINE`: referencia visual y de experiencia y, desde esta migración, referencia del **patrón técnico de build y despliegue**.
- `nuvia-docs`: documentación gobernada del proyecto, incluida `PORTAL-GUIA-ESTILO.md`.
- `nuvia-portal`: futuro repositorio integrado del Portal. El trabajo validado de esta sección se migrará selectivamente allí.

## Techstack

- HTML estático.
- CSS compartido.
- JavaScript solo cuando aporte valor real.
- Node.js 20 o posterior para validación, build y servidor local.
- GitHub Actions para construir y publicar.
- GitHub Pages publica exclusivamente el artefacto generado en `dist/`.
- Sin framework frontend.
- Sin backend.

## Componentes compartidos

La cabecera y el footer tienen una única fuente:

- `src/includes/header.html`
- `src/includes/footer.html`

Las páginas fuente contienen los marcadores `<!-- NUVIA_HEADER -->` y `<!-- NUVIA_FOOTER -->`. Durante el build, Node inserta ambos componentes y genera HTML final estático en `dist/`.

## Páginas

- `index.html` — entrada a Qué es NUVIA.
- `descubrir.html` — Descubrir.
- `comprender.html` — Comprender.
- `explorar.html` — Explorar NUVIA.
- `quienes-somos.html` — Quiénes somos.

## Trabajo local

Requisito: Node.js 20 o posterior.

```bash
npm run serve
```

El comando valida la fuente, genera `dist/`, valida el resultado y sirve la web en `http://127.0.0.1:4173`.

## Validación y compilación

```bash
npm run validate
npm run build
```

La validación comprueba, entre otras cosas:

- existencia de las cinco páginas públicas;
- títulos y metadatos;
- componentes compartidos;
- ausencia de sintaxis residual Jekyll/Liquid;
- resolución de cabecera y footer durante el build;
- referencias locales válidas en el artefacto final.

## Publicación

Cada actualización de `main` ejecuta `.github/workflows/pages.yml`.

```text
fuente
→ npm run build
→ dist/
→ GitHub Pages
```

`dist/` es un artefacto generado y no se versiona.

## Principio de integración

La sección mantiene identidad y contenido propios durante su fase de construcción, pero evita una arquitectura técnica paralela. El objetivo es reducir fricción cuando sus componentes y páginas deban integrarse en el futuro Portal.
