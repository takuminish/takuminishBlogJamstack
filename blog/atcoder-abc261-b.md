---
title: 【AtCoder】AtCoder Beginner Contest 261 B - Tournament Result  
description: AtCoder Beginner Contest 261 B - Tournament Result  を解いた
published: true
publishedAt: 2022-07-29T13:37:00.000Z
category: 競プロ
tags: ["競プロ","AtCoder","B問題"]
---

# 問題
## 問題文
N人の人が総当り戦の試合をしました。
N行N列からなる試合の結果の表 A が与えられます。Ai行目j列目の要素をA i,jと表します。A i,jはi=jのとき`-`であり、それ以外のとき`W`,`L`,`D`のいずれかです。Ai,jが`W`,`L`,`D` であることは、人 i が人 j との試合に勝った、負けた、引き分けたことをそれぞれ表します。

与えられた表に矛盾があるかどうかを判定してください。

次のいずれかが成り立つとき、与えられた表には矛盾があるといいます。

- ある組 (i,j) が存在して、人 i が人 j に勝ったが、人 j が人 i に負けていない
- ある組 (i,j) が存在して、人 i が人 j に負けたが、人 j が人 i に勝っていない
- ある組 (i,j) が存在して、人 i が人 j に引き分けたが、人 j が人 i に引き分けていない

## 制約
- 2≤N≤1000
- Ai,iは - である
- i≠jのとき、Ai,jは`W`,`L`,`D`のいずれかである

## 入力
入力は以下の形式で標準入力から与えられる。

```
N
A(1,1)A(1,2)…A(1,N)
​A(2,1)A(2,2)…A(2,N) 
⋮
(N,1)A(N,2)…A(N,N)
```

## 出力
与えられた表に矛盾がないとき`correct`、矛盾があるとき `incorrect`と出力せよ。
# 解答

```java
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {

        // 標準入力からの値受け取り
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        
        boolean isCorrect = true;
       
       String[][] a = inputMultiRowArrayString(scanner, n);
       for(int i = 0; i < n; i++) {
           for(int j = 0; j < n; j++) {
                // -○○○
                // ×-○○
                // ××-○
                // ×××-
                // ×の箇所は判定する必要がないためcontinue
               if(i >= j) {continue;}

               switch(a[i][j]) {
                   // Wと対になるのはLのため、異なる場合はincorrect
                   case "W":if(!a[j][i].equals("L")){isCorrect = false;} break;
                    // Lと対になるのはWのため、異なる場合はincorrect
                   case "L":if(!a[j][i].equals("W")){isCorrect = false;}break;
                   // Dと対になるのはDのため、異なる場合はincorrect
                   case "D":if(!a[j][i].equals("D")){isCorrect = false;}break;
               }
               
               if(!isCorrect) {break;}
           }
           if(!isCorrect) {break;}
       }
       
       if(isCorrect) {
           System.out.println("correct");
       } else {
           System.out.println("incorrect");           
       }
    }
       
     /**
     * 
     * @param scanner
     * @param n 行数、列数
     * @return int[][] 複数行で入力された値を格納した2次元配列 
     */ 
    static String[][] inputMultiRowArrayString(Scanner scanner, int n) {
       // 変数宣言
       String[] str = new String[1000];
       String[][] a = new String[n][n];
       
       // n
       // 1 2 3 4 5
       // 1 2 3 4 5
       // 1 2 3 4 5
       // 1 2 3 4 5
       // の形式で入力されるのを変数に入力
       for (int i = 0; i < n; i++) {
           str[i] = scanner.nextLine();
           String[] s = str[i].split("");
           for (int j = 0; j < n; j++) {
             a[i][j] = s[j];
           }
       }
       
       return a;
    } 
}

```

# 考え方
- いわゆる総当たり戦の勝敗に矛盾がないか判定する問題になる。
- このとき、以下のように勝敗が対応する。
```
-123
1-45
24-6
356-
```
- そのため、2次元表のすべてを判定する必要はなく、以下の表の○の部分のみ判定すれば良い。
```
-○○○
×-○○
××-○
×××-
```
- `W`の場合、対応する箇所が`L`、`L`の場合、対応する箇所が`W`、`D`の場合、対応する箇所が`D`となっているか判定する。
