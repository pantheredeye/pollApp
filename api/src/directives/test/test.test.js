import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import test from './test'

describe('test directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(test.schema).toBeTruthy()
    expect(getDirectiveName(test.schema)).toBe('test')
  })

  it('has a test throws an error if validation does not pass', () => {
    const mockExecution = mockRedwoodDirective(test, {})

    expect(mockExecution).toThrowError('Implementation missing for test')
  })
})
