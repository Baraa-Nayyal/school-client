<script setup lang="ts">
const statistics = [
  {
    title: 'Sales',
    stats: '230k',
    icon: 'ri-cash-line',
    color: 'primary',
  },
  {
    title: 'Students',
    stats: '124',
    icon: 'ri-user-line',
    color: 'info',
  },
  {
    title: 'Divisions',
    stats: '8',
    icon: 'ri-building-line',
    color: 'error',
  },
  {
    title: 'Revenue',
    stats: '55.33k',
    icon: 'ri-cash-line',
    color: 'success',
  },
]
</script>

<template>
  <VCard title="Transactions">
    <template #append>
      <!-- <span class="text-sm text-disabled">Updated 1 month ago</span> -->
    </template>

    <VCardText>
      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="6"
          md="3"
        >
          <div class="d-flex">
            <VAvatar
              :color="item.color"
              variant="tonal"
              size="42"
              class="me-3"
            >
              <VIcon :icon="item.icon" />
            </VAvatar>

            <div class="d-flex flex-column">
              <span class="text-h5 font-weight-medium">{{ item.stats }}</span>
              <span class="text-sm">
                {{ item.title }}
              </span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
