# Simple MVC

## Template

Pada dokumentasi NestJS sendiri secara default menggunakan handlebars engine (hbs). Namun kita dapat menggunakan engine lain seperti mustache ataupun pug. Untuk mendapatkan support dari engine mustache di NestJS harus menginstall dependency mustache-express

```
npm i mustache-express
```

setelah itu set engine pada main.ts

```javascript
import * as mustacheExpress from 'mustache-express';

app.engine('mustache', mustacheExpress());
app.setViewEngine('mustache');
```
