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
            v-model="provider"
            :options="providers"
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

defineOptions({
  name: 'MainLayout',
});

const providers = ref<string[]>(['Google', 'ECB', 'Moeda.info']);
const provider = ref<string>('Google.com');
</script>
