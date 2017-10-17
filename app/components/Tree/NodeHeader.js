// @flow
import React from 'react'
import Toggle from './Toggle'
import type { NodeType } from './Node'
import styles from './NodeHeader.css'

type Props = {
  node: NodeType,
  handleClick: () => void
}

// TODO: Handle tabIndex w/ real index
const NodeHeader = ({ node, handleClick }: Props) => (
  <div
    onClick={handleClick}
    className={`${styles.link} ${node.active ? styles.active : ''}`}
    role="menuitem"
    tabIndex={0}
  >
    {node.children ? <Toggle /> : null}
    <div className={styles.wrapper}>
      <div className={styles.name}>
        {node.name}
      </div>
    </div>
  </div>
)

export default NodeHeader
