
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";

    import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
   
    // Insert Keys Here

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
