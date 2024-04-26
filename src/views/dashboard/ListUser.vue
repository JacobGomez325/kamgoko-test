<template>
  <div>
    <crud-modal v-if="modal.showModal" :title="modal.title" @close="closeModal">
      <div class="w-[50vw] h-[60vh]">
        <form class="flex h-full flex-col justify-between" @submit.prevent="sendForm">
          <div class="form-group">

            <Vinput template="default" type="text" :required="true" placeholdere="Mike Assogba " label="Fullname"
              v-model="formData.name" />
            <Vinput template="default" type="Email" :required="true" placeholdere="demo@gmail.com" label="Email"
              v-model="formData.email" />
          </div>
          <div class="flex justify-end space-x-4 w-full">
            <button class="
            hover:bg-gray-500
            hover:text-white 
            bg-gray-200
              px-4 
              py-3
              rounded-md 
              text-sm
              mt-4
            text-textColor
              hover:opacity-80 
              transition-all 
              duration-75 " @click="closeModal">
              Annuler
            </button>
            <button class="
            bg-primary
            px-4 
            py-3
            rounded-md
            text-sm 
            mt-4 
            text-white 
            hover:opacity-80
            transition-all 
            duration-75 ">
              <span class="font-semibold " v-if="!loading">
                Ajouter
              </span>
              <span v-else class="flex justify-center items-center space-x-2">
                <span class=" px-4 font-semibold ">
                  chargement ...
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-center animate-spin" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>

            </button>

          </div>
        </form>
      </div>
    </crud-modal>

    <h2 class="text-lg font-semibold py-3">Users lists</h2>
    <nav class="flex space-x-2 my-4">
      <router-link to="#" class="text-textColor text-sm font-medium">Home /</router-link>
      <router-link to="#" class="text-textColor text-sm font-medium">User Management /</router-link>
      <router-link to="#" class="text-sm font-medium">Users lists </router-link>
    </nav>
    <main>
      <div class="shadow-md sm:rounded-lg bg-white p-5">
        <div class="flex justify-between items-center mb-3">
          <InputSearch v-model="search" />
          <button @click="addUser"
            class="text-white bg-primary px-3 py-2 hover:opacity-80 transition-all duration-200 rounded-md flex items-center space-x-2">
            <span>
              <IconPlus width="1.3em" height="1.3em" />
            </span>
            <span> Ajouter un utilisateur </span>
          </button>
        </div>

        <UserTable :datas="resultQuery" />
        <div class="py-3">
          <PaginationTable 
          :current="pagination.current" 
          :total="pagination.total"
          @next="next"
          @prev="prev"
         />
        </div>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive,onMounted,computed } from 'vue'
import UserTable from '@/components/crud/table/UserTable.vue'
import InputSearch from '@/components/crud/InputSearch.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import CrudModal from '@/components/crud/CrudModal.vue'
import Vinput from '@/components/crud/Vinput.vue'
import type { User, UserResponse } from '@/types/user'
import { createToast } from "mosha-vue-toastify"
import { useGetUser,useCreateUser } from '@/services/modules/user.service'
import PaginationTable from '@/components/crud/PaginationTable.vue'
import "mosha-vue-toastify/dist/style.css"
import {errors} from '@/utils/index'
const toast = (message:string,type: any) => {
  createToast(message,{type:type,timeout:2000})
}


onMounted(() => {
  
  getData()
 
  
})

// my data
const search = ref<string>('')
const loading = ref<boolean>(false)
const users = ref<UserResponse[]>([])
const modal = reactive({
  title: "Ajouter un utilisateur" as string,
  showModal: false as boolean
})

const formData = reactive<User>({
  name: '',
  email: '',
  gender: "female",
  status: "inactive"
})

const pagination = reactive({
  first:1,
  last:1,
  next:1,
  prev:1,
  current:1,
  total:10,
  per_page:10
})


const resultQuery = computed(() => {
  if(search.value){
    return users.value.filter((item:UserResponse)=>{
      return search.value.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v)) ||
      search.value.toLowerCase().split(' ').every(v => item.email.toLowerCase().includes(v)) 
    })
  }else{
    return users.value;
  }
    
}) 


function addUser() {
  modal.showModal = true
}
function closeModal() {
  formData.name = ''
  formData.email = ''
  modal.showModal = false
}

const prev = function() {
  if(pagination.current <= 1) {
      pagination.current = 1 
      getData(pagination.current)
  }
  else {
      pagination.current--
      getData(pagination.current)
  }
}
const next = function () {
  if (pagination.current < pagination.total) {
    pagination.current++
    getData(pagination.current)
  }
}

function sendForm() {
  if(loading.value === false ) {
    loading.value = true
    //creation user
      useCreateUser(formData).then((data:any) => {
        const response = data.data
        toast(response.message, 'success')
        getData()
        loading.value = false
        close()
      }).catch((error:any) => {
        loading.value = false
        errors(error)
      })
    }
}

const getData = function(page=1,) {
  useGetUser(page,pagination.per_page).then((data:any) => {
    const response:UserResponse[] = data.data
    users.value = response 
   
   
  })
}
</script>

<style scoped></style>