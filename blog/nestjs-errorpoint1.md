---
title: 【NestJS】MySQL DBに接続ができない　ERROR [TypeOrmModule] Unable to connect to the database. Retrying (1)
description: ERROR [TypeOrmModule] Unable to connect to the database. Retrying (1)が発生して、DBに接続できないのを解決する備忘録
published: true
publishedAt: 2023-02-02T13:37:00.000Z
category: 開発
tags: ["開発","NestJS","備忘録"]
---

# エラー内容
```
 | [Nest] 79  - 02/02/2023, 1:13:23 PM   ERROR [TypeOrmModule] Unable to connect to the database. Retrying (1)...
app_1  | QueryFailedError: Incorrect datetime value: '0000-00-00 00:00:00' for column 'created_at' at row 1
app_1  |     at Query.databaseConnection.query [as onResult] (/app/src/driver/mysql/MysqlQueryRunner.ts:222:33)
app_1  |     at Query.execute (/app/node_modules/mysql2/lib/commands/command.js:36:14)
app_1  |     at PoolConnection.handlePacket (/app/node_modules/mysql2/lib/connection.js:456:32)
app_1  |     at PacketParser.Connection.packetParser.p [as onPacket] (/app/node_modules/mysql2/lib/connection.js:85:12)
app_1  |     at PacketParser.executeStart (/app/node_modules/mysql2/lib/packet_parser.js:75:16)
app_1  |     at Socket.Connection.stream.on.data (/app/node_modules/mysql2/lib/connection.js:92:25)
app_1  |     at Socket.emit (events.js:197:13)
app_1  |     at addChunk (_stream_readable.js:288:12)
app_1  |     at readableAddChunk (_stream_readable.js:269:11)
app_1  |     at Socket.Readable.push (_stream_readable.js:224:10)
```

# エラー原因
直接的な原因はここ。
```
app_1  | QueryFailedError: Incorrect datetime value: '0000-00-00 00:00:00' for column 'created_at' at row 1
```

MySQLのデフォルトの設定で、timestampのカラムに'0000-00-00 00:00:00'は入らないようになっているらしい。

```
SELECT @@GLOBAL.sql_mode;

ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
```

たしかに設定上はそうなっているが、'0000-00-00 00:00:00'なんて登録しようとしたつもりはない。

真の原因は、TODO Entityクラスのcreate_atプロパティのDATE型とMySQLのtimestamp型の変換がうまくできていなかったことである。

```
```
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    todo_id: string;

    @Column()
    todo_title: string;

    @Column()
    todo_status: string;

    @Column()
    explanation: string;

    @Column()
    create_user: string;

    @Column()
    created_at: Date; // Dateとtimestampが対応してない。

    @Column()
    update_user: string;

    @Column()
    update_at: Date;　// Dateとtimestampが対応してない。
}

```

```

# 対応内容
NestJSでは以下のように指定することで、DATE型と任意のMySQLの日付の型を対応させることができる。

```
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    todo_id: string;

    @Column()
    todo_title: string;

    @Column()
    todo_status: string;

    @Column()
    explanation: string;

    @Column()
    create_user: string;

    @Column(({ type: 'timestamp' }))
    created_at: Date;

    @Column()
    update_user: string;

    @Column(({ type: 'timestamp' }))
    update_at: Date;
}

```

```
-    @Column()
+    @Column(({ type: 'timestamp' }))
     created_at: Date;
```



# 参考文献
- [MySQLの0000-00-00 00:00:00は使ってはならない](https://soudai.hatenablog.com/entry/2018/05/12/191050)
- [MySQLのsql_modeのせいで'0000-00-00'登録時にエラーが出た昔話。](https://qiita.com/tentatsu/items/fd2177777412ebc2f6b9)