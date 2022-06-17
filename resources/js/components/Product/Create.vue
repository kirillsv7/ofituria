<template>
  <div class="card">
    <div class="card-body">
      <table class="table table-borderless">
        <tbody>
        <tr>
          <th scope="row">Name</th>
          <td><input class="form-control" v-model="product.name"></td>
        </tr>
        <tr>
          <th scope="row">Description</th>
          <td><textarea class="form-control" v-model="product.description"/></td>
        </tr>
        <tr>
          <th scope="row">Price</th>
          <td><input class="form-control" v-model="product.price"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary" @click="storeProduct()">Save</button>
    </div>
  </div>
</template>

<script>
import useProduct from "../../composable/product";

export default {
  setup() {
    const {product, storeProduct} = useProduct()

    return {
      product,
      storeProduct
    }
  }
}
</script>