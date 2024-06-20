import { THEMOVIEDB_KEY } from '@env';
export const usefetchMovieDBData = async () => {

  console.log(THEMOVIEDB_KEY)

    try {
      
        const url = `https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${process.env.THEMOVIEDB_KEY}`

        const res = await fetch(url);
        
        const data = await res.json()
        
        return data
    }
    catch (error) {
        console.log(error)
    }

}