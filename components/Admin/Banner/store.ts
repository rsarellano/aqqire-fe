import { ref } from "vue"
import type { FormKitFile } from "@formkit/inputs"
export const banners = ref([
  {
    id: 0,
    name: "New Gen",
    imageUrl:
      "https://s3-us-west-1.amazonaws.com/storage.aqqire.com/banner_pic/1502766609204-hotel3.jpg",
  },
  {
    id: 1,
    name: "Amber Hotels",
    imageUrl:
      "https://s3-us-west-1.amazonaws.com/storage.aqqire.com/banner_pic/1502766714443-hotel5.jpg",
  },
  {
    id: 2,
    name: "Leisure",
    imageUrl:
      "https://s3-us-west-1.amazonaws.com/storage.aqqire.com/banner_pic/1502766546944-hotel1.jpg",
  },
  {
    id: 3,
    name: "Test Company",
  },
])

export const addItem = ref<{
  name: string
  imageUrl?: FormKitFile[]
  id: number | null
}>({
  name: "",
  id: null,
  imageUrl: undefined,
})

// export const editBanner = (newItem: typeof addItem.value) => {
//   banners.value.forEach((item, index) => {
//     if (item.id === newItem.id) {
//       banners.value[index] = { ...newItem };
//       console.log(index, item, banners.value[index], "hit");
//     }
//   });
// };

// export const handleFileChange = (event: Event, fileRef: any) => {
//   console.log(addItem);
//   const file = event.
//   fileRef.imageUrl = URL.createObjectURL(file);
// };

export const deleteItem = (id: number) => {
  banners.value = banners.value.filter((item) => item.id !== id)
}
