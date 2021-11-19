<template>
  <div>{{ ApiResponse }}</div>
</template>

<script>
export default {
  data() {
    return {
      ApiResponse: '',
    }
  },
  mounted() {
    this.$axios
      .get(`http://${window.location.hostname}:8080/api/hello`)
      .then((response) => {
        this.ApiResponse = response.data
      })
      .catch((error) => {
        this.ApiResponse = error
      })
  },
}
</script>
