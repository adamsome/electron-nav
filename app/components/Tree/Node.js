// @flow
import React from 'react'
import NodeHeader from './NodeHeader'
import styles from './Node.css'

export type NodeType = {
  name: string,
  toggled?: boolean,
  active?: boolean,
  children?: Array<NodeType>
}
export type ToggleFuncType = (data: NodeType, toggle: boolean) => void
type NodeComponentType = {
  node: NodeType,
  onToggle: ToggleFuncType
}

const Loading = () => (
  <li>
    <div className={styles.loading}>
      Loading...
    </div>
  </li>
)

const Children = ({ node, onToggle }: NodeComponentType) => {
  let children = node.children
  if (!Array.isArray(children)) children = children ? [children] : []

  return (
    <ul className={styles.children}>
      {node.loading
        ? <Loading />
        : children.map((child, i) => (
          <Node
            key={child.id || i}
            node={child}
            onToggle={onToggle}
          />
      ))}
    </ul>
  )
}

const Node = ({ node, onToggle }: NodeComponentType) => (
  <li className={styles.item}>
    <NodeHeader
      node={node}
      handleClick={() => onToggle(node, !node.toggled)}
    />
    {node.toggled
      ? <Children {...{ node, onToggle }} />
      : null
    }
  </li>
)

export default Node
