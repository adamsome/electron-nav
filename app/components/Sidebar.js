// @flow
import * as React from 'react'
import { Header } from 'semantic-ui-react'
import SortableTree from 'react-sortable-tree'

export default class Sidebar extends React.Component {
  props: {
    treeData: Array<mixed>
  }
  render() {
    const containerStyle = {
      backgroundColor: '#f4f4f4',
      height: '100vh'
    }
    return (
      <div style={containerStyle}>
        <Header size="small">NAVIGATOR</Header>
        <SortableTree
          treeData={this.props.treeData}
        />
      </div>
    )
  }
}
