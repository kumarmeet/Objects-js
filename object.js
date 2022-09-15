const setting = await Setting.findAll({ attributes: ["field", "value"] });

		// let data = setting.filter(
		// 	(obj) =>
		// 		obj.field === "admin_email" ||
		// 		obj.field === "admin_mobileno" ||
		// 		obj.field === "location" ||
		// 		obj.field === "whatsapp_number"
		// );
		

// converting object field as a key and value
		data = setting.reduce((obj, item) => {
			obj[item["field"]] = { value: item["value"] };
			return obj;
		}, {});
///////////////////////////

const person = {
	name: "Max",
	age: 30,
	hobbies: ["Sports", "Cooking"],
	greet: function () {
		alert("Hi there!");
	},
};
//adding property after creat an object
person.isAdmin = true;
//deleteing property from the object
delete person.age;
console.log(person);

//special key names & square bracket property access
//object can use property name as a string
//typically object property name it automatically coerced to string or converted to string
const book = {
	"id name": 15, //id name is a key name not a variable
	name: "C in Depth",
	price: 690.99,
};

console.log(book["id name"]);

const movieList = document.getElementById("movie-list");
movieList.style["background-color"] = "red";
movieList.style["display"] = "block";

//property types & property order
const list = {
	table: 15,
	glass: 10,
	label: "This is a list",
	5.33: "Its a number",
	fun: () => {
		console.log("Function");
	},
	persons: ["Anna", "Jacob", "Frank"],
	"foods and brevarages": true,

	/*If you don't know the property name in advance
	(i.e.at the time you're writing the code), 
  dynamic assignment allows you to refer to a variable which will eventually
	hold the to- be - used property name.*/

	// [someDynamicVal]: 'value'
};

console.log(list["5.33"]);
console.log(list[5.33]);
console.log(list["foods and brevarages"]);

console.log(list["persons"]);

//dynamic property access and setting property dynamically
const food = "foods and brevarages";
console.log(list[food]);

//Object speard operator
const programmingLang = {
	c: "C",
	cpp: "C++",
	js: "JavaScript",
};

//it returns the new reference of object which is newly created
const lang = { ...programmingLang };

lang.py = "Python";

console.log(lang, programmingLang);

//deep copy or deep clone to object
const data = {
	id: 55,
	company: "XYZ",
	employeesNames: ["emp1", "emp2", "emp3", "emp4"], //it is a reference
};

const newData = { ...data }; // not for deep copy, newData change array then it will reflects data also with array

newData.employeesNames.push("emp5"); //newData and data, one copy of array

console.log(data, newData);

//speard operator return new reference of that object and copy all properites but in an object has another reference
//then speard operator don't deep copy of that

//deep copy of object
const deepCopyData = {
	...data,
	id: 44,
	employeesNames: [...data.employeesNames],
};

deepCopyData.employeesNames.push("Best Emp");

console.log(data, deepCopyData);

//Object.assign() older style of copying object
const city = {
	name: "Bhopal",
	pin: "0755",
	population: 6000000,
};

const cityArea = Object.assign({}, city);
console.log(cityArea);

//object destructuring
const area = {
	population: 15000,
	pin: "462002",
	acres: 69000,
	streets: 14,
	person: {
		_name: "Unknown",
		height: 5.9,
		weight: 67,
		num: [1, 2, 3, 4, 5, 6],
	},
};

const { pin, acres, ...restProperties } = area;

console.log(pin, acres, restProperties);

//extract new name using object destructuring
const { pin: pincode } = area;
console.log(pincode);

const { person: insaan } = area;
console.log(insaan);

const { height: lambai } = area.person;
console.log(lambai);

const { num: n } = area.person;

console.log(n);

//checking for property existance
const fan = {
	wingsNum: 3,
	maxSpeed: 50,
	color: "white",
	price: 1350,
};

//using in operator we can check if property exists in object or not
if ("wingsNum" in fan) {
	console.log(fan.wingsNum);
}

//introduction the this keyword
const bike = {
	gearNum: 5,
	isSelfStart: true,
	color: "black",
	maxSpeed: 180,
	_name: "pulsar",
	//don't use here arrow funtion :  IMPORTANT
	formatting: function (val1, val2) {
		this.color = val1.toUpperCase();
		this._name = val2.toUpperCase();
	},
	//shorthand to defining a method
	mileage() {
		console.log("45km/ltr");
	},
};

console.log(bike);
console.log(bike._name);
console.log(bike.color);

bike.formatting(bike._name, bike.color);

console.log(bike._name);
console.log(bike.color);

bike.mileage();

//setters and getters in an object
const obj = {
  set objName(val) {
    if (val === "") {
      return;
    }
    this._n = val;
  },
  get objName() {
    return this._n;
  },
};

obj.objName = "ObjectName"; //setter triggered
console.log(obj.objName); //getter triggered
