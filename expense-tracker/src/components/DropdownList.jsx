import React from 'react'
import TextComponent from './TextComponent'

const DropdownList = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => {
                <div key={index} className='py-1 px-2 border-solid border-1'>
                    <TextComponent text={item.text} icon={item.icon} orientation={"reverse"} />
                </div>
            })}
        </div>
    )
}

export default DropdownList