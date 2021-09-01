<template>
  <div>
    <!-- 搜索表单 -->
    <el-form ref="searchForm" slot="search-form" :model="searchForm" label-width="80px" inline>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="searchForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="姓名" prop="realName">
        <el-input v-model="searchForm.realName" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="手机号码" prop="mobile">
        <el-input v-model="searchForm.mobile" placeholder="请输入手机号码"/>
      </el-form-item>
      <el-form-item label="所属部门" prop="rootDeptId">
<!--        <DepartmentSelect v-model="searchForm.rootDeptId" placeholder="请选择所属部门" clearable/>-->
      </el-form-item>
      <el-form-item label="岗位" prop="positionId">
<!--        <PositionSelect v-model="searchForm.positionId" placeholder="请选择岗位" clearable/>-->
      </el-form-item>
      <section>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button >重置</el-button>
      </section>
    </el-form>
    <!-- 表格和分页 -->
    <template>
      <ul class="toolbar" >
        <li><el-button icon="el-icon-plus" type="primary" >新建</el-button></li>
        <li><el-button icon="el-icon-delete" >删除</el-button></li>
      </ul>
      <el-table
        :data="tableData"
        :default-sort = "{prop: 'createTime', order: 'descending'}"
        stripe
      >
<!--
v-loading="isWorking.search"
@selection-change="handleSelectionChange"
@sort-change="handleSortChange"
-->
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="avatar" label="头像" width="80px" class-name="table-column-avatar" fixed="left">
          <template slot-scope="{row}">
            <img :src="row.avatar == null ? '/static/avatar/man.png' : row.avatar">
          </template>
        </el-table-column>
        <el-table-column prop="realname" label="姓名" min-width="100px" fixed="left"></el-table-column>
        <el-table-column prop="username" label="用户名" min-width="120px"></el-table-column>
        <el-table-column prop="empNo" label="工号" sortable="custom" sort-by="EMP_NO" min-width="80px"></el-table-column>
        <el-table-column prop="department" label="部门" min-width="120px">
          <template slot-scope="{row}">{{row.department == null ? '' : row.department.name}}</template>
        </el-table-column>
        <el-table-column prop="position" label="岗位" min-width="160px" class-name="table-column-strings">
<!--          <template slot-scope="{row}">-->
<!--            <ul>-->
<!--              <li v-for="position in row.positions" :key="position.id">{{position.name}}</li>-->
<!--            </ul>-->
<!--          </template>-->
        </el-table-column>
        <el-table-column prop="sex" label="性别" sortable="custom" sort-by="SEX" min-width="80px">
          <template slot-scope="{row}">
            {{row.sex | sex}}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号码" min-width="100px"></el-table-column>
        <el-table-column prop="email" label="邮箱" min-width="180px"></el-table-column>
        <el-table-column prop="birthday" label="生日" sortable="custom" sort-by="BIRTHDAY" min-width="100px"></el-table-column>
        <el-table-column prop="roles" label="角色" min-width="160px" class-name="table-column-strings">
<!--          <template slot-scope="{row}">-->
<!--            <ul>-->
<!--              <li v-for="role in row.roles" :key="role.id">{{role.name}}</li>-->
<!--            </ul>-->
<!--          </template>-->
        </el-table-column>
        <el-table-column prop="createUser" label="创建人" min-width="100px"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" sortable="custom" sort-by="CREATE_TIME" min-width="140px"></el-table-column>
        <el-table-column prop="updateUser" label="更新人" min-width="100px"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" sortable="custom" sort-by="UPDATE_TIME" min-width="140px"></el-table-column>
        <el-table-column label="操作" width="270" fixed="right">
<!--          <template v-if="isAdmin || (row.id !== userInfo.id && row.roles.findIndex(r => r.code === adminCode) === -1)" slot-scope="{row}">-->
          <template>
            <el-button type="text" icon="el-icon-edit">编辑</el-button>
            <el-button type="text" icon="el-icon-s-custom" >配置角色</el-button>
            <el-button type="text" >重置密码</el-button>
            <el-button type="text" icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--<pagination
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
        :pagination="tableData.pagination"
      ></pagination>-->
    </template>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
        searchForm: {
          username: '', // 名字
          realName: '', // 姓名
          rootDeptId: null, // 部门ID
          positionId: null, // 岗位ID
          mobile: '' // 手机号码
        },
        tableData: [

        ]
      }
    },
  }
</script>

<style scoped>

</style>
