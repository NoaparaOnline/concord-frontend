import React from 'react'

const ResusableSiderBtn = ({ label,
    className,
    bntStyle,
    labelStyle,
    onClick,}) => {
    return (
        <div
        className={`dashboardBtnList-item ${className}  btn `}
        style={{ bntStyle }}
        onClick={onClick}
      >
        <Link style={{ labelStyle }} >{label}</Link>
      </div>
    )
}

export default ResusableSiderBtn
