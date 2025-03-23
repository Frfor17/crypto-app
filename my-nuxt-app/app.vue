<template>
  <div>
    <h1>Цена Bitcoin: {{ price }} USD</h1>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/bitcoin');
const price = data?.value?.bitcoin?.usd ?? 'Загрузка...';
</script>
