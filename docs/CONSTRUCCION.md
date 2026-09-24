# Qué es NUVIA — Construcción

## Estado

**Página piloto de estilo v0.1 construida.**

La página está preparada para una primera revisión visual de GS antes de desarrollar el bloque completo.

## Objetivo inmediato

Revisar la primera página real de «Descubrir» y decidir qué decisiones visuales deben conservarse, modificarse o descartarse antes de construir el resto de «Qué es NUVIA».

## La página piloto permite revisar

- sensación general;
- coherencia con BASELINE sin clonarlo;
- legibilidad;
- jerarquía tipográfica;
- ancho de lectura;
- densidad y ritmo vertical;
- uso del color;
- fondos y contenedores;
- tarjetas;
- CTA y enlaces;
- comportamiento responsive;
- lectura por capas.

## Contenido incluido en el piloto v0.1

1. Entrada / hero «Qué es NUVIA».
2. Inicio de Descubrir.
3. Bloque de texto y destacado.
4. Representación simple del método NUVIA.
5. Tarjeta de demostración PIB.
6. Señales de confianza.
7. Cierre / CTA provisional.

## Lectura realizada de BASELINE

BASELINE se ha utilizado exclusivamente como referencia visual y de experiencia.

Elementos observados y utilizados como punto de partida experimental:

- fondo general claro `#F4F6F9`;
- azul institucional profundo para bloques de presencia;
- verde como acento;
- superficies blancas y crema;
- tipografía sans serif limpia y poco ornamental;
- encabezado contenido y navegación ligera;
- grandes titulares con peso medio;
- divisores sutiles;
- tarjetas de baja elevación;
- uso de numeración y pequeños rótulos en mayúsculas;
- sensación de calma, orden y solvencia.

## Mejoras deliberadamente probadas frente a BASELINE

El piloto no copia la implementación técnica ni todas sus decisiones. Se están probando expresamente:

- responsive real sin ancho mínimo de escritorio;
- mayor control del ancho de lectura;
- más espacio vertical para contenido explicativo;
- lectura por capas más marcada;
- componentes con semántica HTML y clases reutilizables en lugar de estilos inline;
- estados claros para recursos reales, muestras y pendientes;
- menor densidad de navegación durante una experiencia narrativa.

Estas decisiones son todavía **experimentales** y no forman parte de la guía gobernada hasta que GS las valide.

## Regla de relación con BASELINE

**BASELINE es referencia visual y de experiencia, no base técnica ni especificación cerrada.**

Se observarán sus patrones y se conservará la continuidad visual cuando tenga sentido, pero podrán mejorarse legibilidad, consistencia, accesibilidad, escalabilidad y simplicidad.

## Regla de estilo gobernado

Las decisiones visuales que GS valide en el piloto podrán incorporarse a `PORTAL-GUIA-ESTILO.md` en `grupospora/nuvia-docs`.

Las pruebas todavía no validadas permanecen en este repositorio y no constituyen criterio general del Portal.

## Arquitectura técnica inicial

- HTML plano.
- CSS plano.
- JavaScript solo cuando aporte valor real.
- Sin framework.
- Sin backend.
- GitHub Pages como alojamiento previsto.
- No modificar BASELINE.

## Integración futura

«Qué es NUVIA» no se integrará técnicamente en BASELINE.

Cuando el bloque esté cerrado y validado se creará el futuro repositorio `nuvia-portal`, y el contenido, los patrones y los componentes aprobados se migrarán selectivamente a él.


## Componentes compartidos

La cabecera y el pie validados se mantienen como componentes compartidos de toda la sección mediante Jekyll/Liquid, compatible de forma nativa con GitHub Pages:

- `_includes/header.html` — cabecera v1 reutilizable.
- `_includes/footer.html` — footer v1 reutilizable.

Cada página de la sección debe incluir front matter de Jekyll y reutilizar ambos componentes con:

```liquid
{% include header.html %}
...
{% include footer.html %}
```

Las rutas de recursos y anclas globales de estos componentes utilizan `relative_url` para seguir funcionando bajo el subdirectorio de publicación de GitHub Pages. La página puede declarar `nav_key` en su front matter para activar el estado correspondiente de navegación sin duplicar la cabecera.

Este patrón se adopta para evitar duplicación y asegurar que cualquier cambio futuro en cabecera o footer se propague automáticamente a todas las páginas de «Qué es NUVIA».


## Sección pública construida

La sección «Qué es NUVIA» ya dispone de una primera versión completa navegable, organizada en cuatro bloques públicos sin secuencia obligatoria:

1. `descubrir.html` — propósito, orientación, cómo puede ayudar NUVIA, Comunidad y NUVIA hoy.
2. `comprender.html` — tratamiento de la información, uso, Comunidad, responsabilidad de publicación, límites de ayuda e Información Familiar.
3. `explorar.html` — áreas temáticas y recursos transversales.
4. `quienes-somos.html` — propósito, modelo de relación, Portal, Experiencias, Colaboradores, Agente, privacidad y evolución.

La portada `index.html` funciona como entrada a los cuatro bloques.

### Navegación compartida

La cabecera v1 utiliza como navegación principal de esta sección:

- Descubrir
- Comprender
- Explorar NUVIA
- Quiénes somos

El estado activo se controla mediante `nav_key` en el front matter de cada página.

### Layout compartido

Se ha añadido `_layouts/default.html` para centralizar el documento HTML base, metadatos comunes, carga de estilos y uso de cabecera/footer. Las páginas contienen únicamente su front matter y su contenido principal.

### Criterio de construcción

Esta versión convierte el piloto visual en una sección pública coherente, manteniendo el principio de simplicidad deliberada: Jekyll/Liquid sobre GitHub Pages, sin framework de frontend, sin backend y con HTML semántico y CSS compartido.
