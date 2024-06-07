import React from 'react'

const FilterGroup = ({Rating, onRatingClick, ratingList}) => {
  return (
    <ul className="align_center movie_filter">
        {

        ratingList.map( rate => (
            <li className={Rating === rate ? "movie_filter_item active" : "movie_filter_item"} key={rate} onClick={() => {
                onRatingClick(rate)
            }}>{rate}+ Star</li>
        ))
        }
        
                    
                </ul>
  )
}

export default FilterGroup