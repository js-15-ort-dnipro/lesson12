
    import {createApp} from  "https://unpkg.com/vue@3.2.37/dist/vue.esm-browser.js"; 

    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";

    import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
   
    // Insert Keys Here

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);

