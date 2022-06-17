<template>
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
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  }
}
</script>