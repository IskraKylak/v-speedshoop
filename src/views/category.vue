<template>
  <div>
    <div class="container">
      <Breadcrumbs/>
    </div>
    <div class="container">
      <h2 class="title_page">Телевизоры</h2>
      <div class="wrap_syngle_category">
        <Filter></Filter>
        <sCategory/>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs'
import sCategory from '@/components/category/section_category'
import Filter from '@/components/category/filter'
export default {
  name: 'Category',
  components: {
    Breadcrumbs,
    sCategory,
    Filter
  }
}

</script>

<style lang="scss" scoped>
</style>
