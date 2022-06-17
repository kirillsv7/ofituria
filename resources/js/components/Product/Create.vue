<template>
  <div class="card">
    <div class="card-body">
      <Form :product="product"/>
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
    const {product, storeProduct} = useProduct()

    return {
      product,
      storeProduct
    }
  }
}
</script>