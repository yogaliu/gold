<template>
<div class="topBar">
    <el-avatar shape="square" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iOC4zODU3bW0iIGhlaWdodD0iOC4xOTIzbW0iIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDUwOSA0OTciDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLmZpbDAge2ZpbGw6IzAwNkNGRn0NCiAgICAuZmlsMSB7ZmlsbDp3aGl0ZX0NCiAgIF1dPg0KICA8L3N0eWxlPg0KIDwvZGVmcz4NCiA8ZyBpZD0i5Zu+5bGCX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cmVjdCBjbGFzcz0iZmlsMCIgd2lkdGg9IjUwOSIgaGVpZ2h0PSI0OTciLz4NCiAgPHBhdGggaWQ9IkZpbGwtMS1Db3B5IiBjbGFzcz0iZmlsMSIgZD0iTTI4NSAxMzhsLTMxIC0yNCAtMzMgMjUgLTIgMiAzNSAyNyAzNCAtMjcgLTMgLTN6bTExOSA5NWwtMTUwIDExNiAtMTUxIC0xMTYgLTIyIDE3IDE3MyAxMzQgMTczIC0xMzQgLTIzIC0xN3ptLTE1MCA5bC04MiAtNjMgLTIzIDE3IDEwNSA4MSAxMDQgLTgxIC0yMiAtMTcgLTgyIDYzeiIvPg0KIDwvZz4NCjwvc3ZnPg0K"></el-avatar>
    <el-input placeholder="请输入" size="small" class="input"></el-input>
</div>

</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.topBar{
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: flex-end;
    padding: 5px;
    .input{
        width: 200px;
        margin-left: 10px;
    }
}
</style>