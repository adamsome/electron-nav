// @flow
import React from 'react'
import styles from './Toggle.css'

type Props = {
  hide?: boolean
}

const Toggle = ({ hide }: Props) => {
  const height = 8
  const width = 8
  const midHeight = height * 0.5
  const points = `0,0 0,${height} ${width},${midHeight}`
  const visibility = hide ? { visibility: 'hidden' } : null
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <svg height={height} width={width} style={visibility}>
          <polygon points={points} className={styles.arrow} />
        </svg>
      </div>
    </div>
  )
}

Toggle.defaultProps = {
  hide: false,
}

export default Toggle
