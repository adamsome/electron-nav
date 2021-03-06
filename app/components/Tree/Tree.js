// @flow
import React from 'react'
import Node from './Node'
// import type { NodeType } from './Node'
import styles from './Tree.css'

type NodeType = {
  name: string,
  toggled?: boolean,
  active?: boolean,
  children?: Array<NodeType>
}
type Props = {
  data: NodeType | Array<NodeType>,
  onToggle: (node: NodeType, toggled: boolean) => void
}

// TODO: Change so toggle is on the arrow click not the whole row
// - When row is clicked open children, but don't close children unless
//   the toggle arrow is clicked
// TODO: Add new action onSelect()
// TODO: Indent nodes w/ no children
// TODO: Add support for icons on nodes
// TODO: Turn off drag and select
const Tree = ({ data: propData, onToggle }: Props) => {
  // Support a single root node (rather than an array of nodes)
  let data = propData
  if (!Array.isArray(data)) data = [data]

  return (
    <ul className={styles.list}>
      {data.map((node, i) => (
        <Node
          key={node.id || i}
          node={node}
          onToggle={onToggle}
        />
      ))}
    </ul>
  )
}

export default Tree
