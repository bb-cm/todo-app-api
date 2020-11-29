# Todo-app-api

### 必要前提条件

- Node.js
- npm
- Docker

### ローカル環境の設定

1. DB の用意

```sh
docker run --name todo-app-postgresql -p 32772:5432 --env POSTGRES_PASSWORD=password --env POSTGRES_USER=testUser --env POSTGRES_DB=todo_app_local postgres
```

- ローカル DB に接続するときの接続情報 (項番 1 の Docker コンテナのコマンドで設定している)
  - Host: 0.0.0.0
  - Database: todo_app_local
  - Port: 32772
  - ユーザー名: testUser
  - パスワード: password

2. Node モジュールのインストール

```sh
npm install
```

3. Express の実行

```sh
# 下記どちらも同じ（nodemonを使用して起動）
nodemon app.js
npm run start-auto

# 手動で再起動する場合
rs
```

4. マイグレーションファイル

```sh
# マイグレーションファイルの作成
npx knex migrate:make migration_create_table

# マイグレーションファイルの実行
npx knex migrate:latest
```

5. シードファイル

```sh
# シードファイルの作成
npx knex seed:make seed_create_table

# シードファイルの実行
npx knex seed:run --specific=seed-migration_create_table.js

# シードファイルの実行（全て実行）
npm run seed
```
