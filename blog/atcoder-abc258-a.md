---
title: 【AtCoder】AtCoder Beginner Contest 258 A - When?
description: AtCoder Beginner Contest 259 A - When?を解いた
published: true
publishedAt: 2022-07-07T13:37:00.000Z
category: 競プロ
tags: ["競プロ","AtCoder","A問題"]
---

# 問題
## 問題文
AtCoder Beginner Contest は通常、日本標準時で 21 時ちょうどに始まり 100 分間にわたって行われます。

0 以上 100 以下の整数 K が与えられます。21 時ちょうどから K 分後の時刻を HH:MM の形式で出力してください。ただし、HH は 24 時間制での時間を、MM は分を表します。時間または分が 1 桁のときは、先頭に 0 を追加して 2 桁の整数として表してください。

## 制約
- K は 0 以上 100 以下の整数

## 入力
入力は以下の形式で標準入力から与えられる。

```
K
```

## 出力
答えを出力せよ。
# 解答

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      
      int a = 0;
      a = scanner.nextInt();
      
      int h = a / 60;
      int m = a % 60;
      
      int ansH = 21 + h;
      
      System.out.println(String.format("%02d", ansH)+":"+String.format("%02d", m));
      
      
  }
      
}

```

# 考え方
- n分をhh時間mm分に変換する定石は`hh=n/60; mm=n%60`である。
- 今回は21:00が基準となるため、hhに21を足して、出力を行う。

# 補足
今回は、制約がK<=100であり、MAX`22:40`が答えとなるため、考慮の必要はなかったが、Kの値が大きく、24:00を越える(日をまたぐ)場合は、`24:00→0:00`となることを考慮する必要がある。
具体的には、`int ansH = 21 + h;`を`int ansH = (21 + h)%24;`とする必要がある。
