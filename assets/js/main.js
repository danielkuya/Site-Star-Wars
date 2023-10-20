import { subscriptionHellfireClub } from './firebase/helfire-club.js'
import { getHellfiresubscription } from './firebase/helfire-club.js'

//var de cada camp do form
const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

//add um evento ao buttom
btnSubscribe.addEventListener('click', async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value
  }
  //salvar as infor
  const subscriptionId = await subscriptionHellfireClub(subscription)
  console.log(`Escrito com Sucesso${subscriptionId}`)
  //limpa os campos assim que enviar para o firebasee
  name.value = ''
  email.value = ''
  level.value = ''
  character.value = ''
})

//quando a tela carregarvai mostras as infomações la do banco de dados
async function loadDate() {
  const subscriptions = await getHellfiresubscription()
  console.log(subscriptions)
}
loadDate()
