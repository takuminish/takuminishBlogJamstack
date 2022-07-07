---
title: 【備忘録】SP2-1502 The HTTP proxy server specified by http_proxy is not accessible.が発生した場合の対応
description: WindowにてsqlplusでoracleDBに接続しようとした場合に、http_proxyに関するエラーが発生しました。その対応方法を残します。
published: true
publishedAt: 2022-07-07T13:37:00.000Z
category: sqlplus
tags: ["#備忘録","#sqlplus"]
---

業務中に遭遇したエラーや困ったことの状況、対応方法を残します。

# エラー状況
プロキシサーバを使用している社内ネットワーク内のWindows10のPCでsqlplusを実行した場合、以下のエラーが発生しました。

```
$ sqlplus
Error 46 initializing SQL*Plus
HTTP proxy setting has incorrect value
SP2-1502: The HTTP proxy server specified by http_proxy is not accessible.
```

# 原因
- TNSによるOracleDBへの接続の際に設定されたプロキシサーバを使用する
- Windowsの環境変数でHTTP_PROXYが存在する場合、その値が使用される
- HTTP_PROXYの環境変数では`http://~`と設定する必要がある
- 今回エラーが起こったPCでは以前設定していたHTTP_PROXY=`XXX.XXX.XXX.XXX`の環境変数が存在した

# 対応方法
- HTTP_PROXYの環境変数がなくても、他の業務に支障がないことを確認して環境変数を削除した。
  
# 参考
- [オラクル用語 備忘録 - oracle tips and tricks](https://www.shift-the-oracle.com/glossary.html)
- [SQLPlusとGAEの相性 - ぼちぼち日記](https://blackyman.hatenadiary.org/entry/20080715/p1)
- [oracle — Oracle InstantClientのインストールに関する問題-「HTTPプロキシ設定の値が正しくありません」](https://www.web-dev-qa-db-ja.com/ja/oracle/oracle-instantclient%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E5%95%8F%E9%A1%8C%E3%80%8Chttp%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7%E8%A8%AD%E5%AE%9A%E3%81%AE%E5%80%A4%E3%81%8C%E6%AD%A3%E3%81%97%E3%81%8F%E3%81%82%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%80%8D/960389619/)