import React from 'react'

const DashboardMainCard = ({ TableDiv, SelectedButtons, colorfulcards, reverse, TableCardGrid, DivCardComponent, DivChartComponent, floatleftrightbutton,classnamewidth,classnamemarginleft,classnameminwidth }) => {
  return (
    <>
      <main>
        <div
          className="container style_custom mt-3"
          style={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            width: classnamewidth ,
            alignItems: "center",
            padding: "20px",
            marginLeft: classnamemarginleft,
            minWidth:classnameminwidth,
          }}
        >
          {floatleftrightbutton}
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
