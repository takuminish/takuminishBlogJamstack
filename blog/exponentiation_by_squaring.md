---
title: 【アルゴリズム】繰り返し二乗法
description: 冪乗を高速に計算するアルゴリズム 計算量O(logn)
published: true
publishedAt: 2020-10-31T13:37:00.000Z
category: アルゴリズム
tags: ["競プロ","アルゴリズム",]
---

# 概要
<img src="/assets/img/exponentiation_by_squaring/1.jpg" width="400" >
# 計算量
- O(logn)

# 実装例
```java
  public static long pow(long a, long b) {
    long ans = 1;
    for (long mul = a; b != 0; b >>= 1, mul *= mul) {
        if ((b & 1) != 0) {
            ans *= mul;
        }
    }
    return ans;
  }
```

# 参考URL
- [繰り返し２乗法 - FreeStyleWiki]([url](https://freestylewiki.xyz/fswiki/wiki.cgi?page=%E7%B9%B0%E3%82%8A%E8%BF%94%E3%81%97%EF%BC%92%E4%B9%97%E6%B3%95))
- [繰り返し二乗法によるべき乗(pow(x,n))の計算のアルゴリズム | アルゴリズムロジック](https://algo-logic.info/calc-pow/)
