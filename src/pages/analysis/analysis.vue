<script setup lang="ts">
import CardSimple from './components/CardSimple.vue'
import CardStatisticsTransactions from './components/CardStatisticsTransactions.vue'
import CrmRevenueGrowth from './components/CrmRevenueGrowth.vue'
import CrmSalesAreaCharts from './components/CrmSalesAreaCharts.vue'
import CrmSessionsBarWithGapCharts from './components/CrmSessionsBarWithGapCharts.vue'
import EcommerceExpensesRadialBarCharts from './components/EcommerceExpensesRadialBarCharts.vue'
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 lg:col-span-9">
      <CardStatisticsTransactions class="h-100" />
    </div>
    <div class="col-span-12 lg:col-span-3">
      <EcommerceExpensesRadialBarCharts />
    </div>
    <div class="col-span-6 md:col-span-4 lg:col-span-2">
      <CrmSessionsBarWithGapCharts />
    </div>
    <div class="col-span-6 md:col-span-4 lg:col-span-2">
      <CrmSalesAreaCharts  />
    </div>
    <CardSimple />
    <div class="col-span-12 md:col-span-12 lg:col-span-4">
      <CrmRevenueGrowth  />
    </div>
  </div>
</template>
