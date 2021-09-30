import React from 'react'

const DashboardMainCard = ({TableDiv,SelectedButtons}) => {
    return (
        <>
    <main>
    <div
      className="container style_custom mt-3"
      style={{
        backgroundColor: "#FFF",
        borderRadius: "10px",
        width: "96%",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {SelectedButtons}
        {TableDiv}
     </div>
    </main>   
        </>
    )
}

export default DashboardMainCard
