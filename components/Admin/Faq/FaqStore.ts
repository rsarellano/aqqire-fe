import { ref } from "vue";

// export const faqItem = ref({
//   question: "",
//   answer: "",
//   order: "",
// });

export const faqList = ref([
  {
    id: 1,
    question: "How is this free?",
    answer: "AQQIRE generates revenue from advertising and marketing services.",
  },
  {
    id: 2,
    question: "Will AQQIRE charge me a comission fee?",
    answer:
      "Nope. Since we are not brokers, we do not make comission on any property sold on the site.",
  },
  {
    id: 3,
    question: "Is AQQIRE a brokerage firm?",
    answer:
      "Nope. AQQIRE is a platform used by brokers, investors and other commercial real estate and business professionals. We help CRE and Business buyers find acquisitions and we help sellers reach those buyers.",
  },
  {
    id: 4,
    question: "Why would I pay for a paid membership?",
    answer:
      "Pro members on AQQIRE get added exposure for their properties, their companies, and for themselves. Free members get distributed in one email for free, while paid members are distributed in multiple emails and other channels such as social media.",
  },
]);

export const deleteFaq = (index: number) => {
  faqList.value = faqList.value.filter((item) => {
    return index !== item.id;
  });
};

export const changeValue = (value: {
  question: string;
  answer: string;
  id: number;
}) => {
  // Find index of the question in array
  const index = faqList.value.findIndex((question) => question.id === value.id);
  // Use index to modify value
  if (index !== -1)
    faqList.value[index] = {
      question: value.question,
      answer: value.answer,
      id: value.id,
    };
};
