var fs = Require ('fs');
var data = fs.readFileSync('database.json');
var js1 = JSON.parse(data);
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(define){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${define}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js hello batata
 * ```
 * 
 * The text received would be "hello batata!"
 * This function  then directs to other functions
 * 
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n' || text.startsWith('hello')){
    hello(text);
  }
  
  else if (text === 'help\n'){
    help();
  }
  else if (text === 'list\n'){
    list();
  }
  else if (text === 'add\n' || text.startsWith('add')){
  add(text);
  }
  else if (text === 'remove\n' || text.startsWith('remove')){
    remove(text);
  }
  else if (text === 'edit\n' || text.startsWith('edit')){
    edit(text);}
  else if (text === 'check\n' || text.startsWith('check')){
      check(text);}
  else if (text === 'uncheck\n' || text.startsWith('uncheck')){
        uncheck(text);}
  else{
    unknownCommand(text);
  }
  
}
let tasks=
[{"js1":"drinkcoffee","done":true},
{"js1":"go to codi","done":false},
{"js1":"code","done":false},
{"js1":"assignments","done":true},
{"js1":"timeover","done":true},
{"js1":"sleep","done":false}]

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text.trim() + "!")
}
/** 
 * Gives you all the possible commands
*/
function help(){
  console.log('hello :hello!\nhello+text :hello text!\nlist :shows the  list of tasks\nadd :add elements or tasks to the list\nremove :removes element or tasks from the list\ncheck :check the task if it is done\nuncheck :it will not check the undone tasks\n')
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
var data= JSON.stringify(js1, null, 2)
  fs.writeFileSync('database.json',data, 'utf8');


let fullList= ["add","remove", "list", "edit"];
function list(){
  fullList.map((bn) => 
  console.log(fullList.indexOf(bn)+1+" "+bn)); 
  }

  var done = false;
  function firstlist() {
    fullList.forEach(function list(val, n1) {
      if (done) {
        console.log(n1 + 1 + " - [✓] " + val);
      } else console.log(n1 + 1 + " - [ ] " + val);
    });}

 function add(text){
  if
    (text.slice(3).trim() == "" )
    console.log("Error")
  
  else {
    fullList.push(text.slice(3).trim())
    console.log("done")
 }}


 function remove(text){
  if(text.slice(6).trim() == ""){
    fullList.pop();
  }else {
  } 
 if(parseInt(text.substring(6))>fullList.length){
    console.log("number does not exist")
 }
 else {
   fullList.splice(parseInt(text.substring(6))-1,1)
 }
}

function edit(text){
  if(text.slice(4).trim() == ""){
    console.log("Error")
  }
  else if(parseInt(text.substring(5))<fullList.length){
    fullList[parseInt(text.substring(4))-1]=text.substring(6).trim()
  }
  else if(isNaN(text.substring(4))){
   fullList.pop()
   fullList.push(text.slice(4).trim())
  }
  }

  //check function
  function check(text){
    if(text.slice(5).trim()==""){
      console.log("Error")
    }else{
      fullList[parseInt(text.slice(6).trim())-1].done =true;
    }
  }
  //uncheck function
  function uncheck(text){
    if(text.slice(7).trim()==""){
      console.log("Error")
    }else{
      fullList[parseInt(text.slice(8).trim())-1].done =false;
    }}

    var fs = required ('fs');

  try{
  if (fs.existsSync(process.argv[2])){
    var data = fs.readFileSync(process.argv[2]);
  }else{
    var data = fs.readFileSync('database.json');
  }
  var js1 = JSON.parse(data);
}
  catch(Error){
  console.error(Error);
}

// The following line starts the application
startApp("Jana Tartousy")









