<template>

	<div class="relative overflow-x-auto">
		
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
			<thead class="text-xs text-gray-700 uppercase">
				<tr>
					<th scope="col" class="p-4 border-dashed border-b">
						<div class="flex items-center">
							<input id="checkbox-all-search" type="checkbox"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ">
							<label for="checkbox-all-search" class="sr-only">checkbox</label>
						</div>
					</th>
					<th scope="col" class="px-3 uppercase py-3 whitespace-nowrap text-textColor  border-dashed border-b">
						User
					</th>
					<th scope="col" class="px-3 uppercase py-3 whitespace-nowrap text-textColor  border-dashed border-b">
						Role
					</th>
					<th scope="col" class="px-3 uppercase py-3 whitespace-nowrap text-textColor  border-dashed border-b">
						Last login
					</th>
					<th scope="col" class="px-3 uppercase py-3 whitespace-nowrap text-textColor  border-dashed border-b">
						two-step
					</th>
					<th scope="col" class="px-3  uppercase py-3 whitespace-nowrap text-textColor  border-dashed border-b">
						Joined date
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user,index) in props.datas" :key="index" class="border-dashed border-b">
					
					<td class="w-4 p-4">
						<div class="flex items-center">
							<input id="checkbox-table-search-1" type="checkbox"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ">
							<label for="checkbox-table-search-1" class="sr-only">checkbox</label>
						</div>
					</td>
					<th scope="row" class=" py-4 font-medium text-gray-900 whitespace-nowrap ">
						<div class="flex space-x-1">
							<div class="cursor-pointer w-[100px] flex justify-center" >
            		<img src="/images/Avatar.png"  alt="img avatar" class=" object-cover w-[50%] ">
          		</div>
							<div class="flex flex-col space-y-2">
								<span>	{{ user.name }}</span>
								<span class="text-xs text-gray-400"> {{ user.email }}</span>
							</div>
						</div>
						
					</th>
					<td class="px-3 py-4 whitespace-nowrap text-sm">
						Admin
					</td>
					<td class="px-3 py-4 whitespace-nowrap text-sm">
						Time ago
					</td>
					<td class="px-3 py-4 whitespace-nowrap text-sm">
						<span class="bg-green-100 text-green-500 text-sm font-semibold px-3 py-2 rounded">Approved</span>
					</td>
					<td class="px-3 py-4 whitespace-nowrap text-sm">
						05 May 2024
					</td>
				</tr>
				
			</tbody>
		</table>
	</div>

</template>

<script setup lang="ts">
	import type { PropType } from 'vue'
	import type { UserResponse } from '@/types/user';
	const props = defineProps({
		datas:Array as PropType<UserResponse[]>,
	})
</script>

<style scoped></style>