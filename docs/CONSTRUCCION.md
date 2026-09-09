# Qué es NUVIA — Construcción

## Estado

Fase de preparación de la **página piloto de estilo**.

## Objetivo inmediato

Construir una primera página real y sencilla de «Descubrir» que permita validar el lenguaje visual inicial antes de desarrollar el bloque completo.

## La página piloto debe permitir revisar

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

## Contenido previsto del piloto

1. Entrada / hero «Qué es NUVIA».
2. Inicio de Descubrir.
3. Bloque de texto y destacado.
4. Representación simple del método NUVIA.
5. Tarjeta de demostración PIB.
6. Señales de confianza.
7. Cierre / CTA provisional.

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
