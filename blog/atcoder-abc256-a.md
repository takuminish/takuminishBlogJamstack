---
title: 【AtCoder】京海上日動プログラミングコンテスト2022（AtCoder Beginner Contest 256） A - 2^N
description: 京海上日動プログラミングコンテスト2022（AtCoder Beginner Contest 256） A - 2^Nを解いた
published: true
publishedAt: 2020-10-31T13:37:00.000Z
category: 競プロ
tags: ["競プロ","AtCoder","A問題"]
---

# 問題
## 問題文
N が与えられます。2^Nを出力してください。
## 制約
- 0≤N≤30
- N は整数である

## 入力
入力は以下の形式で標準入力から与えられる。

```
N 
```

## 出力
答えを出力せよ。
# 解答

```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        long answer = (long)Math.pow(2, n);

        System.out.println(answer);
    }

}
```

# 考え方
- 累乗するのみ

# 模範解答

```java
import java.util.Scanner;
import static java.lang.System.out;
public class Main {
  public static void main(String[] args) {
    try (Scanner sc = new Scanner(System.in)) {
      int N = sc.nextInt();
      out.println(pow(2, N));
    }
  }
  public static long pow(long a, long b) {
    long ans = 1;
    for (long mul = a; b != 0; b >>= 1, mul *= mul) {
        if ((b & 1) != 0) {
            ans *= mul;
            System.out.print("!");
        }
        System.out.println("a="+a +","+"b="+b +","+"mul="+mul +","+"ans="+ans);
    }
    return ans;
  }
}

```

# 気づき
- javaのMath.powはdouble型を返すため、精度が足りなくなる場合がある。整数版のpowを自作しておくことが望ましい
- 累乗の計算は、一回ずつ乗算するとO(n)となり、計算量が多くなる
- 繰り返し二乗法を用いることで、計算量がO(logn)となる


