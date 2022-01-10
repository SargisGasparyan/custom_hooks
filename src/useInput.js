import React from 'react'
const useInput=(initial,required)=>{
    const[value,setValue]=React.useState(initial)
    const[error,setError]=React.useState("")

    return {
        value,
        error,
        onChange: (e)=>setValue(e.target.value),
        onBlur: (e)=>{
            if (!e.target.value && required) setError("Required filed")
            else setError(null)
        },
    }
}
export default useInput