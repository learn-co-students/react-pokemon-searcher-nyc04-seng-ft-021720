import React from 'react'

const TypeFilter = props => {
    return (
      <div className="ui search">
        <div className="ui icon input">
            <input defaultValue="find by type" className="prompt" onChange={props.onChange} />
            <i className="search icon" />
        </div>
      </div>
    )
  }
  
  export default TypeFilter