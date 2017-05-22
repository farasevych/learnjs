var user = "Zjenya";
var greeting = 'Hello, Mr. ' + user;
alert(greeting);

var str = "Donatas Banionis";
str = str.replace ("s", "");
console.log (str);



// функція get_square буде повертати квадрат числа, тобто, число, помножене само на себе
var get_square = function(num) {
	return num * num;
}

var a = 3;
var b = get_square(a);
console.log (b);



// функція повертає строчку, загорнуту в заданий тег
var wrap_in_tag = function(str, tagname) {
	var wrapped = '<' + tagname + '>' + str + '</' + tagname + '>';
	return wrapped;
}

var a = 'Hello, I love you, could you tell me your name';
var b = 'span';
var html = wrap_in_tag(a, b);
console.log (html);