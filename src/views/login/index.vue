<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <edit />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password" />
        <span class="show-pwd">
          <el-icon>
            <edit />
          </el-icon>
        </span>
      </el-form-item>
      <el-button type="primary" style="width: 100%; margin-bottom: 30px">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
// 导入组件之后无需注册可直接使用
import { Avatar, Edit } from '@element-plus/icons'
import {} from 'vue'
</script>
