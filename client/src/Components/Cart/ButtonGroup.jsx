import {Button,ButtonGroup,styled} from '@mui/material'
import { Component } from 'react'

const ButtonStyle = styled(Button)`
border-radius:50%;

`
const Component11 = styled(ButtonGroup)`
margin-top:30px;
`

const GroupedButton = () => {
    return(
        <Component11>
            <ButtonStyle>-</ButtonStyle>
            <Button>1</Button>
            <ButtonStyle>+</ButtonStyle>
        </Component11>
    )
}
export default GroupedButton 