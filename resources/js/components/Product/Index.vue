<template>
  <div class="card">
    <div class="card-header">
      <router-link class="btn btn-primary" :to="{name: 'product.create'}">Add product</router-link>
    </div>
    <div class="card-body">
      <table class="table table-borderless">
        <thead>
        <tr>
          <th>ID</th>
          <th class="w-25">Name</th>
          <th class="w-50">Description</th>
          <th>Price</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products">
          <td>{{ product.id }}</td>
          <td>
            <router-link :to="{name: 'product.show', params: {id: product.id}}">
              {{ product.name }}
            </router-link>
          </td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button class="btn btn-sm btn-close" @click="deleteProduct(product.id)"></button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import useProduct from "../../composable/product";

export default {
  setup() {
    const {products, getProducts, deleteProduct} = useProduct()

    onMounted(getProducts())

    return {
      products,
      deleteProduct
    }
  }
}
</script>