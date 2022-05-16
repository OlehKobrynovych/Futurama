import { Button } from "react-bootstrap";


const ButtonScrole = () => {
    const scrole =() => {
        return window.scrollTo(0,0)
    }
    return (
        <Button variant="primary" onClick={scrole} >Scrole Up</Button>
    )
}

export default ButtonScrole;