import React from 'react'

const SortByHp = props => {
    return (
        <div className="ui search">
            <div className="ui icon input">
            <label> Sort by HP </label>
            <input type="checkbox" className="prompt" onChange={props.onChange} />
            </div>
        </div>
        )
    }
    
export default SortByHp
