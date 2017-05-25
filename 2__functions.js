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



//Напишіть функцію wrap_h2, яка повертає передану їй строчку, 
//обрамлену в тег h2

var str = 'Fireball';

var wrap_h2 = function(a){
	return '<h2>' + a + '</h2>';
}

var wrapped_h2 = wrap_h2(str);
console.log(wrapped_h2);



//Напишіть функцію round_area(), яка рахує площу кола 
//по переданому їй діаметру(вважаючи, що число Пі дорівнює 3.14).

var round_area = function(diameter){
	var radius = diameter/2;
	var area = 3.14*radius*radius;
	return area;
}

console.log (round_area(10));



//wrap_in_tag(str, tag), яка повертає строчку, загорнуту в тег, 
//а також функцію wrap_in_div, яка, використовуючи першу функцію, 
//загортає строчку в тег div.

var str = '2TE10M';
var wrap_in_tag = function(str, tag){
    var wrap_string = '<' + tag + '>' + str + '</' + tag + '>';
    return wrap_string;
}
var kuku = wrap_in_tag('2017-05-25', 'span');
console.log(kuku);

var wrap_in_div = function(str){
    var new_string = wrap_in_tag(str, 'div');
    return new_string;
}

var test_wrap_in_div = wrap_in_div('testing_wrap_in_div');
console.log(test_wrap_in_div);



// напишіть функцію get_link(str), яка повертає повний лінк на підрозділ сайту str
// get_link('blog.php') -> 'http://example.com/blog.php'
// доменна адреса має братись із змінної site_domain


var site_domain = 'example.com';
var get_link = function(str){
    var link = 'https://' + site_domain + '/' + str;
    return link;
}

var test_link = get_link('blog.php');
console.log(test_link);