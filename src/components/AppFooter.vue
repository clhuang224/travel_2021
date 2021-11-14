<script setup lang="ts">

</script>

<template>
<footer>
  <ul>
    <li>
      <h5><router-link to="/spot">景點</router-link></h5>
      <ul>
        <li><router-link to="/spot#熱門景點">熱門景點</router-link></li>
        <li><router-link to="/spot#網紅攻略">網紅攻略</router-link></li>
        <li><router-link to="/spot#主題景點">主題景點</router-link></li>
      </ul>
    </li>
    <li>
      <h5><router-link to="/food">美食</router-link></h5>
      <ul>
        <li><router-link to="/food#台灣文化">台灣文化</router-link></li>
        <li><router-link to="/food#台灣小吃">台灣小吃</router-link></li>
        <li><router-link to="/food#台灣在地特色">台灣在地特色</router-link></li>
        <li><router-link to="/food#熱門美食">熱門美食</router-link></li>
        <li><router-link to="/food#網紅必推美食">網紅必推美食</router-link></li>
      </ul>
    </li>
    <li>
      <h5><router-link to="/accommodation">住宿</router-link></h5>
      <ul>
        <li><router-link to="/accommodation#觀光旅館">觀光旅館</router-link></li>
        <li><router-link to="/accommodation#旅館">旅館</router-link></li>
        <li><router-link to="/accommodation#民宿">民宿</router-link></li>
        <li><router-link to="/accommodation#住宿推薦">住宿推薦</router-link></li>
      </ul>
    </li>
  </ul>
  <div>
    <img src="../assets/logo.png" alt="logo">
    <p>24小時免付費旅遊諮詢熱線：0800-011765<br>免付費國旅券專線：0800-211734（服務時間：週一至週日8:30~18:30</p>
  </div>
</footer>
</template>

<style lang="scss" scoped>
footer {
  background-image: linear-gradient(0deg, #A7D4DA 0%, rgba(167, 212, 218, 0) 89.54%);
  & > ul {
    display: flex;
    justify-content: space-between;
    padding: 72px 170px 60px;
    & > li {
      h5 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 2.8rem;
        a {
          color: rgba(0, 0, 0, 0.8);
          text-decoration: none;
        }
      }
      li {
        margin-top: 18px;
        a {
          font-size: 2.4rem;
          color: #888;
          text-decoration: none;
        }
      }
    }
  }
  & > div {
    background-color: #6E9292;
    color: #f8f8f8;
    font-weight: bold;
    font-size: 1.6rem;
    padding: 18px 28px;
    display: flex;
    align-items: center;
    img {
      height: 40px;
      margin-right: 28px;
    }
  }
}

</style>
