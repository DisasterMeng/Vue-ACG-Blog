<template lang="pug">
    div.content-details
        myheader
        div.container-content
            v-container.v-container
                article#primary(v-html="content")
</template>

<script>
import myheader from './blogHeader'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export default {
  name: 'blog-details',
  data: () => ({
    content: `<blockquote>
    <p>最近需要一批邮箱，找到了zoho提供商，手动注册根本不可能，只有程序自动注册了，因此，需要一个注册机，在此记录一下分析的过程。</p>
    </blockquote>
    <p>注册机，简单来说，模拟用户进行数据提交，如何模拟呢？
    在我的分类中，大概有两种：</p>
    <ul>
    <li>直接操作浏览器，进行注册数据提交，不用关心其他的一些数据。</li>
    <li>分析提交接口，进行参数分析，构造数据进行提交。</li>
    </ul>
    <p>第一种：简单粗暴，但是浏览器需要渲染，时间成本比较高。zoho注册通过这种方式，单线程的情况下，注册大概一分多钟。</p>
    <p>第二种：这个的难易程度说不准，不同的网站提交的参数有多有少，参数值得获取有难有易。但是这个注册的速度，炒鸡炒鸡快，单线程大概10几秒。</p>
    <p>本文，就用第二种来进行注册，参数值的获取大概有这些：</p>
    <ul>
    <li>respose中的body html+js</li>
    <li>respose中的header cookie</li>
    <li>js 生成的参数值</li>
    <li>魔法值</li>
    </ul>
    <h2>注册</h2>
    <p>我们首先需要的是抓包，没有使用内置的抓包工具，而是使用的<code>Fidder</code>,只所以放弃内置的，因为注册的时候，回跳转页面，来不及查看，包就被清除了。
    如果用<strong>Fidder</strong>抓包没有抓到，你看下浏览器是否安装了<a href='/'>Fidder</a>的证书。</p>
    <p>我们先看一下，注册界面</p>
    <pre class="codehilite">
    <code>
    # tomd.py
    # coding: utf-8

    import re
    import os
    import warnings

    __all__ = ['Tomd', 'convert']
    </code></pre>`
  }),
  methods: {
    hljsCode (el) {
      let blocks = el.querySelectorAll('pre code')
      Array.prototype.forEach.call(blocks, hljs.highlightBlock)
    }
  },
  created () {
    this.$nextTick(() => {
      this.hljsCode(document.querySelector('#primary'))
    })
  },
  updated () {
    this.hljsCode(document.querySelector('#primary'))
  },
  components: {
    myheader
  }
}
</script>
