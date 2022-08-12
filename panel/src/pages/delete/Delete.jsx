import "./delete.scss"

const Delete = () => {
  return (
    <div className="delete">
        <div>
            <h1>Are you sure?</h1>
            <h2>Click OK to continue</h2>

            <div className="btn">
                <button className="can">Cancel</button>
                <button className="ok">OK</button>
            </div>
        </div>
    </div>
  )
}

export default Delete