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




var merry = function(bride, groom){
	return 'Congratulations, ' + groom + ' and ' + bride + ', you are married!';
};

var he = "John";
var she = "Mary";
var happy_message = merry(she, he);
console.log(happy_message);



//Напишіть функцію round_area(), яка рахує площу кола 
//по переданому їй діаметру(вважаючи, що число Пі дорівнює 3.14).

var round_area = function(diameter){
	var radius = diameter/2;
	var area = 3.14*radius*radius;
	return area;
}

console.log (round_area(10));