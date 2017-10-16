import React from 'react'
import Toggle from './Toggle'
import styles from './NodeHeader.css'

export default class NodeHeader extends React.Component {
  render() {
    const { node, onClick } = this.props

    // TODO: Handle tabIndex w/ real index
    return (
      <div
        onClick={onClick}
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
  }
}
