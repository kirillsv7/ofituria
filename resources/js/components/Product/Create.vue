<template>
  <div class="card">
    <div class="card-header">
      <router-link class="btn btn-primary" :to="{name: 'product.index'}">Product list</router-link>
    </div>
    <div class="card-body">
      <Form :product="product" :errors="errors"/>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary" @click="storeProduct()">Save</button>
    </div>
  </div>
</template>

<script>
import Form from "./Partials/Form";
import useProduct from "../../composable/product";

export default {
  components: {Form},
  setup() {
    const {product, storeProduct, errors} = useProduct()

    return {
      product,
      storeProduct,
      errors
    }
  }
}
</script>