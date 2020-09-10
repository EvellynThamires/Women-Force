import React, { useState } from 'react'
import firebase from './plugins/firebase'

export default () => {

  const [name, setName] = useState('')
  const [firstQuestion, setFirstQuestion] = useState('')

  const sendAvaliation = () => {
    const avaliation = firebase.firestore().collection('avaliations')
    avaliation.doc().set({
      name,
      firstQuestion,
      // secondQuestion,
      // thirdQuestion,
      // fourthQuestion,
      // fifthQuestion,
      // sixthQuestion,
      // score,
      // recomendation,
      // comments
    })
    .then(() => {
      console.log("Enviado")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <label>Nome</label>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        <label>Primeira questão</label>
        <br />
        <input type='radio' name='firstQuestion' id='sim' value='sim' onChange={(e) => setFirstQuestion(e.target.value)} />
        <label for='sim'>Sim</label>
        <input type='radio' name='firstQuestion' id='nao' value='nao' onChange={(e) => setFirstQuestion(e.target.value)} />
        <label for='nao'>Não</label>
        <br />
        {firstQuestion}
      </div>
      <button onClick={sendAvaliation}>Enviar</button>
    </div>
  )
}

// export default () => {
  
//   const [recomendation, setRecomendation] = useState([])

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection('avaliations')
//       .get()
//       .then((querySnapshot) => {
//         setRecomendation(
//           querySnapshot.docs
//           .map((i) => ({ ...i.data(), idDoc: i.id }))
//         )
//       })
//   }, [])
  
//   return (
//     <>
//       <h1>Recomendações</h1>
//       <ul>
//         {recomendation.map((i, index) => {
//           return(
//             <li key={index}>Nome: {i.name}
//             <br />
//             Questão: {i.firstQuestion}
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }