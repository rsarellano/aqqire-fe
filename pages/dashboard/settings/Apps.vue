<template>
  <div class="h-full lg:p-6">
    <div
      class="h-full px-2 py-4 space-y-5 text-gray-700 rounded md:px-7 lg:p-6 lg:px-12 bg-slate-100">
      <h1 class="text-3xl font-bold text-center md:text-left">Connected Apps</h1>

      <TabView>
        <TabPanel>
          <template #header>
            <h2 class="text-sm font-medium whitespace-nowrap">View All</h2>
          </template>

          <!--  Main Content -->
          <div class="flex flex-wrap gap-4">
            <BrokerAppsCard
              v-for="(item, key) in data"
              :key="key"
              :title="item.title"
              :rating="item.rating"
              :description="item.description" />
          </div>
        </TabPanel>
        <TabPanel>
          <template #header>
            <h2 class="text-sm font-medium whitespace-nowrap">Utility</h2>
          </template>
          <div class="flex flex-wrap gap-4">
            <BrokerAppsCard
              v-for="(item, key) in utility"
              :key="key"
              :title="item.title"
              :rating="item.rating"
              :description="item.description" />
          </div>
        </TabPanel>
        <TabPanel>
          <template #header>
            <h2 class="text-sm font-medium whitespace-nowrap">Marketing</h2>
          </template>
          <div class="flex flex-wrap gap-4">
            <BrokerAppsCard
              v-for="(item, key) in marketing"
              :key="key"
              :title="item.title"
              :rating="item.rating"
              :description="item.description" />
          </div>
        </TabPanel>
        <TabPanel>
          <template #header>
            <h2 class="text-sm font-medium whitespace-nowrap">Development</h2>
          </template>
          <div class="flex flex-wrap gap-4">
            <BrokerAppsCard
              v-for="(item, key) in development"
              :key="key"
              :title="item.title"
              :rating="item.rating"
              :description="item.description" />
          </div>
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script setup lang="ts">
  const data = ref([
    {
      title: "Productivity Tracker App",
      description:
        "An app to help users track their productivity and manage their tasks efficiently.",
      rating: 4.7,
      category: "Utility",
    },
    {
      title: "Social Media Marketing Campaign Manager",
      description:
        "A tool for businesses to manage and analyze their social media marketing campaigns effectively.",
      rating: 4.5,
      category: "Marketing",
    },
    {
      title: "Web Development Framework",
      description:
        "A framework designed to simplify a nd streamline the process of web development.",
      rating: 4.8,
      category: "Development",
    },
    {
      title: "Email Marketing Automation Software",
      description:
        "Automate your email marketing campaigns with ease using our powerful software solution.",
      rating: 4.6,
      category: "Marketing",
    },
    {
      title: "Utility Bill Payment App",
      description:
        "Pay your utility bills conveniently with our user-friendly mobile app.",
      rating: 4.9,
      category: "Utility",
    },
    {
      title: "Software Development IDE",
      description:
        "An integrated development environment tailored for software developers.",
      rating: 4.7,
      category: "Development",
    },
  ]);

  const marketing = computed(() =>
    data.value.filter((item) => item.category === "Marketing")
  );
  const utility = computed(() =>
    data.value.filter((item) => item.category === "Utility")
  );
  const development = computed(() =>
    data.value.filter((item) => item.category === "Development")
  );
</script>
