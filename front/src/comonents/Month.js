import React from 'react'

/*this section indicates the  present month */ 
let curDate = new Date();
const month = ['Jan','Feb','March','Apr','May','Jun','Jully','Aug','Sep','Oct','Nov','Dec'];
const curMonth = month[curDate.getMonth()]

 export default function Month() {
      return (
            <div>
               <h3 className="center">Plan for The Month Of <strong className="color">{curMonth}</strong></h3>
            </div>
      )
}
