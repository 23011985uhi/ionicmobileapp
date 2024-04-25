/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */



// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
import {firebaseApp} from '../../src/app/shared/firebaseconfig'
admin.firebaseApp // Initialize Firebase Admin SDK

exports.assignIdOnWrite = functions.database.ref('/tab2/chatrooms').onWrite(async (change, context) => {
  const afterData = change.after.val(); // Get data of the newly written data

  // Check if a new "child" is being added (no key present)
  if (!Object.keys(afterData).length) {
    const ref = admin.database().ref('/tab2/chatrooms').push(); // Use push() to create a new child node with a unique key
    const newId = ref.key; // Extract the automatically generated key
    
    // Update the newly written data with the generated ID as a property within the data
    await change.after.ref.set({ ...afterData, id: newId });
    console.log(`Assigned ID ${newId} to newly created data.`);
  } else {
    console.log('Data already has an ID (or multiple entries are being written). Skipping ID assignment.');
  }
});