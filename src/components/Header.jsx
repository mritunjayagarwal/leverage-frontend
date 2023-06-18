import React from 'react'
import { Link } from 'react-router-dom';


function Header({address, isConnected, connect, disconnect}) {

  return (
    <header>
      <div className="leftH">
        
        <Link to="/">
          <div className="headerItem">Crypto</div>
        </Link>
      </div>

        <div className="rightH">
         
          <button className="btn-grad py-3 px-3"
            onClick={() => {
              if(isConnected) disconnect()
              else connect()
            }} style = {{ "border": "unset"}}>
            {isConnected 
            ? 'Disconnect'
            : 'Connect'}
          </button>
        </div>
      </header> 
  )
}

export default Header