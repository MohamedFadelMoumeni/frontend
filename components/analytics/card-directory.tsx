import React from 'react'
import CardAnalytic from './card-analytic'

const CardDirectory = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-14">
        <CardAnalytic />
        <CardAnalytic />
        <CardAnalytic />
        <CardAnalytic />
        <CardAnalytic />

    </div>
  )
}

export default CardDirectory