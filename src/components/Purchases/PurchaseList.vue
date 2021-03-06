<template>
  <v-data-table
    :loading="loading"
    :headers="headers"
    :items="purchasesList"
    class="elevation-1"
    hide-actions
    no-data-text="Nenhuma compra cadastrada"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.nfe }}</td>
      <td class="text-xs-center">{{ props.item.issueDate | formatedDate }}</td>
      <td class="text-xs-center" style="width: 120px">
        <v-menu offset-y nudge-left="25%" full-width class="n-menu" color="red">
          <v-chip
            slot="activator"
            class="n-chip"
            :color="statusColor(props.item.status)"
            small
            block
            outline
          >{{ statusText(props.item.status) }}
          </v-chip>
          <v-list class="list-bg">
            <v-list-tile
              v-for="(status, i) in purchaseStatus"
              :key="i"
              @click="editPurchaseStatus(props.item, status.value)"
            >
              <v-chip
                class="n-chip"
                :color="statusColor(status.value)"
                small
                outline
              >{{ status.name }}</v-chip>
            </v-list-tile>
          </v-list>
        </v-menu>
      </td>
      <td class="text-xs-center">{{ props.item.total | currencyBRL }}</td>
      <td style="width: 120px">
        <v-layout row>
          <v-icon @click="showPurchase(props.item)" v-text="`visibility`" small></v-icon>
          <v-spacer></v-spacer>
          <v-icon
            v-text="`edit`"
            :class="{ 'hide-icon': props.item.status === 'confirmed' }"
            :disabled="props.item.status === 'confirmed'"
            @click="editPurchase(props.item)"
            small
          ></v-icon>
          <v-spacer></v-spacer>
          <v-icon
            v-text="`delete`"
            :class="{ 'hide-icon': props.item.status === 'confirmed' }"
            :disabled="props.item.status === 'confirmed'"
            @click="deleteItem(props.item)"
            small
          ></v-icon>
        </v-layout>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    purchasesList: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    headers: [
      { text: 'NFE'.toUpperCase(), align: 'center', sortable: false, value: 'nfe' },
      { text: 'Data de emissão'.toUpperCase(), align: 'center', sortable: false, value: 'issueDate' },
      { text: 'Status'.toUpperCase(), align: 'center', sortable: false, value: 'status' },
      { text: 'Valor'.toUpperCase(), align: 'center', sortable: false, value: 'value' },
      { text: 'Ações'.toUpperCase(), align: 'center', sortable: false, value: 'actions' }
    ],
    purchaseStatus: [
      { 'name': 'cancelado', value: 'canceled' },
      { 'name': 'pendente', value: 'pending' },
      { 'name': 'confirmado', value: 'confirmed' }
    ]
  }),

  methods: {
    statusColor (status) {
      switch (status) {
        case 'confirmed':
          return 'success'
        case 'pending':
          return 'warning'
        case 'canceled':
          return 'error'
      }
    },
    statusText (status) {
      switch (status) {
        case 'confirmed':
          return 'confirmado'
        case 'pending':
          return 'pendente'
        case 'canceled':
          return 'cancelado'
      }
    },
    showPurchase (item) {
      this.$emit('showPurchase', item)
    },
    editPurchaseStatus (item, status) {
      const { _id } = item
      const payload = { _id, status }
      this.$emit('editPurchaseStatus', payload)
    },
    editPurchase (item) {
      this.$emit('editPurchase', item)
    },
    deleteItem (item) {
      this.$emit('deletePurchase', item)
    }
  }
}
</script>

<style lang="scss">
.hide-icon {
  opacity: .3;
}

.n-chip {
  cursor: pointer;
  width: 100%!important;
  display: flex;
  justify-content: center;
}

.n-chip .v-chip__content {
  cursor: pointer;
}

// .theme--light,
// .theme--dark {
//   &.list-bg {
//     background: var(--accent);
//   }
// }
</style>
