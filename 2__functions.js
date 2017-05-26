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



//поверне із двох чисел те, котре найбільше

var get_max = function(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}
console.log(get_max(5, 991));



//функцію, яка пише вітання для юзера в залежності від його статі.

var get_sexist_greeting = function(name, gender){
	if (gender == 'male'){
		var greet = 'Hello, Mr. ' + name + '!';
		return greet;
	} else {
		var greet = 'Hello, Ms. ' + name + '!';
		return greet;
	}
}

console.log(get_sexist_greeting('Dzenya', 'male'));
console.log(get_sexist_greeting('Djopa', 'female'));

//refactoring

var get_sexist_greeting_refactoring = function(name, gender){
	if (gender == 'male'){
		var address = 'Mr.';
	} else {
		var address = 'Ms.';
	}

	var greet = 'Hello, ' + address + ' ' + name + '!';
	return greet;
}

console.log(get_sexist_greeting_refactoring('Zjora', 'male'));



// Напишіть функцію get_over_10(), яка приймає число, і повертає його, 
// якщо воно більше 10, а якщо воно менше, то повертає 10.

var get_over_10 = function(num){
	var res = num;
	if (num < 10){
		res = 10;
	}
	return res;
}



// Напишіть функцію get_first_positive(), яка повертає перший із трьох аргументів, 
// який буде більше за 0
// Якщо жодне із значень не буде додатнім, поверніть 0

var get_first_positive = function(a, b, c){
	var res = 0;
	if (c > 0) {
		res = c;
	} if (b > 0) {
		res = b;
	} if (a > 0) {
		res = a;
	}
	return res;
}
console.log(get_first_positive(-3, 21.2, 2.2));



//хлопчик хоче придбати цигарок. Ми будемо перевіряти за 
//допомогою спеціальної функції, чи можна йому продати

var we_can_sell_cigars = function(age){
	var permit = age >= 18;
	return permit;
}

var boy_age = 18;

if (we_can_sell_cigars(boy_age)){
	console.log('Fuck, yeah!');
} else {
	console.log('No (:');
}



//ми будемо перевіряти, чи не вагітна його дівчина, 
//а з іншого, чи кохає він її. Результат(його поточний стан) буде таким:

var check_state = function(pregnant, in_love){
	if (pregnant){
		if (in_love){
			var state = 'Happy';
		} else {
			var state = 'In trouble';
		}
	} else {
		if (in_love){
			var state = 'Happy';
		} else {
			var state = 'Ok.';
		}
	}
	return state;
}

//refactoring

var check_state2 = function(pregnant, in_love){
	if (pregnant && in_love){
		var state = 'happy';
	}
	if (pregnant && !in_love){
		var state = 'in_trouble';
	}
	if (!pregnant && in_love){
		var state = 'happy to';
	}
	if (!pregnant && !in_love){
		var state = 'Ok';
	}
	return state;
}

//refactoring2

var check_state3 = function(pregnant, in_love){
	if (pregnant && in_love) || (!pregnant && in_love){
		var state = 'Happy';
	}
	if (pregnant && !in_love){
		var state = 'in_trouble';
	}
	if (!pregnant && !in_love){
		var state = 'Ok';
	}
	return state;
}

//refactoring3

var check_state4 = function(pregnant, in_love){
	if (in_love){
		var state = 'happy';
	} else {
		if (pregnant){
			var state = 'in_trouble';
		} else {
			var state = 'Ok';
		}
	}	
	return state; 
}

//refactoring4

var check_state5 = function(pregnant, in_love){
	var state = 'Happy';
	if (!in_love){
		if (pregnant){
			state = 'in_trouble';
		} else {
			state = 'Ok';
		}
	}
	return state;
}