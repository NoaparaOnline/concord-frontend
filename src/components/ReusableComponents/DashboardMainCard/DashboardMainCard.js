import React from 'react'

const DashboardMainCard = ({TableDiv,SelectedButtons,colorfulcards,reverse,TableCardGrid,DivCardComponent,DivChartComponent}) => {
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
      {colorfulcards}
      {SelectedButtons}
       
      {reverse ? (
        <>{TableDiv}</>
      ) : (
        <>
          {DivCardComponent}
          {DivChartComponent}
          {TableCardGrid}
        </>
      )}
        
     </div>
    </main>   
        </>
    )
}

export default DashboardMainCard
