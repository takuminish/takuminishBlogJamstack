---
title: 【AtCoder】AtCoder Beginner Contest 261 A - Intersection
description: AtCoder Beginner Contest 261 A - Intersectionを解いた
published: true
publishedAt: 2022-07-29T13:37:00.000Z
category: 競プロ
tags: ["競プロ","AtCoder","A問題"]
---

# 問題
## 問題文
数直線があり、高橋君はこれを赤色と青色で次のように塗りました。

- X=L1 から X=R1までをすべて赤色で塗る。
- X=L2から X=R2までをすべて青色で塗る。
数直線のうち、赤色と青色の両方で塗られている部分の長さを求めてください。

## 制約
- 0 ≤ L1 < R1 ≤100
- 0 ≤ L2 < R2 ≤ 100
- 入力はすべて整数

## 入力
入力は以下の形式で標準入力から与えられる。

```
L1 R1 L2 R2
```

## 出力
両方の色で塗られている部分の長さを整数で出力せよ。
# 解答

```java
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // 標準入力からの値受け取り
        Scanner scanner = new Scanner(System.in);
        
        int a[] = new int[4];
        Arrays.setAll(a, i -> scanner.nextInt());
        
        // 各値に設定
        int redStart = a[0];
        int redEnd = a[1];
        int blueStart = a[2];
        int blueEnd = a[3];
        
        // 重なっていない場合は0
        if (redEnd <= blueStart) {System.out.println(0); return;}
        if (blueEnd <= redStart) {System.out.println(0); return;}
        
        // 赤が青にすっぽり収まる場合
        if(blueStart <= redStart && redEnd <= blueEnd) {
            System.out.println(redEnd - redStart);
            return;
        }
        
        // 青が赤にすっぽり収まる場合
        if(redStart <= blueStart && blueEnd <= redEnd) {
            System.out.println(blueEnd - Start);
            return;
        }
        
        //青の範囲に赤が重なっている場合
        if (blueStart <= redStart && redStart < blueEnd) {
            System.out.println(blueEnd - redStart);
            return;
        }
        
        //赤の範囲に青が重なっている場合
        if (redStart <= blueStart && blueStart < redEnd) {
            System.out.println(redEnd - blueStart);
            return;
        }
    }
}
```

# 考え方
- L1,L2で作られる赤線とR1,R2で作られる青線の重なっている長さを出力する問題
- このとき、赤線と青線の位置関係は大きく以下の4パターンで表せられる
    - 赤線と青線が重なっていない
    - 赤線と青線が一部重なっている
    - 赤線と青線が全て重なっている
    - 片方の線に片方がすっぽり収まっている
- そして、`赤線と青線が一部重なっている`と`赤線と青線が全て重なっている`は重なる位置が一方の線の途中か、左端かの違いになるので、計算上は同じパターンとしてみなせる。

## 赤線と青線が重なっていない
このパターンの場合、重なっている長さは0であり、以下の4パターンが存在する。
```
パターン1
赤  L1-------R1
青               L2-------R2

判定方法 R1 < L2
重なっている長さ 0
```

```
パターン2
赤  L1-------R1
青           L2-------R2

判定方法 R1 = L2
重なっている長さ 0
```

```
パターン3
赤                L1-------R1
青  L2-------R2

判定方法 R2 < L1
重なっている長さ 0
```

```
パターン3
赤           L1-------R1
青  L2-------R2

判定方法 R2 = L1
重なっている長さ 0
```

## 赤線と青線が一部重なっている or 赤線と青線が全て重なっている
このパターンの場合、重なっている長さは以下の3パターンで判定する。
```
パターン1
赤  L1-------R1
青     L2-------R2

判定方法 L1 < L2 < R1
重なっている長さ R1 - L2(パターン2と同じ)
```

```
パターン2
赤  L1-------R1
青  L2-------R2

判定方法 L1 = L2 < R1

重なっている長さ R1 - L2(パターン1と同じ)
```

```
パターン3
赤     L1-------R1
青  L2-------R2

判定方法 L2 < L1 < R2

重なっている長さ L1 - R2
```
## 片方の線に片方がすっぽり収まっている
```
パターン1
赤  L1-------R1
青     L2--R2

判定方法 L1 < L2 < R2 < R1

重なっている長さ L2- R2
```

```
パターン2
赤     L1--R1
青  L2-------R2

判定方法 L2 < L1 < R1 < R2

重なっている長さ L1- R1
```


