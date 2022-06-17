import axios from "axios";
import {ref} from "vue";
import {useRouter} from "vue-router"

export default function useProduct() {

    const router = useRouter()
    const product = ref({})
    const products = ref([])
    const errors = ref({})

    const getProducts = async () => {
        products.value = (await axios.get('/api/product')).data.data
    }

    const storeProduct = async () => {
        errors.value = {}
        try {
            const response = await axios.post('/api/product', product.value)
            await router.push({
                name: 'product.show',
                params: {id: response.data.data.id}
            })
        } catch (e) {
            await handleException(e)
        }
    }

    const getProduct = async (id) => {
        product.value = (await axios.get(`/api/product/${id}`)).data.data
    }

    const updateProduct = async (id) => {
        errors.value = {}
        try {
            await axios.put(`/api/product/${id}`, product.value)
            await router.push({
                name: 'product.show',
                params: {id}
            })
        } catch (e) {
            await handleException(e)
        }
    }

    const deleteProduct = async (id) => {
        if (!window.confirm('Are you sure you want to delete?'))
            return
        try {
            await axios.delete(`/api/product/${id}`)
            await getProducts()
        } catch (e) {
            await handleException(e)
        }
    }

    const handleException = (e) => {
        switch (e.response.status) {
            case 422:
                errors.value = e.response.data.errors
                break
            case 403:
                break
            default:
                console.log(e.response)
                break
        }
    }

    return {
        product,
        products,
        getProducts,
        storeProduct,
        getProduct,
        updateProduct,
        deleteProduct,
        errors
    }
}