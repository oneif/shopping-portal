<template>
  <nav class="header">
    <div class="content-layout">
      <ul class="site-nav-l">
        <li>枫羽商城欢迎您！</li>
        <li>
          <a href="javascript:void(0);" class="style_red" @click="loginAndRegister('login')"
            >亲，请登录</a
          >
        </li>
        <li><a href="javascript:void(0);" @click="loginAndRegister('register')">免费注册</a></li>
      </ul>
      <ul class="site-nav-r">
        <li><a href="javascript:void(0);">已买到的宝贝</a></li>
        <li><a href="javascript:void(0);">购物车</a></li>
        <li><a href="javascript:void(0);">收藏的宝贝</a></li>
        <li><a href="javascript:void(0);">免费开店</a></li>
        <li><a href="javascript:void(0);">联系客服</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <div class="top-wrap content-layout">
      <div class="logo" @click="() => router.push('/')" />
      <div class="search-wrap">
        <span class="search-tab">天猫</span>
        <i class="search-split" />
        <input type="search" autofocus="true" placeholder="语言开发" />
        <button>搜索</button>
      </div>
      <div class="qr">
        <span>下载app</span>
        <img src="@/assets/images/qr.png" />
      </div>
    </div>

    <div class="main content-layout">
      <div class="left">
        <h2>分类</h2>
        <ul class="service-bd">
          <li v-for="(item, index) in serviceOptions" :key="index">
            <SvgIcon
              class="service-arrow"
              :name="item.icon"
              :iconStyle="{ width: '20px', height: '20px' }"
            />
            <span class="link">
              <a href="javascript:void(0);" @click="serviceClick(item.a1)">{{ item.a1 }}</a>
              <span>/</span>
              <a href="javascript:void(0);" @click="serviceClick(item.a2)">{{ item.a2 }}</a>
              <span>/</span>
              <a href="javascript:void(0);" @click="serviceClick(item.a3)">{{ item.a3 }}</a>
            </span>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="right-top">
          <ul class="right-top-nav">
            <li>
              <a
                target="_blank"
                href="https://www.tmall.com"
                style="color: #ff0036; font-weight: 700"
                >天猫</a
              >
            </li>
            <li class="pipe">|</li>
            <li>
              <a
                target="_blank"
                style="color: #ff0036; font-weight: 700"
                href="https://pages.tmall.com/wow/a/act/ju/dailygroup/16583/17068/wupr?spm=a21bo.jianhua.201859.2.5af92a89wmMXWt&wh_pid=daily-523760&disableNav=YES&status_bar_transparent=true"
                >聚划算</a
              >
            </li>
            <li class="pipe">|</li>
            <li>
              <a
                target="_blank"
                style="color: #33c900; font-weight: 700"
                href="https://chaoshi.tmall.com"
                >天猫超市</a
              >
            </li>
            <li class="pipe">|</li>
            <li>
              <a target="_blank" href="https://sf.taobao.com">司法拍卖</a>
            </li>
            <li class="pipe">|</li>
            <li>
              <a target="_blank" href="https://www.fliggy.com">飞猪旅行</a>
            </li>
            <li class="pipe">|</li>
            <li>
              <a target="_blank" href="https://chaoshi.tmall.com">天天特卖</a>
            </li>
            <li class="pipe">|</li>
            <li>
              <a target="_blank" href="https://taolive.taobao.com/explore/index.html">直播</a>
            </li>
          </ul>
        </div>
        <div class="right-inner">
          <div class="right-inner-left">
            <el-carousel trigger="click" height="315px">
              <el-carousel-item v-for="(item, index) in carouselOptions" :key="index">
                <a :href="item.link" target="_blank"
                  ><img :src="item.img" style="width: 100%; height: 100%"
                /></a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="right-inner-right">
            <div class="user-bd">
              <div class="avatar"><img src="@/assets/images/qr.png" /></div>
              <div class="nick-name">Hi! <strong>你好</strong></div>
            </div>
            <div class="user-ft">
              <el-button class="login" color="#ff5800" @click="loginAndRegister('login')" round
                >登 录</el-button
              >
              <el-button
                class="register"
                color="#ff8100"
                @click="loginAndRegister('register')"
                round
                >注 册</el-button
              >
            </div>
            <div class="user-my">
              <div class="user-my-content">
                <a href="javascript:void(0);">
                  <SvgIcon class="icon" name="star" :iconStyle="{ height: '20px' }" />
                  <p>宝贝收藏</p>
                </a>
              </div>
              <div class="user-my-content">
                <a href="javascript:void(0);">
                  <SvgIcon class="icon" name="bag" :iconStyle="{ height: '20px' }" />
                  <p>买过的店</p>
                </a>
              </div>
              <div class="user-my-content">
                <a href="javascript:void(0);">
                  <SvgIcon class="icon" name="shop" :iconStyle="{ height: '20px' }" />
                  <p>收藏的店</p>
                </a>
              </div>
              <div class="user-my-content">
                <a href="javascript:void(0);">
                  <SvgIcon class="icon" name="clock" :iconStyle="{ height: '20px' }" />
                  <p>我的足迹</p>
                </a>
              </div>
            </div>
            <div class="user-tipMain">
              <a href="https://rulechannel.taobao.com/">
                <div class="notice-tip">规则</div>
              </a>
              <a
                href="https://rulechannel.taobao.com/?spm=a21bo.jianhua.0.0.5af92a89xbRZpL&type=detail&ruleId=20003287&cId=1331#/ruleStudy/detail?ruleId=20003287&cId=1331"
                ><p>2023年6月淘宝重要新规速递</p></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="goods content-layout">
        <h3 class="goods-header">猜你喜欢</h3>
        <div class="goods-content">
          <div class="goods-content-item">
            <div class="img"><img src="@/assets/images/qr.png" /></div>
            <div class="info">香港甜心屋润喉佛手干228gX2瓶零食老香黄香橼金佛手瓜柑零食薄荷</div>
            <div class="price">
              <span class="price-value"><em>￥</em>22.23</span>
            </div>
          </div>
          <div class="goods-content-item">123123</div>
          <div class="goods-content-item">123123</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const loginAndRegister = (status: string) => {
  const href = router.resolve({
    path: `/login`,
    query: { status: status }
  }).href
  window.open(href, '_blank')
}

