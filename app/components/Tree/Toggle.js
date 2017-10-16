import React from 'react'
import styles from './Toggle.css'

const Toggle = () => {
  const height = 8
  const width = 8
  const midHeight = height * 0.5
  const points = `0,0 0,${height} ${width},${midHeight}`
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <svg height={height} width={width}>
          <polygon points={points} className={styles.arrow} />
        </svg>
      </div>
    </div>
  )
}

export default Toggle
