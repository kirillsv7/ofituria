<template>
  <div class="card">
    <div class="card-body">
      <Form :product="product"/>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary" @click="updateProduct(product.id)">Save</button>
    </div>
  </div>
</template>

<script>
import Form from "./Partials/Form";
import useProduct from "../../composable/product";
import {onMounted} from "vue";

export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },

  components: {Form},
  setup(props) {
    const {product, getProduct, updateProduct} = useProduct()

    onMounted(getProduct(props.id))

    return {
      product,
      updateProduct
    }
  }
}
</script>