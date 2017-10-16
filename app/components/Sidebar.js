import React from 'react'
import { Header } from 'semantic-ui-react'
import Tree from './Tree/Tree'

const treeData = {
  name: 'B7971001',
  children: [
    {
      name: '001 2017/10/13 20:57',
      children: [
        {
          name: 'T001',
          children: [
            {
              name: 'A001'
            }
          ]
        }
      ]
    }
  ]
}

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(node, toggled) {
    if (this.state.cursor) {
      this.state.cursor.active = false
    }
    const newNode = node
    newNode.active = true
    if (node.children) newNode.toggled = toggled
    this.setState({ cursor: newNode })
  }

  render() {
    const containerStyle = {
      backgroundColor: '#f4f4f4',
      height: '100vh'
    }

    return (
      <div style={containerStyle}>
        <Header size="small">NAVIGATOR</Header>
        <Tree data={treeData} onToggle={this.onToggle} />
      </div>
    )
  }
}
