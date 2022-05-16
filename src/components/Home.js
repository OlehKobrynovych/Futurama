import { useState, useEffect } from "react";
import { userFetch } from "../config";
import SelectSpecies from "./SelectSpecies";
import ButtonScrole from "./ButtonScrole";
import { Form } from "react-bootstrap";

const imgStyle = {
  width: '50px'
}

const Home = ({setCount}) => { 
  const [user, setUser] = useState([])
  const [species, setSpecies] = useState('')
  const [search, setSearch] = useState('')
  const [age, setSearchAge] = useState('')
  const [selectUser, setSelectUser] = useState([])

 
// debugger
  const heandleUser = (id) => {
if (selectUser.indexOf(id) === -1 ) {
  setSelectUser([...selectUser, id])
  const hero = JSON.stringify([...selectUser, id])
  localStorage.setItem('select', hero)
} else {
  selectUser.splice(selectUser.indexOf(id), 1)
  setSelectUser([...selectUser])
  const hero = JSON.stringify([...selectUser])
  localStorage.setItem('select', hero)
}
}

useEffect(() => {
    return setCount(selectUser.length)
}, [selectUser])

  useEffect(() => {
    userFetch()
      .then(data => {
        setUser(data)
      })
      let hero = JSON.parse(localStorage.getItem('select')) 
  if(hero && hero.length){
    setSelectUser(hero)
  } 
    
  }, [])
 
  return (
    <div className="container">
      
      <SelectSpecies setSpecies={setSpecies} age={age} search={search} setSearch={setSearch} setSearchAge={setSearchAge}/>
          
      {user.length ? (
          <ul className='card-hero-wrapper' >
            {user.filter(el => el.age.toLowerCase().indexOf(age.toLowerCase()) !== -1 && el.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1 && el.species.toLowerCase().indexOf(species.toLowerCase()) !== -1 )
                .map((el,i) => (
                    <li className='card-hero' key={i} >
                      <h3>{el.name.first}</h3>
                      <Form >
                        <Form.Check 
                          type='checkbox'
                          id={`checkHero`}
                          label={`My Hero`}
                          onChange={()=>(heandleUser(el.id))}
                          checked={selectUser.includes(el.id)}
                        />
                      </Form>
                      <br/>
                      <div>
                          {el.species} 
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

                      <img style={imgStyle} src={el.images.main} alt=""/> 

                    </li>
            ))}
          </ul>
        ) : (
          <div> Not items</div>
          )
        }

         <ButtonScrole/>
    </div>
  )
};

export default Home