// const BASE_URL = 'https://restcountries.com/v2/';

// export const ALL_COUNRI = BASE_URL + 'all';

// export const searchByCountri = (name) => { BASE_URL +'/name/'+name}


// export const filterByCode = (codes) => { BASE_URL +'/alpha?codes=/'+codes.join('')}





// export const userFetch = () => {
//   return fetch('https://api.sampleapis.com/futurama/characters')
//       .then(resp => resp.json())
//       .catch(err => console.log('error'))
// }

export const userFetch = async () => {
    try {
        const res = await fetch('https://api.sampleapis.com/futurama/characters')
        const data = res.json()
        return data 
    } catch(error) {
        console.log('error')
    }
}


