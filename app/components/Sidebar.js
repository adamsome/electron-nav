import React from 'react'
import { Header } from 'semantic-ui-react'
import Tree from './Tree/Tree'
import type { NodeType } from './Tree/Node'
import styles from './Sidebar.css'

// TODO: Improve tree
const treeData = {
  name: 'B7971001',
  toggled: true,
  children: [
    {
      name: 'L01 2017-10-13 20:57',
      toggled: true,
      children: [
        {
          name: 'T01',
          toggled: true,
          active: true,
          children: [
            {
              name: 'A01'
            }
          ]
        }
      ]
    }
  ]
}

// TODO: Store tree data in Redux and create actions and reducer
// TODO: Link to Entity onSelect
// TODO: Add close button to the sidebar (and and open button when closed)
// TODO: Change to state-less function
// TODO: Bug in flow-runtime when setting onToggle()'s type to NodeType
export default class Sidebar extends React.Component {
  props: {}
  state: {
    cursor?: NodeType
  }

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  onToggle = (node, toggled) => {
    if (this.state.cursor) {
      this.state.cursor.active = false
    }
    const newNode = node
    newNode.active = true
    if (node.children) newNode.toggled = toggled
    this.setState({ cursor: newNode })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Header size="small">NAVIGATOR</Header>
        </div>
        <Tree data={treeData} onToggle={this.onToggle} />
      </div>
    )
  }
}
