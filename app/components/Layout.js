// @flow
import React from 'react'
import type { Children } from 'react'
import SplitPane from 'react-split-pane'

type Props = {
  children: Children,
  sidebar: Children
}

const Layout = ({ children, sidebar }: Props) => (
  <SplitPane
    split="vertical"
    minSize={200}
    defaultSize={240}
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

export default Layout
