import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import expect from 'expect'
import IconBase from '..'
import PassContext from './helpers/pass-context'

describe('IconBase', () => {
  let outer

  beforeEach(() => {
    const renderer = ReactTestRenderer.create(<IconBase />)
    outer = renderer.toJSON()
  })

  it('renders svg', () => {
    expect(outer.type).toEqual('svg')
  })

  it('has default props', () => {
    expect(outer.props.fill).toEqual('currentColor')
    expect(outer.props.preserveAspectRatio).toEqual('xMidYMid meet')
    expect(outer.props.height).toEqual('1em')
    expect(outer.props.width).toEqual('1em')
    expect(outer.props.style.verticalAlign).toEqual('middle')
  })

  it('has does not have a default color', () => {
    expect(Object.prototype.hasOwnProperty.call(outer.props.style), 'color').toBe(false)
  })
})

describe('Colors priority', () => {
  it('uses the reactIconBase.style.color first', () => {
    const rendered = ReactTestRenderer.create((
      <PassContext context={{ style: { color: 'red' } }}>
        <IconBase />
      </PassContext>
    ))

    expect(rendered.toJSON().props.style.color).toEqual('red')
  })

  it('uses the reactIconBase.color second', () => {
    const rendered = ReactTestRenderer.create((
      <PassContext context={{ style: { color: 'red' }, color: 'blue' }}>
        <IconBase />
      </PassContext>
    ))

    expect(rendered.toJSON().props.style.color).toEqual('blue')
  })

  it('uses style.color third', () => {
    const rendered = ReactTestRenderer.create((
      <PassContext context={{ style: { color: 'red' }, color: 'blue' }}>
        <IconBase style={{ color: 'purple' }} />
      </PassContext>
    ))

    expect(rendered.toJSON().props.style.color).toEqual('purple')
  })

  it('uses color fourth', () => {
    const rendered = ReactTestRenderer.create((
      <PassContext context={{ style: { color: 'red' }, color: 'blue' }}>
        <IconBase style={{ color: 'purple' }} color='orange' />
      </PassContext>
    ))

    expect(rendered.toJSON().props.style.color).toEqual('orange')
  })
})
