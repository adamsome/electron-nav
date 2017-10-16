import React from 'react'
import NodeHeader from './NodeHeader'
import styles from './Node.css'

export default class Node extends React.Component {
  static renderLoading() {
    return (
      <ul className={styles.children}>
        <li>
          <div className={styles.loading}>
            Loading...
          </div>
        </li>
      </ul>
    )
  }

  renderChildren() {
    const { node, onToggle } = this.props

    if (!node.toggled) return null
    if (node.loading) return this.renderLoading()

    let children = node.children
    if (!Array.isArray(children)) children = children ? [children] : []

    return (
      <ul className={styles.children}>
        {children.map((child, i) => (
          <Node
            key={child.id || i}
            node={child}
            onToggle={onToggle}
          />
        ))}
      </ul>
    )
  }

  render() {
    const { node, onToggle } = this.props
    return (
      <li className={styles.item}>
        <NodeHeader
          node={node}
          onClick={() => onToggle(node, !node.toggled)}
        />
        {this.renderChildren()}
      </li>
    )
  }
}
