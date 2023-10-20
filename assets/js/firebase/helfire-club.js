import app from './app.js'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscriptionHellfireClub(subscription) {
  //importando do firebase
  //pega as informações de subcription e cria um doc no fibebase na collection hellfire-club
  const db = getFirestore(app)
  const hellfireClubcollection = collection(db, 'hellfire-club')
  const docRef = await addDoc(hellfireClubcollection, subscription)
  return docRef.id
}

export async function getHellfiresubscription() {
  const db = getFirestore(app)
  const hellfireClubcollection = collection(db, 'hellfire-club')
  const hellfireClubcollectionSnapshot = await getDocs(hellfireClubcollection)
  const subscription = hellfireClubcollectionSnapshot.docs.map(doc =>
    doc.data()
  )
  return subscription
}
