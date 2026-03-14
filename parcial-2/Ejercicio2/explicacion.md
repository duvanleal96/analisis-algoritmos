Este ejercicio es óptimo porque transforma el problema en un clásico de programación voraz (greedy):

Ordenar por end (final del intervalo) siempre es la mejor elección local.

Selecciono primero el intervalo que termina más pronto, porque libera antes la “línea de tiempo” para aceptar otros intervalos.
Esto maximiza el número de intervalos no solapados que pueden coexistir.
Al comparar start < lastEnd detecto solapamiento mínimo:

Si solapan, elimino el actual (o conceptual “no lo incluyo”), porque cualquier otro que termine más tarde sería peor.
Si no solapan (start >= lastEnd), acepto intervalo y avanzo.
El resultado removals es complementario al máximo de intervalos compatibles:

removals = total - máximo compatibles.
Como greedy da el máximo de compatibles, el mínimo de removals se obtiene.