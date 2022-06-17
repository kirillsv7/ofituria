<template>
  <div class="card">
    <div class="card-body">
      <table class="table table-borderless">
        <tbody>
        <tr>
          <th scope="row">ID</th>
          <td>{{ product.id }}</td>
        </tr>
        <tr>
          <th scope="row">Name</th>
          <td>{{ product.name }}</td>
        </tr>
        <tr>
          <th scope="row">Description</th>
          <td>{{ product.description }}</td>
        </tr>
        <tr>
          <th scope="row">Price</th>
          <td>{{ product.price }}</td>
        </tr>
        <tr>
          <th scope="row">Created</th>
          <td>{{ product.created_at }}</td>
        </tr>
        <tr>
          <th scope="row">Updated</th>
          <td>{{ product.updated_at }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import useProduct from "../../composable/product";
import {onMounted} from "vue";

export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },

  setup(props) {
    const {product, getProduct} = useProduct()

    onMounted(getProduct(props.id))

    return {
      product
    }
  }
}
</script>