const serviceOptions = [
  { icon: 'dress', a1: '女装', a2: '内衣', a3: '奢品' },
  { icon: 'shoe', a1: '女鞋', a2: '男鞋', a3: '箱包' },
  { icon: 'lipstick', a1: '美妆', a2: '饰品', a3: '洗护' },
  { icon: 'cloth', a1: '男装', a2: '运动', a3: '百货' },
  { icon: 'phone', a1: '手机', a2: '数码', a3: '企业礼品' },
  { icon: 'sofa', a1: '家装', a2: '电器', a3: '车品' },
  { icon: 'cherry', a1: '食品', a2: '生鲜', a3: '母婴' },
  { icon: 'medical', a1: '医药', a2: '保健', a3: '进口' }
]
const carouselOptions = [
  {
    link: 'https://pages.tmall.com/wow/a/act/tmall/dailyact/16403/16846/wupr?spm=a21bo.jianhua.201862-1.1.5af92a89wmMXWt&wh_pid=dailyAct-504674&disableNav=YES&status_bar_transparent=true&scm=1007.home_pc.banner.activity&utparam=%7B%22x_object_type%22%3A%22shoujiao%22%7D',
    img: 'src/assets/images/carousel_1.jpg'
  },
  {
    link: 'https://pages.tmall.com/wow/a/act/tmall/dailyact/17406/17973/wupr?spm=a21bo.jianhua.201862-2.1.5af92a89wmMXWt&wh_pid=dailyAct-495621&disableNav=YES&status_bar_transparent=true&scm=1007.home_pc.banner.activity&utparam=%7B%22x_object_type%22%3A%22shoujiao%22%7D',
    img: 'src/assets/images/carousel_2.jpg'
  },
  {
    link: 'https://pages.tmall.com/wow/an/cs/act/wupr?spm=a21bo.jianhua.201862-3.1.5af92a89wmMXWt&wh_biz=tm&wh_pid=act%2F18870a468e0&disableNav=YES&scm=1007.home_pc.banner.activity&utparam=%7B%22x_object_type%22%3A%22shoujiao%22%7D',
    img: 'src/assets/images/carousel_3.jpg'
  },
  {
    link: 'https://pages.tmall.com/wow/jinkou/act/zhiyingchaoshi?spm=a21bo.jianhua.201862-4.1.5af92a89wmMXWt&acm=lb-zebra-34359-425732.1003.4.5460841&scm=1007.home_pc.banner.activity&utparam=%7B%22x_object_type%22%3A%22shoujiao%22%7D',
    img: 'src/assets/images/carousel_4.jpg'
  },
  {
    link: 'https://huodong.taobao.com/wow/a/act/tao/dailyact/17343/17841/wupr?spm=a21bo.jianhua.201862-5.1.5af92a89wmMXWt&wh_pid=dailyAct-504702&disableNav=YES&status_bar_transparent=true&scm=1007.home_pc.banner.activity&utparam=%7B%22x_object_type%22%3A%22shoujiao%22%7D',
    img: 'src/assets/images/carousel_5.jpg'
  }
]

