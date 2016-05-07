# ykrainskyi-loader

Loader для Webpack для україніфікації JavaScript. Дозволяє змінити англійські ключові слова на українські.   
   
Приклад:
```javascript
змін співробітники = ['Степан', 'Богдан', 'Микола']

змін привітати = функція(імя){
    консоль.логувати('Здоров був ' + имя + '!')
}

цикл(змін ї=0; ї<співробітники.довжина; ї++){
    привітати(співробітники[ї])
}
```
буде трансльований в:
```javascript
var співробітники = ['Владимир', 'Дмитрий', 'Николай']

var привітати = function(імя){
    console.log('Здоров був ' + імя + '!')
}

for(var ї=0; ї<співробітники.length; и++){
    привітати(співробітники[и])
}
```

Мінімальна конфігурація webpack.config.js:
```javascript
module.exports = {
    entry: "./тест.яс",
    output: {
        path: __dirname,
        filename: "result.js"
    },
    module: {
        loaders: [
            { test: /\.яс$/, loader: "pycckuu" }
        ]
    }
};
```

Таблиця відповідності:   

Англійське значення | Українське значення
------------ | -------------
alert | увага
console | консоль
log | логувати,лог
break | стоп
case | випадок
class | клас
catch | схопити,щосьнете
const | константа
continue | продовжити
default | зазамовчуванням
delete | видалити
do | зроби
else | інакше
export | експортувати
extends | розширює
finally | вкінці
for | цикл
function | функція
if | якщо
import | імпортувати
 in  |  в 
instanceof | екземпляр
let | нехай
new | новий
 of  |  з 
return | повернути
super | супер
switch | перебрати
this | тут,цей,осьоце
throw | кинути,шпурнути
try | спробувати,анука
typeof( | тип(
var  | змін 
void | пусто
while | поки
with | сумісно
yield | поступитись
pop | скоротити
push | добавити
reverse | зворотний
shift | зрушити
sort | сортувати
splice | зєднати
unshift | роздвинути
concat | звязати
join | обєднати 
slice | зріз
toString | вСтроку
indexOf | номерВ
forEach | дляКожного
every | кожний
some | хочабОдин
filter | фільтр
map | мапа
reduce | звести
prototype | прототип
length   | довжина


