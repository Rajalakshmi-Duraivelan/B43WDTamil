//1.Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).
//a) Get all the countries from the Asia continent /region using the Filter function
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
    let result=[];
    var countries = request1.response;
    countries=JSON.parse(request1.response);
    console.log(countries);
    let asianCountries = countries.filter((element)=>{
        if(element.region === 'Asia'){
            return element.name;
        }
    });
    for(let item in asianCountries){
        result.push(asianCountries[item].name);
    }
    console.log("All the countries from the Asia continent /region using the Filter function : ",result);
};  

//b)Get all the countries with a population of less than 2 lakhs using Filter function
 var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v2/all");
request2.send(); 
request2.onload=function(){
    let result=[];
    var countries = request2.response;
    countries=JSON.parse(request2.response);
    //console.log(countries);
    let population = countries.filter((element)=>{
        if(element.population <= 200000){
            return element.name;
        }
    });
    for(let item in Object.keys(population)){
        result.push(population[item].name);
    }
    console.log("All the countries with a population of less than 2 lakhs using Filter function : ",result);
};  

//c)Print the following details name, capital, flag using forEach function
var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v2/all?fields=name,capital,flags");
request3.send();
request3.onload=function(){
    let result={};
    result = request3.response;
    result=JSON.parse(request3.response);
    console.log("Name, capital, flag using forEach function");
    Object.keys(result).forEach(key => {
        console.log("Name:",result[key].name,", Capital:",result[key].capital,", Flags : ",result[key].flags.png);
      });
};

//d)Print the total population of countries using reduce function
var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v2/all");
request4.send(); 
request4.onload=function(){
    let result={};
    result = request4.response;
    result=JSON.parse(request4.response);
    const totalPopulation = result.reduce((acc, element) =>{
        return acc + element.population},0)
    console.log("Total Population of countries using reduce function : ",totalPopulation);
}

//e)Print the country which uses US Dollars as currency.
var request5 = new XMLHttpRequest();
request5.open("GET","https://restcountries.com/v2/all?fields=name,currencies");
request5.send(); 
request5.onload=function(){
    let result=[];
    var data = request5.response;
    data=JSON.parse(request5.response);
    for(let i of Object.keys(data)){
        if(data[i].hasOwnProperty('currencies'))
        {
            if(data[i].currencies[0].code==='USD')
            {
                result.push(data[i].name);
            }
        }
    }
    console.log("The country which uses US Dollars as currency : ",result); 
};  