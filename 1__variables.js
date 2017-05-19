var ansver = (42-2)*3;
console.log(ansver);

var a = 23;
var b = 44;
var c = (a + b)*2;
console.log(c);

var name = 'John';
var surname = 'Doe';
var fullname = name + " " + surname
console.log(fullname);

// "Загорніть" текст змінної в тег div
var str = "Johnny got his gun";
var wrapped = "<div>" + str + "</div>"
console.log(wrapped);

// нехай змінна tag є тегом, в який треба загорнути строчку, а str - сама строчка.
var tag = 'b';
var str = 'Hello, Dolly!';
var wrapped2 = "<" + tag + ">" + str + "</" + tag + ">";
console.log(wrapped2);
