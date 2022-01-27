import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const history = useHistory();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
   
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const getFirstWord = (string) => {
    const words = string.split(" ");
    return words[0].toLowerCase();
  };
  
 

  return (
    <>
  
      <div className="search">
        <div className="input-group mb-3">
          <input
            style={{
              height: "28px",
              borderRadius: 0,
              borderColor: "none",
            }}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="form-control "
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="input-group-append">
            {filteredData.length === 0 ? (
              
              <span
            style={{ height: "28px", borderRadius: 0 }}
            className="input-group-text"
            id="basic-addon2"
          >
            <i className="fa fa-search"></i>
          </span>
            ) : (

                <span
                style={{ height: "28px", borderRadius: 0 }}
                className="input-group-text"
                id="basic-addon2"
              >
                <i className="fa fa-close" onClick={clearInput}></i>
              </span>
            )}
        </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <div
                  onClick={() => history?.push(`/prod-details/${getFirstWord(value.title)}/${value.id}`,{data : value})}
                  style={{ textDecoration: "none" }}
                  className="dataItem"
                >
                    {value.img.map((ob,index) => {
                return (
                    <img alt={value.title} src={ob.imgf} width="20%" height="100%"/>
                );
                    })}
                  <p>{value.title}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
