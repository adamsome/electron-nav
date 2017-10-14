import React, { Component } from 'react'
import type { Children } from 'react'
import SplitPane from 'react-split-pane'

export default class Layout extends Component {
  props: {
    children: Children,
    sidebar: Children
  }

  render() {
    const { sidebar, children } = this.props
    return (
      <SplitPane
        split="vertical"
        minSize={50}
        defaultSize={150}
        pane2Style={{ overflowY: 'auto' }}
      >
        <div>
          {sidebar}
        </div>
        <div>
          {children}
        </div>
      </SplitPane>
    )
  }
}
