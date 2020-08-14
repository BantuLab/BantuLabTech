/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '../../src/views/Home.vue'
// import { isIterable } from 'core-js'

describe('Home.vue', () => {
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).to.include(msg)
  // })
  it('checks that the title card is available', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.find('#title_card').exists()).to.be.true
  })
})
