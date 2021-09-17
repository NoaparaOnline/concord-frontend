import React from 'react';
import PropTypes from 'prop-types'
import './TableDash.css'
import search from '../../../Statics/assets/G1.png'
import filter from '../../../Statics/assets/F1.png'
import { useHistory } from "react-router-dom";
const TableDash = ({ cols, data, bordered, hoverable, striped, isDark }) => {
    let history = useHistory();
    return (
        <div className="container style_custom" style={{ backgroundColor: '#FFF', borderRadius: '10px', width: '96%', padding: '20px', height: '100%' }}>

             <div class="search-box mb-2" style={{width: '240px'}} >
                <form style={{border:'1px solid #707070',borderRadius:'10px' }}>
                <button style={{ background:'transparent',border:'none'}}><img src={search} alt="" /></button>
                <input type="text" placeholder="Search" />
                <button style={{ background:'transparent',border:'none'}}><img src={filter} alt="" /></button>
                </form>
            </div>

            <div class="table-responsive">
                <table className={`table ${bordered ? 'table-bordered' : 'table-borderless'} ${hoverable && 'table-hover'} ${striped && 'table-striped'} ${isDark && 'table-dark'}`}>
                    <thead style={{ borderBottom: 'hidden', borderTop: 'hidden' }}>
                        <tr style={{ border: 'none', color: '#707070', fontWeight: '500',fontSize: '18px'}}>
                            {cols.map((headerItem, index) => (
                                <th key={index}>{headerItem.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} style={{ border: 'none' }}
                            onClick={() => history.push('/depotmanager-dashboard')}
                            >
                                {cols.map((col, key) => (
                                    
                                    <td key={key} style={{ border: 'none' }}>{col.render(item)}</td>
                                    
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

TableDash.propTypes = {
    cols: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    bordered: PropTypes.bool,
    hoverable: PropTypes.bool,
    striped: PropTypes.bool,
    isDark: PropTypes.bool,
}

TableDash.defaultProps = {
    bordered: true,
    hoverable: false,
    striped: false,
    isDark: false,
}

export default TableDash;