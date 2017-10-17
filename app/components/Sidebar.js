import React from 'react'
import { Header } from 'semantic-ui-react'
import Tree from './Tree/Tree'
import styles from './Sidebar.css'

// TODO: Improve tree
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

// TODO: Store tree data in Redux and create actions and reducer
// TODO: Link to Entity onSelect
// TODO: Add close button to the sidebar (and and open button when closed)
export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onToggle = this.onToggle.bind(this);
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
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Header size="small">NAVIGATOR</Header>
        </div>
        <Tree data={treeData} onToggle={::this.onToggle} />
      </div>
    )
  }
}
