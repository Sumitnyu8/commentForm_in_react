import { useState } from "react";
import CommentForm from "./Components/commentform/CommentForm"
import CommentLists from "./Components/commentlist/CommentLists";

function App() {
  const [inputText, setinputText] = useState({
    name: '',
    comment: ''
  })
  const [commentList, setcommentList] = useState([])

  const handleInput = (e) => {
    setinputText({ ...inputText, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputText.name && inputText.comment){
      setcommentList([...commentList, inputText])
      setinputText({
        name: '',
        comment: ''
      })
    }else{
      commentList
    }
  }


  return (
    <>
      <div>
        <CommentForm handleSubmit={handleSubmit} handleInput={handleInput} inputText={inputText} />
        <CommentLists commentList={commentList} />
      </div>
    </>
  )
}

export default App
