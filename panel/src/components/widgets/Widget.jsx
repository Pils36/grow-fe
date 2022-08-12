import "./widget.scss"

const Widget = ({ type }) => {

  let data; 
    switch(type){
      case "users":
        data={
          title: "Total Users",
          counter: "150",
          active: "Active",
          activeNum: ":135",
          inactive: "Inactive",
          inactiveNum: ":15"
        }

        break;

        case "farms":
        data={
          title: "Number of farms",
          counter: "225",
          active: "Active",
          activeNum: ":215",
          inactive: "Inactive",
          inactiveNum: ":10"
        }
    }


  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.counter}</span>
            <p className="active">{data.active} <span className="activeNum">{data.activeNum}</span></p>
        </div>
        
        <div className="right">
        <p className="inactive">{data.inactive} <span className="inactiveNum">{data.inactiveNum}</span></p>
        </div>
    </div>
  )
}

export default Widget