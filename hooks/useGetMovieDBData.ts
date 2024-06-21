import { THEMOVIEDB_KEY } from '@env';
export const usefetchMovieDBData = async () => {


    try {
      
        //const url = `https://api.themoviedb.org/3/search/movie?query=comedy?&api_key=${process.env.THEMOVIEDB_KEY}`
        const url = `https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${process.env.THEMOVIEDB_KEY}`

        /*
        const options = {
            headers: {
              "User-Agent": `weather app practice, email: ${process.env.CONTACT_INFO}`,
            },
          };
        */
        const res = await fetch(url);
        
        const data = await res.json()
        
        return data
    }
    catch (error) {
        console.log(error)
    }

}