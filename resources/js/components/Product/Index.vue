<template>
  <div class="card">
    <div class="card-body">
      <div class="container">
        <table class="table table-borderless">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="product in products">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
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