import React from 'react'
import Menu from './Menu.js'
import Option from './Option'

const DND = props => {
    return (
        <div>
            <div style={{overflow: 'hidden', clear: 'both'}}>
                <Menu/>
            </div>
            <div style={{overflow: 'hidden', clear: 'both'}}>
                <Option name="math" id={1}/>
                <Option name="art" id={2}/>
                <Option name="sport" id={3}/>
            </div>
        </div>
    )
}

export default DND