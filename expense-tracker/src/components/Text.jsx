import MaterialIconsReact from 'material-icons-react'
import React from 'react'

const Text = ({icon, text, orientation}) => {
  return (
    <div className={`flex ${orientation=='reverse' ? "flex-row-reverse":"flex-row"} gap-2 `}>
        {/* <img src={icon} alt="" /> */}
        <MaterialIconsReact icon={icon} />
        <p>{text}</p>
    </div>
  )
}

export default Text