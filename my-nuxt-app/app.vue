<template>
  <div>
    <h1>Калькулятор</h1>
    <input v-model.number="num1" type="number" placeholder="Первое число" />
    <select v-model="operation">
      <option value="add">+</option>
      <option value="subtract">-</option>
      <option value="multiply">*</option>
      <option value="divide">/</option>
    </select>
    <input v-model.number="num2" type="number" placeholder="Второе число" />
    <button @click="calculate">Вычислить</button>
    <h2>Результат: {{ result }}</h2>
  </div>
</template>

<script setup>
const num1 = ref(0);
const num2 = ref(0);
const operation = ref('add');
const result = ref(null);

async function calculate() {
  const { data } = await useFetch('/api/calculate', {
    method: 'POST',
    body: {
      num1: num1.value,
      num2: num2.value,
      operation: operation.value
    }
  });
  result.value = data.value.result;
}
</script>