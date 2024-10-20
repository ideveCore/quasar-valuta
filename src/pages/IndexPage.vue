<template>
  <q-page class="row items-center justify-evenly">
    <div class="row justify-center">
      <q-toolbar>
        <q-toolbar-title> From </q-toolbar-title>
        <div class="q-gutter-md" style="min-width: 100px">
          <q-select
            standout
            dense
            borderless
            options-dense
            options-light
            outline
            color="secondary"
            label="currency"
            v-model="from_currency"
            :options="currencies"
            option-value="code"
            option-label="name"
            option-disable="inactive"
            emit-value
            map-options
          />
        </div>
      </q-toolbar>
      <div class="row">
        <q-btn round color="primary" icon="swap_vert" />
      </div>
      <q-toolbar>
        <q-toolbar-title> To </q-toolbar-title>
        <div class="q-gutter-md" style="min-width: 100px">
          <q-select
            standout
            dense
            borderless
            options-dense
            options-light
            outline
            color="secondary"
            label="currency"
            v-model="to_currency"
            :options="currencies"
            option-value="code"
            option-label="name"
            option-disable="inactive"
            emit-value
            map-options
          />
        </div>
      </q-toolbar>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';

interface currency {
  code: string;
  name: string;
  flag: string;
}

const store = useStore();
let currencies = ref<currency[]>([]);
const provider_state = computed(() => store.state.provider);

defineOptions({
  name: 'IndexPage',
});

onMounted(async () => {
  const set_currencies_list = async (provider: number) => {
    try {
      const currencies_response = await fetch('/valuta_currencies.json');
      const currencies_data = await currencies_response.json();
      currencies.value = Object.keys(currencies_data)
        .map((currency) =>
          currencies_data[currency].providers.includes(provider)
            ? currencies_data[currency]
            : null
        )
        .filter((currency) => currency !== null);
    } catch (error) {
      console.log(error);
    }
  };

  set_currencies_list(0);
  watch(provider_state, (new_value) => {
    set_currencies_list(new_value);
  });
});

const from_currency = ref<currency>({
  code: 'AUD',
  name: 'Australian Dollar',
  flag: '🇦🇺',
});
const to_currency = ref<currency>({
  code: 'AUD',
  name: 'Australian Dollar',
  flag: '🇦🇺',
});
</script>
