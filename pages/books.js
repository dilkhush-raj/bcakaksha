
export const getStaticProps = async () => {

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}

// const Ninjas = ({ ninjas }) => {
//   return (
//     <div>
//       <h1>All Ninjas</h1>
//       {ninjas.map(ninja => (
//         <div key={ninja.id}>
//           <a>
//             <h3>{ ninja.name }</h3>
//           </a>
//         </div>
//       ))}
//     </div>
//   )
// }

export default function About() {
}