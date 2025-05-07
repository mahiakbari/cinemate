import { useEffect, useState } from "react";

export const useFetch = (apiPath,queryParam = "") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?query=${queryParam}&&language=en-US&page=1`;

      useEffect(()=>{
        const fetchData = async()=>{
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOThlMGVkNmM1ZjYyMjE1YjMzYmMyODFjNTQ0NmU2MSIsIm5iZiI6MS43NDY1OTc0Mjc1MzQwMDAyZSs5LCJzdWIiOiI2ODFhZjYzM2JkZDU5ZDZkMWY4NTA5MWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YDjvUs6YWl8qpAZA7VULNnY__oEzBAEnVcowyBL7Pbw'
              }
            };
            
            const response = await fetch(url, options)
            const data =  await response.json();
            console.log(data);
            setData(data.results)
          }
          fetchData();
      },[url])
  return {data}
}
