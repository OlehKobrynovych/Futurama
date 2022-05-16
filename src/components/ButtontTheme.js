import {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'

const ButtontTheme = () => {
    
    const [theme, setTheme] = useState('light')

    const hendlTheme = () => {
      return  setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        return document.body.setAttribute('date-theme', theme)
}, [theme])

    return (
        <Button variant="outline-warning" onClick={hendlTheme} >Theme</Button>
    )
}


export default ButtontTheme;