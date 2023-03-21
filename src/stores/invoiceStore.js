import { defineStore } from "pinia";
import { doc, collection, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import db from '../firebase/firebaseInit'

export const useInvoiceStore = defineStore("invoiceStore", {
    state: () => ({
        invoiceData: [],
        invoiceModal: null,
        invoicesLoaded: null,
        modalActive: null,
        editInvoice: null,
        appLastUpdated: null,
    }),
    actions: {

    },
    getters: {

    },
})