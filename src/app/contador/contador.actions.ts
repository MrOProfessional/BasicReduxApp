import { createAction } from "@ngrx/store";

export const increment = createAction('[Contador Incrementar]');

export const decrement = createAction('[Contador Decrementar]');

export const multiply = createAction('[Contador Multiplicar]');