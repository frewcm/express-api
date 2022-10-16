// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// import ClipLoader from "react-spinners/ClipLoader";

// const getData = async () => {
//   const response = await axios.get("https://rickandmortyapi.com/api/character");
//   return response.data;
// };

// function Test() {
//   const { data, isLoading, isFetching } = useQuery(["someList"], getData, {
//     staleTime: 30000,
//   });

//   console.log(isLoading, isFetching);

//   if (isLoading) {
//     return <ClipLoader size={100} />;
//   }

//   return (
//     <div>
//       <p></p>
//       <input type="text" placeholder="search character..." />
//       {data.results.map((character) => {
//         return (
//           <ul>
//             <li key={character.name}>{character.name}</li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// }

// export default Test;
import { atom, useAtom } from "jotai";

function Test() {
  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <p></p>
    </div>
  );
}

export default Test;
