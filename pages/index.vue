<template>
  <div class="index">
    <topBar @click.native="getLeftList"></topBar>
    <div class="container">
      <div class="left-item">
        <ul class="infinite-list" v-infinite-scroll="leftListLoad" style="overflow:auto">
          <li v-for="(v,i) in leftList" :key="i">
            <div class="badge">{{v.collectionCount}}</div>
            <div class="content">
              <div class="title">{{v.title}}</div>
              <div class="list">
                <span>{{v.user.username}}</span>
                <span>{{formatDate(new Date(v.date.iso))}}</span>
              </div>
            </div>
            <a :href="v.url"></a>
          </li>
        </ul>
      </div>
      <div class="right-item">
        <ul class="infinite-list" v-infinite-scroll="rightListLoad" style="overflow:auto">
          <li v-for="(v,i) in rightList" :key="i">
            <div class="name">{{`${v.username}\\${v.reponame}`}}</div>
            <div class="desc">{{v.description}}</div>
            <div class="meta">
              <span class="star">
                <i class="el-icon-star-on"></i>
                <span>{{v.starCount}}</span>
              </span>
              <span class="fork">
                <i class="el-icon-share"></i>
                <span>{{v.forkCount}}</span>
              </span>
              <span class="lang">
                <i class="langIcon" :style="{backgroundColor:v.langColor}"></i>
                <span>{{v.lang}}</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <iframe src></iframe>
  </div>
</template>

<script>
import axios from "axios";
import topBar from "../components/topBar";
import { formatDate } from "~/common/index.js";

export default {
  async asyncData(context) {},
  data() {
    return {
      num: 0,
      postData1: {
        category: "frontend",
        limit: 30,
        offset: -1,
        order: "heat"
      },
      postData2: {
        category: "upcome",
        period: "month",
        lang: "javascript",
        offset: 0,
        limit: 30
      },
      leftList: [],
      rightList: []
    };
  },
  mounted() {},
  methods: {
    async getLeftList() {
      this.postData1 = { ...this.postData1, offset: this.postData1.offset + 1 };
      const data = await axios
        .post(`/api/getIndexLeftList`, this.postData1)
        .then(response => {
          return JSON.parse(JSON.stringify(response.data.data));
        });
      this.leftList.push(...data);
    },
    async getRightList() {
      this.postData1 = { ...this.postData2, offset: this.postData2.offset + 1 };
      const data = await axios
        .post(`/api/getIndexRightList`, this.postData2)
        .then(response => {
          return JSON.parse(JSON.stringify(response.data.data));
        });
      this.rightList.push(...data);
    },
    formatDate(date) {
      return formatDate(date);
    },
    leftListLoad() {
      this.getLeftList();
    },
    rightListLoad() {
      this.getRightList();
    }
  },
  components: {
    topBar
  }
};
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .container {
    margin: 0 auto;
    width: 100%;
    height: calc(100% - 50px);
    box-sizing: border-box;
    padding: 20px 10px 0 10px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    .left-item {
      flex-basis: 300px;
      min-width: 300px;
      text-align: left;
      margin-right: 20px;
      height: 100%;
      overflow: hidden;
      ul {
        height: 100%;
        padding: 0 5px;
        li {
          display: flex;
          position: relative;
          padding: 5px;
          margin-bottom: 8px;
          background-color: #fff;
          border-radius: 2px;
          .badge {
            background-color: #007fff;
            min-width: 34px;
            width: 34px;
            height: 44px;
            text-align: center;
            color: #fff;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
          }
          .content {
            overflow: hidden;
            .list {
              font-size: 12px;
              color: #c2c5cd;
            }
            .title {
              text-overflow: ellipsis;
              word-break: keep-all;
              white-space: nowrap;
              overflow: hidden;
              width: 100%;
              font-size: 14px;
              margin-bottom: 10px;
            }
          }
          a {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
          }
        }
      }
    }
    .right-item {
      flex: 1;
      overflow: hidden;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 100%;
        overflow: hidden;

        li {
          box-sizing: border-box;
          flex: 0 0 49%;
          position: relative;
          padding: 5px;
          margin-bottom: 8px;
          background-color: #fff;
          border-radius: 2px;
          @media (max-width: 1300px) {
            flex: 0 0 100%;
          }
          .name {
            font-size: 18px;
            color: #0366d6;
            font-weight: 600;
            margin-bottom: 8px;
          }
          .desc {
            height: 60px;
          }
          .meta {
            display: flex;
            justify-content: center;
            & > span {
              padding-right: 5px;
            }
            .lang {
              display: block;
              overflow: hidden;
            }
            .langIcon {
              float: left;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
