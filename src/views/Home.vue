<template>
    <div class="flex flex-col space-y-4 px-4 mt-1">
      <Button color="green" class="w-max max-w-xs">
        <router-link :to="{ name: 'NewFireman' }" >
          Přidat člena
        </router-link>
      </Button>
      <div class='overflow-x-auto w-full'>
        <Table>
          <template v-slot:header>
            <TableHeaderCell>Jméno</TableHeaderCell>
            <TableHeaderCell text-align="text-center">Adresa</TableHeaderCell>
            <TableHeaderCell text-align="text-center">Datum narození</TableHeaderCell>
            <TableHeaderCell text-align="text-center">Kontakt</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </template>
          <tr v-for="fireman in firemen" :key="fireman.id">
            <TableCell>
              <div class="flex items-center space-x-3">
                <div>
                  {{ fullname(fireman) }}
                </div>
              </div>
            </TableCell>
            <TableAddressCell>
              {{ fireman.address.address }}
              <template v-slot:city>
                {{ fireman.address.city }}
              </template>
            </TableAddressCell>
            <TableCell>{{ formattedDate(fireman) }} ({{ age(fireman) }})</TableCell>
            <TableCell>
              <p v-for="contact in fireman.contacts">
                {{ contact }}
              </p>
            </TableCell>
            <TableCell>
              <router-link :to="{ name: 'EditFireman', params:{ id: fireman.id }}" >
                <p class="text-indigo-500">Upravit</p>
              </router-link>
            </TableCell>
          </tr>
        </Table>
      </div>
    </div>
</template>

<script>

import {ref} from 'vue'
import Button from "../components/Button.vue";
import Table from "../components/Tables/Table.vue";
import TableHeaderCell from "../components/Tables/TableHeaderCell.vue";
import TableCell from "../components/Tables/TableCell.vue";
import TableAddressCell from "../components/Tables/TableAddressCell.vue";

export default {
  components: {TableAddressCell, TableCell, TableHeaderCell, Table, Button},
  setup() {
    const firemen = ref([
      {
        id: 1,
        firstname: 'Lukas',
        lastname: 'Moravec',
        address: {
          city: 'Strahovice',
          address: 'Strahovice 157',
          zip: '747 30',
        },
        birth_date: '1999-05-21',
        contacts: ['+420 605 787 063'],
        hasJacket: true,
      }
    ]);

    const fullname = (fireman) => `${fireman.firstname} ${fireman.lastname}`;
    const fullAddress = (fireman) => `${fireman.address?.address}, ${fireman.address?.city}`;
    const formattedDate = (fireman) => `${new Date(fireman.birth_date).toLocaleDateString('cs')}`
    const age = (fireman) => {
      const now = new Date();
      const birth = new Date(fireman.birth_date);
      return new Date(now - birth).getUTCFullYear() - 1970;
    };

    return { firemen, fullname, fullAddress, age, formattedDate };
  }
}
</script>
