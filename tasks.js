
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
  else{
    unknownCommand(text);
  }
  
}


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
  console.log('exit, quit and hello')
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

let fullList= ["add","remove", "list"];
function list(){
  fullList.map((bn) => 
  console.log(fullList.indexOf(bn)+1+" "+bn)); 
  }


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
    fullList.splice(parseInt(text.substring(6))-1,1)
  }
}

// The following line starts the application
startApp("Jana Tartousy")









