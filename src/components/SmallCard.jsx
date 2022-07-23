import React from 'react';
import PropTypes from 'prop-types';
import "../assets/css/smallCard.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SmallCard(props){
    return(
        <div className="col-md-4 mb-4">
<div className={`card border-left-${props.color} shadow h-100 py-2`}>
    <div className="card-body">
        <div className="row no-gutters align-items-center">
            <div className="col mr-2">
                <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.title}</div>
                <div className="cuantity">{props.cuantity}</div>
            </div>
            <div className="col-auto">
                <i className={`icon ${props.icon}`}></i>
                <FontAwesomeIcon icon={props.icon} />

            </div>
        </div>
    </div>
</div>
</div>
        
    )
}



// <div className="col-md-4 mb-4">
// <div className={`card border-left-${props.color} shadow h-100 py-2`}>
//     <div className="card-body">
//         <div className="row no-gutters align-items-center">
//             <div className="col mr-2">
//                 <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.title}</div>
//                <div className='contenedor'>
//                 <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cuantity}</div>
//             <div className="col-auto">
//              <i className={`fas ${props.icon} fa-2x text-gray-300`}></i> 
//                 <FontAwesomeIcon icon={props.icon} />
//             </div>
//              </div>
//              </div>
//         </div>
//     </div>
// </div>
// </div>



/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: 'No cuatity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

SmallCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default SmallCard;