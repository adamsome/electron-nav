// @flow
import React from 'react'
import Entity from '../components/Entity'

const testEntities = {
  entities: {
    steps: {
      '0000000001': {
        id: '0000000001',
        name: 'B7971001 Transformation 01'
      }
    }
  }
}

export default class EntityPage extends React.Component {
  render() {
    const { match } = this.props
    // TODO: handle id undefined
    const id = match.params.id

    return (
      <Entity entity={testEntities.entities.steps[id]} />
    )
  }
}
