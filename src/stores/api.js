import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', () => {
	const apiURL = ref('https://pet-center-stage.axfone.eu/api/v1')
	const apiToken = ref('Basic bWlyYW5kYS1hcGk6WDJxeHp1WEZhSg==')
	const requestHeaders = computed(() => {
		return {
			Authorization: `${apiToken.value}`,
			'Content-Type': 'application/json',
		}
	})

	const fetchData = (url) => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await fetch(`${apiURL.value}${url}`, {
					method: 'GET',
					headers: requestHeaders.value,
				})
				const { data } = await response.json()
				console.log(data)
				resolve(data)
			} catch (error) {
				reject(error)
			}
		})
	}
	return { apiURL, fetchData }
})
