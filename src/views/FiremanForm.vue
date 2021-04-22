<template>
    <div class="flex flex-col items-center">
        <form @submit="formSubmit" class="flex flex-col w-full md:w-1/2 md:max-w-3xl space-y-4 p-4 md:p-2 " method="POST">
          <FormInput required type="text" name="firstname" label="Jméno" placeholder="Křestní jméno" v-model="fireman.fname" />
          <FormInput required type="text" name="lastname" label="Příjmení" placeholder="Příjmení" v-model="fireman.lname" />
          <FormInput type="text" name="birth_num" label="rodné číslo" placeholder="Rodné číslo" v-model="fireman.birth_num" />
          <FormInput type="text" name="address" label="Adresa" placeholder="Bydliště" v-model="fireman.address" />
          <FormInput type="text" name="contact" label="Kontakt" placeholder="Kontakt na rodiče" v-model="fireman.contact" />
          <FormInput type="text" name="insurance_card_number" label="Číslo pojištěnce" placeholder="Číslo pojištěnce" v-model="fireman.insurance_card_num" />
          <FormSelect name="insurance_company" label="Číslo pojišťovny" placeholder="Pojišťovna" v-model="fireman.insurance_company">
            <option value="111">VZP</option>
            <option value="201">VoZP</option>
            <option value="205">ČPZP</option>
            <option value="207">OZP</option>
            <option value="209">ZPŠ</option>
            <option value="211">ZPMV</option>
            <option value="213">RBP</option>
          </FormSelect>

          <Button type="submit" color="blue">
            Přidat
          </Button>
        </form>
    </div>
</template>
<script>

import { ref, watch } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import Button from "../components/Button.vue";
import FormInput from "../components/Forms/FormInput.vue";
import { Fireman } from '../models/Fireman.js';
import FormSelect from "../components/Forms/FormSelect.vue";

export default {
  components: {FormSelect, FormInput, Button},
  setup() {
    const router = useRouter();
    const route = useRoute();

    console.log(route.params);

    watch( () => route.params, () => {
      console.log(route.params);
    });

    const fireman = ref(new Fireman());
    const formSubmit = ($submit) => {
      $submit.preventDefault();
      // TODO: Add to firebase right here
      router.push({
          name: 'Home',
      });
    }

    return { fireman, formSubmit };
  },
}
</script>