const serviceClick = (classify: string) => {
  console.log(classify)
}
</script>

<style lang="scss" scoped>
.header {
  height: 36px;
  background-color: #f5f5f5;
  .site-nav-l,
  .site-nav-r {
    float: left;
    li {
      display: inline-block;
      line-height: 36px;
      margin-right: 8px;
      color: #3c3c3c;
      font-size: 12px;
      a {
        display: block;
        height: 100%;
        color: #6c6c6c;
        font-size: 12px;
      }
      .style_red {
        color: #f22e00;
      }
    }
  }
  .site-nav-r {
    float: right;
  }
}

.container {
  background-color: #eae6e7;
  .top-wrap {
    position: relative;
    .logo {
      width: 190px;
      height: 120px;
      float: left;
      margin-top: 8px;
      margin-left: 32px;
      background: url('@/assets/images/logo_big.png') center no-repeat;
    }

    .search-wrap {
      position: absolute;
      top: 44px;
      left: 240px;
      width: 738px;
      height: 42px;
      border: 2px solid #ff5000;
      border-radius: 30px;
      background-color: #fff;
      .search-tab {
        display: block;
        width: 65px;
        height: 38px;
        line-height: 38px;
        text-align: center;
      }
      .search-split {
        position: absolute;
        top: 7px;
        left: 65px;
        width: 1px;
        height: 24px;
        background: #f3f0f0;
      }
      input {
        position: absolute;
        top: 0;
        left: 70px;
        width: 590px;
        height: 38px;
        line-height: 39px;
        padding-left: 10px;
        font-size: 16px;
        vertical-align: middle;
      }
      input[type='search']::-webkit-search-cancel-button {
        -webkit-appearance: none; //此处去掉默认的小×
      }
      button {
        position: absolute;
        top: 2px;
        right: 2px;
        float: left;
        width: 72px;
        height: 34px;
        background-color: #ff5400;
        color: #fff;
        font-size: 16px;
        border-radius: 20px;
        cursor: pointer;
      }
    }
    .qr {
      position: absolute;
      top: 14px;
      right: 63px;
      width: 76px;
      height: 90px;
      background-color: #fff;
      span {
        display: block;
        font-size: 14px;
        line-height: 20px;
        margin: 4px 11px 0;
        color: #ff5000;
      }
      img {
        display: block;
        margin-left: 7px;
        width: 62px;
        height: 62px;
      }
    }
  }

  .main {
    background-color: #fff;
    border-radius: 18px;
    .left {
      margin: 24px 0 0 24px;
      position: relative;
      font-size: 14px;
      background-color: #f7f9fa;
      width: 270px;
      border-radius: 12px;
      float: left;
      h2 {
        padding: 16px 0 0 20px;
        font-size: 18px;
        color: #111;
        line-height: 24px;
        letter-spacing: 0;
      }
      .service-bd {
        padding: 16px 0 8px 20px;
        li {
          overflow: hidden;
          line-height: 20px;
          height: 20px;
          position: relative;
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 18px;
          width: 212px;
          color: #666;
          .service-arrow {
            margin-right: 12px;
          }
          .link {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            span {
              padding: 0 8px;
            }
          }
        }
      }
    }

    .right {
      width: 882px;
      height: 423px;
      float: right;
      &-top {
        width: 856px;
        height: 42px;
        position: relative;
        color: #000;
        background-color: #faf9fa;
        border-radius: 12px;
        margin: 24px 26px 0 0;
        overflow: hidden;
        &-nav {
          margin-left: 17px;
          float: left;
          font-size: 16px;
          line-height: 16px;
          padding-top: 13px;
          .pipe {
            color: #e0e0e0;
          }
          li {
            position: relative;
            text-align: center;
            float: left;
            a {
              color: #333;
              // font-weight: 700;
              float: left;
              padding: 0 20px;
            }
          }
        }
      }
      &-inner-left {
        width: 564px;
        height: 315px;
        border-radius: 12px;
        margin-top: 10px;
        float: left;
        background-color: red;
        overflow: hidden;
      }
      &-inner-right {
        float: right;
        width: 316px;
        height: 357px;
        .user {
          &-bd {
            width: 100%;
            height: 106px;
            .avatar {
              display: block;
              margin: 32px auto 0;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background-color: red;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .nick-name {
              width: 316px;
              height: 24px;
              font-size: 16px;
              margin-top: 22px;

              display: block;
              line-height: 24px;
              text-align: center;
            }
          }
          &-ft {
            width: 100%;
            height: 44px;
            margin-top: 13px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .el-button {
              width: 80px;
              height: 42px;
              color: #fff;
              font-size: 16px;
            }
            .login {
              margin-left: 60px;
            }
            .register {
              margin-right: 60px;
            }
          }
          &-my {
            width: 286px;
            height: 48px;
            margin: 30px 0 0 30px;
            position: relative;
            overflow: hidden;
            &-content {
              width: 48px;
              height: 48px;
              margin-right: 22px;
              float: left;
              a {
                display: block;
                width: 100%;
                height: 100%;
                .icon {
                  width: 48px;
                  font-size: 24px;
                  line-height: 20px;
                  text-align: center;
                  margin-bottom: 10px;
                }
              }
            }
          }
          &-tipMain {
            width: 100%;
            height: 18px;
            overflow: hidden;
            position: relative;
            margin: 36px 0 0 30px;
            display: flex;
            a {
              display: block;
              width: 32px;
              height: 18px;
            }
            .notice-tip {
              width: 32px;
              height: 18px;
              text-align: center;
              line-height: 18px;
              background-color: #ffefef;
              border-radius: 2px;
              color: #ff5000;
              font-size: 12px;
            }
            p {
              margin-left: 4px;
              color: #666;
              font-size: 12px;
              line-height: 18px;
              width: 216px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
        }
      }
    }

    .goods {
      padding: 20px 18px;
      &-header {
        height: 24px;
        margin-bottom: 20px;
        margin-left: 6px;
        color: #111;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
      }
      &-content {
        width: 100%;
        height: auto;
        background-color: pink;
        &-item {
          position: relative;
          float: left;
          width: 370px;
          height: 174px;
          margin: 0 0 18px 18px;
          padding: 11px;
          border: 1px solid #f7f9fa;
          background-color: #f7f9fa;
          border-radius: 12px;
          cursor: pointer;
          .img {
            position: absolute;
            width: 150px;
            height: 150px;
            overflow: hidden;
            background-color: rgba(27, 23, 67, 0.03);
            border-radius: 12px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .info {
            width: 186px;
            height: 46px;
            word-wrap: break-word;
            overflow: hidden;
            display: inline-block;
            margin: 6px 0 70px 162px;
            color: #333;
            font-size: 16px;
            line-height: 23px;
          }
          .price {
            width: 186px;
            height: 24px;
            margin-left: 162px;
            color: #ff5000;
            &-value {
              display: inline-block;
              font-size: 22px;
              line-height: 22px;
              em {
                margin-right: 4px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-style: normal;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>
