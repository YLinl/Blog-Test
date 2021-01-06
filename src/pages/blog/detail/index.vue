<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
        <a-menu-item key="1">
          <a-icon type="table" />
          <span class="nav-text">博客管理</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="cluster" />
          <span class="nav-text">分类管理</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="message" />
          <span class="nav-text">评论管理</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="tags" />
          <span class="nav-text">标签管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          content
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center;">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

 
