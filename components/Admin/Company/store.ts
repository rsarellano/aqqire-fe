import { ref } from "vue"

type logo = {
  id: number
  name: string
  url: string
  imageUrl: string
}

export const featuredLogos = ref([
  {
    id: 0,
    name: "New Gen",
    url: "test",
    imageUrl:
      "https://s3-us-west-1.amazonaws.com/storage.aqqire.com/company_pic/1505951376363-NewGen%20Logo%20-%20blue.png",
  },
  {
    id: 1,
    name: "Amber Hotels",
    url: "test",
    imageUrl:
      "https://s3-us-west-1.amazonaws.com/storage.aqqire.com/company_pic/1505951297723-Amber%20Hotel%20Company%20-%20blue.png",
  },
  {
    id: 2,
    name: "Leisure",
    url: "test",
    imageUrl:
      "https://s3-us-west-1.amazonaws.com/storage.aqqire.com/company_pic/1505951359228-Leisure%20Real%20Estate%20logo.png",
  },
  {
    id: 3,
    name: "Test Company",
    url: "test",
  },
])

export const addItem = ref<Omit<logo, "id">>({
  imageUrl: "",
  name: "",
  url: "",
})

export const editLogo = (newItem: logo) => {
  featuredLogos.value.forEach((item, index) => {
    if (item.id === newItem.id) {
      featuredLogos.value[index] = { ...newItem }
    }
  })
}

export const handleFileChange = (event: Event, fileRef: Omit<logo, "id">) => {
  const target = event.target as HTMLInputElement
  const file = target?.files?.[0]
  fileRef.imageUrl = URL.createObjectURL(file!)
}

export const deleteItem = (id: number) => {
  console.log(id)
  featuredLogos.value = featuredLogos.value.filter((item) => item.id !== id)
}
