import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCurrentCounterStore = defineStore('currentCharacter', () => {
  const character = ref({
    name: 'Valar the Oathsmith'
  })
  function setName(newName: string) {
    character.value.name = newName
  }

  return { character, setName }
})
