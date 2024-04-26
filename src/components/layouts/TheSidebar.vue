<template>
  <div 
    class="h-screen 
      fixed 
      overflow-auto 
      bg-white 
      flex 
      flex-row 
      w-[25%]
      scrollbar-thumb-blue
      scrollbar-thumb-rounded
      scrollbar-track-blue-lighter
      scrollbar-w-2
      
      scrolling-touch"  
      id="main-nav">
      <div class="short-menu w-[25%] bg-secondary flex flex-col justify-between p-3">
        <div class="flex flex-col  items-center space-y-6 px-3">
          <span class="cursor-pointer hover:opacity-75 duration-200 transition-all"> <IconDashboard /></span>
          <span class="cursor-pointer hover:opacity-75 duration-200 transition-all">  <IconUser/></span>
          <span class="cursor-pointer hover:opacity-75 duration-200 transition-all"><IconStat/></span>
          <span class="cursor-pointer hover:opacity-75 duration-200 transition-all"><IconValidate/></span>
          <span class="cursor-pointer hover:opacity-75 duration-200 transition-all"><IconPlusDashboard/></span>
        </div>
        <div class="flex flex-col space-y-4 px-3 items-center">
          <span class="cursor-pointer hover:opacity-75 duration-200 transition-all">  <IconNotification /></span>
          <div class="cursor-pointer w-full flex justify-center" >
            <img src="/images/Avatar.png" alt="img avatar" class=" object-cover ">
          </div>
        </div>
      </div>
      <div class="bg-white shadow w-full px-4 py-6 flex flex-col justify-between">
        <div>
          <h3 class="font-semibold text-sm py-4">Comptes</h3>
          <div class="dashboard-link">
            <link-item title="Dashboard">  </link-item>
            <link-item title="Sections" link="/dashboard/sections">  </link-item>
            <link-item title="Categories" link="dashboard/categories"> </link-item>
            <link-item title="Labels" link="dashboard/labels">  </link-item>
            <link-item title="Roles" link="dashboard/roles"> </link-item>
          </div>
        </div>
        <div>
          <button 
            title="Déconnexion" 
            type="button" 
            @click="logout"
            class="bg-primary text-white w-full rounded-md py-2  px-3 hover:opacity-80 duration-200 transition-all" > 
            <span class="text-sm">Se déconnecter </span>
          </button>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  import LinkItem from './LinkItem.vue'
  import IconDashboard from '../icons/IconDashboard.vue'
  import IconUser from '../icons/IconUser.vue'
  import IconValidate from '../icons/IconValidate.vue'
  import IconStat from '../icons/IconStat.vue'
  import IconNotification from '../icons/IconNotification.vue'
  import IconPlusDashboard from '../icons/IconPlusDashboard.vue'
  import { useRouter} from 'vue-router'
  const router = useRouter()

  const logout = function() {

    setInterval(()=> {
      router.push('/')
    },3000)
    
  }
 
  
</script>

<style scoped>




.scrollbar-w-2::-webkit-scrollbar {
  width: 0.6rem;
  height: 0.4rem;
  cursor: pointer;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  background-color: #ccc;
  cursor: pointer;
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  background-color: #1270B0;
  cursor: pointer;
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0rem;
}

</style>