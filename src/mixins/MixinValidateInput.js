export default {
    computed: {
        validationRules() {
            return {
                required: v => !!v || 'Field ini wajib diisi',
                email: v => /.+@.+/.test(v) || 'Email tidak valid',
            }
        }
    }
}