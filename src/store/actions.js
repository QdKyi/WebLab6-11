import { createAction } from '@reduxjs/toolkit'

export const add = createAction('ADD')
export const remove = createAction('REMOVE')
export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export const reset = createAction('RESET')
