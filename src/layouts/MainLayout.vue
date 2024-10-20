<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-toolbar-title> Valuta Web </q-toolbar-title>
        <div class="q-gutter-md" style="min-width: 150px">
          <q-select
            standout
            dense
            dark
            borderless
            options-dense
            options-light
            bg-color="secondary"
            label-color="white"
            color="secondary"
            label="provider"
            v-model="provider_selected"
            :options="providers"
            @update:model-value="on_provider_change"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

interface provider {
  label: string;
  value: number;
}

const store = useStore();
const on_provider_change = (provider: provider) => {
  store.commit('setProvider', provider.value);
};

const providers = ref<provider[]>([
  { label: 'ECB', value: 0 },
  { label: 'Google', value: 1 },
  { label: 'Moeda.info', value: 2 },
]);
const provider_selected = ref<provider>(providers.value[0]);

defineOptions({
  name: 'MainLayout',
});
</script>
