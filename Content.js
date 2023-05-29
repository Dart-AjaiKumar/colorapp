import React from 'react'

const Content = ({color,darktext}) => {
  return (
   
        <section 
            id ="display" 
           style = {{
            backgroundColor:color,
            color : darktext ? "#000" : "#fff"
           }}
        > <p>{color ? color : "Empty Value"}</p>
        </section>
   
  )
}

export default Content
