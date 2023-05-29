import React from 'react'

const Input = ({color,darktext,setColor,setDarktext}) => {
  return (
   <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='Colorinput'></label>
        <input
                type = "text"
                placeholder='Enter the  Color'
                autoFocus
                value={color}
                onChange={(e) =>setColor(e.target.value)}
            /><br/>
            <button onClick={() => setDarktext(!darktext)}>Togggle Text Color</button>
   </form>
        
    
  )
}

export default Input
