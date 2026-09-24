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

## Arquitectura técnica vigente

Tras contrastar el repositorio real de `NUVIA-PORTAL-BASELINE`, la sección se ha alineado con su patrón técnico de construcción y publicación.

### Base tecnológica

- HTML estático.
- CSS compartido.
- JavaScript solo cuando sea necesario.
- Node.js como herramienta de validación y build.
- GitHub Actions como pipeline de construcción y despliegue.
- GitHub Pages publica el artefacto generado en `dist/`.
- Sin framework frontend.
- Sin backend.

### Componentes compartidos

La cabecera y el footer siguen siendo componentes únicos y reutilizables, pero ya no dependen de Jekyll/Liquid:

- `src/includes/header.html`
- `src/includes/footer.html`

Las páginas fuente contienen marcadores de composición. `scripts/build-site.mjs` inserta los componentes, aplica el estado activo de navegación y genera las páginas finales en `dist/`.

### Validación

`npm run validate` comprueba la integridad de la fuente.

`npm run build`:

1. valida la fuente;
2. genera `dist/`;
3. copia los assets;
4. valida las referencias locales y comprueba que no queden marcadores o sintaxis de plantilla sin resolver.

### Publicación

`.github/workflows/pages.yml` reproduce el patrón de BASELINE:

```text
main
→ Node.js
→ npm run build
→ dist/
→ upload-pages-artifact
→ deploy-pages
```

### Decisión sobre Jekyll

La solución Jekyll/Liquid utilizada inicialmente para reutilizar cabecera y footer queda retirada. Era válida para el piloto, pero introduciría una segunda cadena de composición distinta de la utilizada por BASELINE. La migración a Node reduce diferencias técnicas y facilita la futura integración.

## Sección pública construida

La sección «Qué es NUVIA» dispone de una primera versión completa navegable:

1. `index.html` — entrada general.
2. `descubrir.html` — propósito, orientación, cómo puede ayudar NUVIA, Comunidad y NUVIA hoy.
3. `comprender.html` — tratamiento de la información, uso, responsabilidad de publicación, límites e Información Familiar.
4. `explorar.html` — áreas temáticas y recursos transversales.
5. `quienes-somos.html` — propósito, modelo, Portal, Experiencias, Colaboradores, Agente, privacidad y evolución.

La navegación principal compartida utiliza:

- Descubrir
- Comprender
- Explorar NUVIA
- Quiénes somos

## Integración futura

«Qué es NUVIA» no se integra técnicamente en BASELINE. Ambos trabajos se mantienen autónomos durante la experimentación, pero comparten el mismo patrón de stack, build y despliegue para reducir la fricción cuando el trabajo validado se traslade al futuro `nuvia-portal`.
