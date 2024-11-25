<script setup lang="ts">
const simpleStatisticsDemoCards = [
  {
    icon: 'ri-cash-line',
    color: 'error',
    title: 'Total Profit',
    subTitle: 'Last week',
    stat: '1.28k',
    change: '-12.2%',
  },
  {
    icon: 'ri-user-line',
    color: 'info',
    title: 'Total Sales',
    subTitle: 'Last week',
    stat: '$4,673',
    change: '+25.2%',
  },
]
</script>

<template>
  <div
    v-for="demo in simpleStatisticsDemoCards"
    :key="demo.title"
    class="col-span-6 md:col-span-2"
  >
    <VCard>
      <VCardText>
        <VAvatar
          :color="demo.color"
          variant="tonal"
          rounded
          size="42"
        >
          <VIcon :icon="demo.icon" />
        </VAvatar>

        <h5 class="text-h5 mt-4">
          {{ demo.title }}
        </h5>
        <p class="text-sm text-disabled my-1 mb-0">
          {{ demo.subTitle }}
        </p>
        <p class="mb-3">
          {{ demo.stat }}
        </p>
        <VChip
          color="disabled"
          label
        >
          {{ demo.change }}
        </VChip>
      </VCardText>
    </VCard>
  </div>
</template>
