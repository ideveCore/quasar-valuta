<template>
  <q-page class="row items-center justify-evenly">
    <div class="row">
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
            v-model="currency.name"
            :options="currencies"
          />
        </div>
      </q-toolbar>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineOptions({
  name: 'IndexPage',
});

interface currency {
  code: string;
  name: string;
  flag: string;
}

const currencies = ref<currency[]>([
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'BGN', name: 'Bulgarian Lev', flag: '🇧🇬' },
  { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
  { code: 'CZK', name: 'Czech Koruna', flag: '🇨🇿' },
  { code: 'DKK', name: 'Danish Krone', flag: '🇩🇰' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'Pound sterling', flag: '🇬🇧' },
  { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰' },
  { code: 'HUF', name: 'Hungarian Forint', flag: '🇭🇺' },
  { code: 'IDR', name: 'Indonesian Rupiah', flag: '🇮🇩' },
  { code: 'ILS', name: 'Israeli New Shekel', flag: '🇮🇱' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
  { code: 'ISK', name: 'Icelandic Króna', flag: '🇮🇸' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'KRW', name: 'South Korean won', flag: '🇰🇷' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽' },
  { code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾' },
  { code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴' },
  { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿' },
  { code: 'PHP', name: 'Philippine Piso', flag: '🇵🇭' },
  { code: 'PLN', name: 'Poland złoty', flag: '🇵🇱' },
  { code: 'RON', name: 'Romanian Leu', flag: '🇷🇴' },
  { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'THB', name: 'Thai Baht', flag: '🇹🇭' },
  { code: 'TRY', name: 'Turkish lira', flag: '🇹🇷' },
  { code: 'USD', name: 'United States Dollar', flag: '🇺🇸' },
  { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦' },
]);
const currency = ref<currency>({
  code: 'AUD',
  name: 'Australian Dollar',
  flag: '🇦🇺',
});
</script>
