<template>
  <table class="table table-borderless">
    <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>
        <input class="form-control" :class="{'is-invalid': errors.name}" v-model="product.name">
        <div class="invalid-feedback" v-if="errors.name">
          <template v-for="error in errors.name">
            {{ error }}
          </template>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Description</th>
      <td>
        <textarea class="form-control" v-model="product.description"/>
        <div class="invalid-feedback" v-if="errors.description">
          <template v-for="error in errors.description">
            {{ error }}
          </template>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Price</th>
      <td>
        <input class="form-control" :class="{'is-invalid': errors.price}" v-model="product.price">
        <div class="invalid-feedback" v-if="errors.price">
          <template v-for="error in errors.price">
            {{ error }}
          </template>
        </div>
      </td>
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
    },
    errors: {
      type: Object
    }
  }
}
</script>