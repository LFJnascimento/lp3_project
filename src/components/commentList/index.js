import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'

import Comment from '../comment'


function CommentList(props) {
  const [commentsLoaded, setCommentsLoaded] = useState(props.comments.slice(-1));
  const [newComment, setNewComment] = useState({user: 'Você', msg:''});


  function moreCommentsHandle() {
    const len = commentsLoaded.length;
    setCommentsLoaded(props.comments.slice(-(len + 2), -len).concat(commentsLoaded));
  }

  function onSubmitHandle(e){
    if(e.keyCode === 13){
      setCommentsLoaded([...commentsLoaded, newComment]);
      setNewComment({user: newComment.user, msg:''});
    }
  }
  
  return (
    <>
    
      {commentsLoaded.length < props.comments.length &&
        <Badge variant="light" style={{ cursor: 'pointer' }} onClick={moreCommentsHandle}>
          Visualizar mais comentários...
        </Badge>
      }

      {commentsLoaded.map((comment, index) => <Comment key={index} user={comment.user} msg={comment.msg} />)}

      <div style={{backgroundColor:'#b5b0b0'}}>
        <Form.Control 
          style={{borderRadius: '30px'}}
          type="email" 
          placeholder="Adicionar comentário..." 
          value={newComment.msg}
          onKeyDown={onSubmitHandle} 
          onChange={(e) => setNewComment({user: newComment.user, msg: e.target.value})}
        />
      </div>

    </>
  )
}

export default CommentList;