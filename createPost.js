const posts = [];



function createPost() {

updateLastUserActivityTime();

 return new Promise( (resolve, reject) => {

 setTimeout( () => {

 posts.push({title: 'POST2'});

 resolve()

 }, 3000)

 }) 

}





function deletePost(){

 return new Promise((resolve, reject) => {

 setTimeout( () => {

 if(posts.length > 0){

 const poppedElement = posts.pop();

 resolve(poppedElement);

 } else {

 reject("ERROR")

 }

 }, 1000)

 })

}



function updateLastUserActivityTime(){

 return new Promise((resolve, reject) => {

 setTimeout( () => {

resolve(var currentdate = new Date();

var datetime = "Last Sync: " + currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();)

},1000)

})

}



async function fun1(){



await create2ndPost();

const promise2 = await updateLastUserActivityTime();

const promise3 = await deletePost();



Promise.all([promise2,promise3]).then((values) => console.log(values));

}

fun1()
