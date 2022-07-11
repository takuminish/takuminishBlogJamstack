---
title: 【AtCoder】日鉄ソリューションズプログラミングコンテスト2022（AtCoder Beginner Contest 257） A - A to Z String 2
description: 日鉄ソリューションズプログラミングコンテスト2022（AtCoder Beginner Contest 257） A - A to Z String 2を解いた
published: true
publishedAt: 2020-10-31T13:37:00.000Z
category: 競プロ
tags: ["競プロ","AtCoder","A問題"]
---

# 問題
## 問題文
A を N 個、B を N 個、…、Z を N 個この順に繋げて得られる文字列の先頭から X 番目の文字を求めてください。
## 制約
- 1≤N≤100
- 1≤X≤N×26
- 入力は全て整数

## 入力
入力は以下の形式で標準入力から与えられる。

```
N X
```

## 出力
答えを出力せよ。
# 解答

```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        
        // A~Z
        String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        // 入力値の取得
        Scanner sc = new Scanner(System.in);
        int[] a = new int[2];
        Arrays.setAll(a, i -> sc.nextInt());
        int n = a[0];
        int x = a[1];


        double answer1 = (double) x / n;
        double answer2 = Math.floor(answer1);
        
        int answer = (int)answer2;
        
        // 割り切れない → つぎのアルファベットに該当する
        if (answer1 - answer2 > 0) {
            answer++;
            
        } 
        
        System.out.println(answer-1);
    }

}

```

# 考え方
- この問題を、1〜Xの数字を、1から順番にn個ずつのグループに分けた場合に、xが何グループ目になるかという問題として捉える

- xをnで割った場合に、割り切れる場合と割り切れない場合に場合分けして考える

```
割り切れる場合
例 n = 3 x = 9

3グループ目
○○○｜○○○｜○○●｜

割り切れる場合は、割った値がそのまま何グループ目かの答えになる

```

```
割り切ない場合
例 n = 3 x = 10

4グループ目
○○○｜○○○｜○○◯｜●

割り切れない場合は、割った値+1が何グループ目かの答えになる

```

- 求めたnグループ目がそのまま、n番目のアルファベットとなり、答えが導き出せる

# 模範解答

```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        int[] a = new int[2];
        Arrays.setAll(a, i -> sc.nextInt());

        int n = a[0];
        int x = a[1];

        // x-1をすることで割り切れる場合を考慮
        int answer = (x-1) / n;
        
        System.out.println((char)('A' + (answer)));
    }

}

```

# 気づき
- a / bが割り切れない場合、a / bの答えを切り捨てて、+1する
  a / bが割り切れる場合、そのまま
- a-1 / bの答えを切り捨てて、+1する

上記の二つは答えが同じになる


