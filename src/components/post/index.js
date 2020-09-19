import React, {useState} from 'react';

import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import CommentList from '../commentList'


function Post(props) {
  const [isLiked, setIsLiked] = useState(false);

  function likeHandle(){
    props.data.likes += isLiked? -1 : 1;
    setIsLiked(!isLiked);
  }
 

  return (
    <>
      <Card style={{ margin: '15px 0px', width: '30rem', backgroundColor: 'gray' }}>
        <Card.Img variant="top" src={props.data.imgURL} />

        <Card.Body>
          <Card.Text>
            {props.data.subtitle}
          </Card.Text>
        </Card.Body>

        <div style={{ marginLeft: '3px' }}>
          <Badge variant={isLiked? 'primary': 'light'} style={{cursor: 'pointer'}} onClick={likeHandle}>
            {props.data.likes} Likes
          </Badge>{' '}
          <Badge variant="dark">{props.data.comments.length} Comments</Badge>
        </div>

        <CommentList comments={props.data.comments} />
      </Card>
    </>
  )
}


export default Post;