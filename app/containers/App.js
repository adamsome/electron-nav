// @flow
import React, { Component } from 'react'
import type { Children } from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

export default class App extends Component {
  props: {
    children: Children
  }

  render() {
    const treeData = [
      {
        title: 'B7971001',
        children: [
          { title: '001 2017/10/13 20:57' }
        ]
      }
    ]

    return (
      <Layout sidebar={<Sidebar treeData={treeData} />}>
        {this.props.children}
      </Layout>
    )
  }
}
