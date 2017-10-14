// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import styles from './Counter.css'


class Counter extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <Icon name="chevron left" size="big" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increment} data-tclass="btn">
            <Icon name="plus" size="big" />
          </button>
          <button className={styles.btn} onClick={decrement} data-tclass="btn">
            <Icon name="minus" size="big" />
          </button>
          <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn">odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn">async</button>
        </div>
        <div className="u-primary">
          <span className="u-adam">TODO REMOVE ME</span>
        </div>
      </div>
    )
  }
}

export default Counter
