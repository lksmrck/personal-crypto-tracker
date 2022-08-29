import React, {useState} from 'react'
import Input from '../../material UI/Input'
import { StyledForm } from './styled'
import { Button } from '@mui/material'

export default function Form() {

    const [inputText, setInputText] = useState("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("hey")
    }










    
  return (
    <StyledForm>
    <div className="form">   
     <Input 
        label="" 
        input = {{id: "test id",
            type: "text",
            value: inputText,
        onChange: handleInputChange,
        }}
        />   
          <Input 
        label="" 
        input = {{id: "test id",
            type: "text",
            value: inputText,
        onChange: handleInputChange,
        }}
        />   
          <Input 
        label="" 
        input = {{id: "test id",
            type: "text",
            value: inputText,
        onChange: handleInputChange,
        }}
        />   
        <div className="buttons-container">
        <Button>Add</Button>
        <Button>Back</Button>
        </div>
     </div>
     </StyledForm>
  )
}
