import { createToast } from "mosha-vue-toastify"
import "mosha-vue-toastify/dist/style.css"

const toast = (message:string,type: any) => {
  createToast(message,{type:type,timeout:2000})
}

export const errors = function(error :any) {
  if (error.response) {
    // Requête effectuée mais le serveur a répondu par une erreur.
    let message = ''
    if(error.response?.data?.message) {
      message = error.response?.data?.message
    } else if(error.response?.data?.errors) {
      const errors = error.response?.data?.errors
      errors.forEach((element:any) => {
        message = element.field + ' ' + element.message
      }) 
    }else {
      message = error.response?.data
    }
    
    const dataErrors = error?.response?.data?.errors
    if(Array.isArray(dataErrors)) {
      dataErrors.forEach((error:{message:string}) => {
        if(error.message ==='E_UNAUTHORIZED_ACCESS: Unauthorized access') {
          return window.location.href="/401-non-autorise"
        }
      })
    }
    console.log('1')
    toast(message, 'danger')
    } else if (error.request) {
      // Demande effectuée mais aucune réponse n'est reçue du serveur.
      toast(error.request, 'danger')
    } else {
    // Une erreur s'est produite lors de la configuration de la demande
    toast(error.message, 'danger')
  }
}