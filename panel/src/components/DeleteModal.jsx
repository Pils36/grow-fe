import React from 'react'

const DeleteModal = ({closeModal}) => {
  return (
    <div>
        <div>
            image
        </div>
        <div>
            <h1>Are you sure?</h1>
            <p>Click OK to proceed</p>
        </div>
        <div>
            <button>Cancle</button>
            <button>OK</button>
        </div>
    </div>
  )
}

export default DeleteModal