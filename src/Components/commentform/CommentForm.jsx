import React from 'react'

function CommentForm({handleSubmit, handleInput, inputText}) {
  return (
    <>
    <div className='container'>
        <form className='d-flex justify-content-center col-12 p-5' onSubmit={handleSubmit}>
            <div className='d-flex flex-wrap flex-column col-6'>
            <h1 className='fw-bold'>Comments</h1>
            <label htmlFor="Name" className='fw-bold'>Name :</label>
            <input type="text" placeholder='Enter Your Name' id='Name' name='name' value={inputText.name} className='col-12' onChange={handleInput}/>
            <label htmlFor="Comment" className=' mt-2 fw-bold'>Comment :</label>
            <textarea placeholder='Enter Comments here' id='Comment' name='comment' value={inputText.comment} className='col-12' rows="2" onChange={handleInput}/>
            <input type="submit"/>
            </div>
        </form>
    </div>
    </>
  )
}

export default CommentForm