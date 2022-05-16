import { userFetch } from "../config";
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";



const SelectedHero = () => {
      const imgStyle = {
          width: "80px",
      }

      const [user, setUser] = useState([])
      const [hero, setHero] = useState([])
      // debugger
      
      const hendlDelete =(idd) => {
        let heroId = hero.filter(el => el !== idd);
        setHero(heroId)
        localStorage.setItem('select', JSON.stringify(heroId))
      }
      
      useEffect(() => {
          let id = JSON.parse(localStorage.getItem('select')) 
          userFetch()
            .then(data => {
              setUser(data)
            })
            setHero(id)
        }, [])

    return (
        <ul >
            { user.filter(e => hero.includes(e.id)).map(el =>( 
                <li key={el.id} className='card-hero' >
                  {el.name.first}
                  <br/>
                  <div>
                      {el.species} <br/>
                  </div>
                  <ol>
                      {el.sayings.map((ell, index)=>{
                        if ( index < 5 ) {
                          return (<li key={index} >
                                {ell}
                              </li> )
                            } else {
                              return;
                            }}
                            )}  
                  </ol>
                  <br/>
                  <div className='mb-4'>
                    <img style={imgStyle} src={el.images.main} alt=""/> 
                  </div>          

                  <Button variant="primary" onClick={() => hendlDelete(el.id)} >Delete Hero</Button>
                </li>
            )  )  }


        </ul>
        )
}

export default SelectedHero;