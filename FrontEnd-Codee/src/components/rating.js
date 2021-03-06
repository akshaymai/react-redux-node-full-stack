import React from 'react';
import PropeType from 'prop-types'

const Rating = ({value,text,color}) => {
    //  console.log('value',value)
    return  (
        <div className='rating'>
            <span> 
                <i style={{color}} className={value>=1 ? 'fas fa-star': value >=0.5 ? 'fas fa-star-half-alt' :'far fa-star'}></i >         
            </span>
            <span> 
           <i style={{color:color}} className={value>=2 ? 'fas fa-star': value >=1.5 ? 'fas fa-star-half-alt' :'far fa-star'}></i  >
           </span>
           <span> 
                <i style={{color:color}} className={value>=3 ? 'fas fa-star': value >=2.5 ? 'fas fa-star-half-alt' :'far fa-star'}></i >
            </span>
            <span> 

                <i style={{color:color}} className={value>=4 ? 'fas fa-star': value >=3.5 ? 'fas fa-star-half-alt' :'far fa-star'}></i >
            </span>
            <span> 

                <i style={{color:color}} className={value>=5 ? 'fas fa-star': value >=4.5 ? 'fas fa-star-half-alt' :'far fa-star'}></i>
            </span>

    <span style={{marginLeft:'8px'}}> {text && text}</span>
        </div>
    );
}

Rating.defaultProps={
    color:'#f8e825'
}

Rating.propeTypes={

    color:PropeType.number,
    value:PropeType.number.isRequired,
    text:PropeType.string.isRequired


}
export default Rating;