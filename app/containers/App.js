import React, { Component } from 'react'
import type { Children } from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

export default class App extends Component {
  props: {
    children: Children
  }

  render() {
    return (
      <Layout sidebar={<Sidebar />}>
        {this.props.children}
      </Layout>
    )
  }
}
