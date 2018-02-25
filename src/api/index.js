
var GENERIC_ERROR = 'Oops. Something went wrong.'

export var commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

 export function handleErrors(response) {
   try {
     if (!response.ok) {
       return response.json().then(err => {
         return Promise.reject(err);
       })
     }
   } catch(err) {
     return Promise.reject(GENERIC_ERROR)
   }
   return response.json()
 }



// API used to fetch all list items
export async function getAllProducts() {
    return fetch(`https://api.myjson.com/bins/qhnfp`, {
        method: 'GET',
        headers: {...commonHeaders },
    }).then(handleErrors).then(response => {
        return Promise.resolve(response)
    })

}

export default {
    getAllProducts
}
