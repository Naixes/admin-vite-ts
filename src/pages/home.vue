<template>
  <a-table :data-source="dataSource" :columns="columns" :row-key="(r) => r.qid">
    <!-- 命名插槽 -->
    <template #parent-id="{ record }">
      <a-tag color="pink">{{ record.parent_qid }}</a-tag>
    </template>
  </a-table>
</template>
<script lang="ts">
import dataSource from '../data.json';
import columns from './tableColumns';

export default {
  setup() {
    return {
      dataSource,
      columns,
    };
  },
};
</script>
