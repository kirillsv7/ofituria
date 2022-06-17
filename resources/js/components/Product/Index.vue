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
          <th>Description</th>
          <th>Price</th>
          <th>Created / Updated</th>
          <th>Actions</th>
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
            <span class="text-nowrap">{{ product.created_at }}</span><br>
            <span class="text-nowrap">{{ product.updated_at }}</span>
          </td>
          <td class="text-nowrap">
            <router-link class="btn btn-secondary me-1" :to="{name: 'product.edit', params: {id: product.id}}">Edit
            </router-link>
            <button class="btn btn-light" @click="deleteProduct(product.id)">Delete</button>
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