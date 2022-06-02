import React from 'react'
import { Card, Placeholder } from 'react-bootstrap'

const Loading = () => {
  return (
        <Card>
        <Card.Body>
        <Placeholder as={Card.Title} animation="glow" className="text-center">
        <Placeholder.Button variant="primary" xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow" className="text-center">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        </Card.Body>
        </Card>
  )
}

export default Loading