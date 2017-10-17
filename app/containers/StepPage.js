// @flow
import React from 'react'
import Step from '../components/Step'

const entities = {
  steps: {
    '0000000001': {
      id: '0000000001',
      name: 'B7971001 Transformation 01',
      breadcrumb: [
        'B7971001', 'L01 2017-10-13 20:57', 'T01'
      ],
      createdBy: 'Adam Banda',
      createdAt: '2017-10-20 3:34:02 pm',
      createdAtDisplay: '3 days ago',
      scripts: [
        { name: 'Limit to 1st day', logs: 'This is a prototype placeholder' },
        { name: 'Fix column ABC data type', logs: 'This is a prototype placeholder' },
      ],
      comments:
        'Lorem ipsum dolor sit amet, sed ocurreret pertinacia ea. ' +
        'Duo tation posidonium at. Has ut tale dictas, oratio semper ' +
        'electram ad mea. Idque evertitur cu usu, nec aperiri nostrud te. ' +
        'Corpora adipisci est at. Quis dissentias vim an, sea cu summo ' +
        'intellegat. An quot assum patrioque his.',
    }
  }
}

export default class EntityPage extends React.Component {
  render() {
    const { match } = this.props
    // TODO: handle id undefined
    const id = match.params.id

    return (
      <Step {...entities.steps[id]} />
    )
  }
}
