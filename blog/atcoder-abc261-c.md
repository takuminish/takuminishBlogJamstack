---
title: 【AtCoder】AtCoder Beginner Contest 262 C - Min Max Pair
description: AtCoder Beginner Contest 262 C - Min Max Pair  を解いた
published: true
publishedAt: 2022-08-05T13:37:00.000Z
category: 競プロ
tags: ["競プロ","AtCoder","C問題"]
---

# 問題
## 問題文
1 以上 N 以下の整数からなる長さ N の数列 a=(a1,…,aN) が与えられます。
以下の条件を全て満たす整数 i,j の組の総数を求めてください。
- 1≤i<j≤N
- min(ai,aj)=i
- max(ai,aj)=j

## 制約
- 2≤N≤5×10^5
- 1≤ai≤N(1≤i≤N)
- 入力は全て整数
## 入力
入力は以下の形式で標準入力から与えられる。

```
N
a1… aN
```

## 出力
答えを出力せよ。

# 解答

```java
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);

        // 整数を入力 N
        int n = Integer.parseInt(scanner.nextLine());

        // 配列aの入力
        int a[] = new int[n];
        Arrays.setAll(a, i -> scanner.nextInt());

        int answer = 0;

        // ミスしたポイント!!
        // 桁あふれを考慮できていなかった!!
        long same = 0;

        for (int i = 0; i < n; i++) {
            if ((i + 1) == a[i]) {
                same++;
                continue;
            }

            if ((i + 1) == a[a[i] - 1]) {
                answer++;
            }

        }
        System.out.println(answer/2 + ((same * (same - 1)) / 2));
    }
}

```

# 考え方
- この問題はすなわち、`ai = i && aj = j`または`ai = j && aj = i`となる組み合わせ数を答える問題である。　← ここまでは解説を見ずにわかった。

## ai = i && aj = jの組み合わせ数
ai = i && aj = jの組み合わせ数は、ai=iとなる値のそう組み合わせ数でもとまる。
```
(例) 5 8 2 2 1 6 7 2 9 10
上記の場合、ai=iとなるのは、6,7,9,10の4つである。
すなわち、4C2 = (4 * 3) / 2 = 6となる。

```
このCombinationの計算をする際に、int型変数で計算していたため、桁あふれを起こしてしまった。


## ai = j && aj = i
この組み合わせは、入力された数列を`配列a`に代入した場合、以下のように判定することで一意に定まる。
```
(i + 1) == a[a[i] - 1]
```

- ai = i && aj = jの場合も、この条件に該当してしまうため、該当しないようにすること
- この条件の場合は、1つの組み合わせに対して、2回判定を行ってしまうため、結果を2でわること。

# 反省点・学んだこと
- 制約をよく読めていない。
- 制約を読んで、計算量と計算値の最大値がどれぐらいになるかを確認するようにする
- 計算量を見積もる→総当たりでも解けるのか確認
- 計算値の最大値を見積もる→int, long等の型を決める。(最悪全部longでもいい?)
