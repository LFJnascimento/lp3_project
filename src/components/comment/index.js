import React from 'react';

import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

function Comment(props) {
  
  return (
    <ListGroup variant="flush">

      <ListGroup.Item>
        <Form.Text className="text-muted">@{props.user}</Form.Text>
        {props.msg}
      </ListGroup.Item>

    </ListGroup>
  )
}

export default Comment