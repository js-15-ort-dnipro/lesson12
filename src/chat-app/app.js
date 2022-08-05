
    import {createApp} from 'https://unpkg.com/vue@3.2.33/dist/vue.esm-browser.prod.js';
    
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

    import { getFirestore } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
   


    //Insert Firestore Keys Here

    
   
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
