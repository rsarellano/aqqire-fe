const reset = {
  id: -1,
  testimonial: "",
  company: "",
  position: "",
  name: "",
};

export const addTestimony = ref({ ...reset });
export const modal = ref(false);
export const mode = ref<"edit" | "add">("edit");

export const testimonials = ref([
  {
    id: 0,
    testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum
      perferendis id quis beatae reiciendis deserunt voluptatum. Minima iusto
      amet, error recusandae odio vero incidunt? Reprehenderit odit eligendi sit
      consectetur ex doloribus voluptates commodi praesentium officia nesciunt
      et beatae ullam aperiam tenetur repellat est blanditiis minima ipsa, quo
      ut mollitia quas incidunt molestiae. Laboriosam, facere animi! Repudiandae
      nihil sequi blanditiis repellat rerum odit expedita. Totam cumque natus,
      repellat neque voluptatibus quod laudantium consectetur, porro sequi
      reiciendis aperiam dignissimos earum, fugit beatae tenetur deleniti culpa
      debitis ratione tempora omnis suscipit. Ad quas vitae explicabo minima
      mollitia nostrum quisquam quam sint. Nisi!`,
    company: "Unnamed",
    position: "CEO",
    name: "John  Wiles",
  },
  {
    id: 1,
    testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum
      perferendis id quis beatae reiciendis`,
    company: "Perpetual Income & Growth Investment Trust PLC",
    position: "CEO",
    name: "HUBERT BLAINE  SR",
  },
  {
    id: 2,
    testimonial: `Great Product`,
    company: "Syria Inc",
    position: "CEO",
    name: "Amy Ortega",
  },
]);

// Methods
export const addTestimonial = () => {
  const item = { ...addTestimony.value, id: testimonials.value.length };
  testimonials.value.push(item);
  addTestimony.value = { ...reset };
  modal.value = false;
};

export const setValue = (id: number) => {
  let index = testimonials.value.find((testimonial) => testimonial.id === id);

  // Use index to modify value
  if (index) {
    addTestimony.value = { ...testimonials.value[id] };
  }
};

export const changeValue = () => {
  testimonials.value[addTestimony.value.id] = {
    ...addTestimony.value,
  };
  addTestimony.value = { ...reset };
  modal.value = false;
};
