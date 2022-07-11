---
title: 【AtCoder】AtCoder Beginner Contest 259 A - Growth Record
description: AtCoder Beginner Contest 259 A - Growth Recordを解いた
published: true
publishedAt: 2022-07-07T13:37:00.000Z
category: 競プロ
tags: ["競プロ","AtCoder","A問題"]
---

# 問題
## 問題文
高橋君は N 歳の誕生日を迎えました。この時の彼の身長は T cmです。
また、以下のことが分かっています。

- 高橋君は 0 歳の誕生日(生まれた当日)から X 歳の誕生日までの間、毎年身長が D cmずつ伸びた。より厳密に書くと、i=1,2,…,X それぞれに対し、i−1 歳の誕生日から i 歳の誕生日までの間に身長が D cm伸びた。
- 高橋君は X 歳の誕生日から N 歳の誕生日までの間、身長が変化していない。
高橋君の M 歳の誕生日の時の身長が何cmだったかを求めてください。
## 制約
- 0≤M<N≤100
- 1≤X≤N
- 1≤T≤200
- 1≤D≤100
- 高橋君の 0 歳の誕生日の時の身長は 1 cm以上である
- 入力はすべて整数

## 入力
入力は以下の形式で標準入力から与えられる。

```
N M X T D
```

## 出力
答えを出力せよ。
# 解答

```java
import java.util.Scanner;
import java.util.Arrays;
import static java.lang.System.out;

public class Main {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      
      int a[] = new int[5];
      Arrays.setAll(a,i  -> scanner.nextInt());
      
      // N M X T D
      int n = a[0];
      int m = a[1];
      int x = a[2];
      int t = a[3];
      int d = a[4];
      
      int answer = 0;
      if (x <= m) {
          answer = t;
      } else {
          answer = t-((x-m)*d);
      }
      
      System.out.println(answer);
      
  }
      
}

```

# 考え方
- 高橋君は 0 歳の誕生日(生まれた当日)から X 歳の誕生日までの間、毎年身長が D cmずつ伸びた。より厳密に書くと、i=1,2,…,X それぞれに対し、i−1 歳の誕生日から i 歳の誕生日までの間に身長が D cm伸びた。
- 高橋君は X 歳の誕生日から N 歳の誕生日までの間、身長が変化していない。

上記の2つにより、`X<=M`と`M<X`の場合の2パターンで考える。

## X <= Mの場合
MがX以上の場合を考える。Mは必ず、Nより小さいため、`X<=M<N`となる。

`高橋君は X 歳の誕生日から N 歳の誕生日までの間、身長が変化していない。`より、X歳の時の身長と、N歳の時の身長は同じになる。
よって、M歳の時の身長も、N歳の時の身長と同じになるため、N歳のときの身長を表すTがそのまま答えとなる。

## M < Xの場合
MがXより小さい場合を考える。Mは必ず、Nより小さいため、`M<X<N`となる。
このとき、X歳の時の身長とN歳の時の身長は同じであるため、X歳の時の身長はTとなる。

0歳からX歳までは1年にDcmずつ増えていく、すなわち、X歳とX-1歳の差はDcmとなる。
X歳とM歳の差×DcmがX歳とM歳の身長差となるため、`T-(X-M)*D`が答えとなる。
