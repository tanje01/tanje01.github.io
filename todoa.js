add = function() {
   var newTask;
   var list;
   var checkbox;
   var contents;
   var words;
   var priority;
   priority = document.querySelector("#priority").value;   
   console.log(priority);
   newTask = document.createElement("li");
   checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   newTask.appendChild(checkbox);
   words = document.querySelector("#enterHere").value;
   contents = document.createTextNode(words);
   newTask.className = priority;
   newTask.appendChild(contents);
   console.log(newTask.className);
   list = document.querySelector('ul');
   list.appendChild(newTask);
}
finished = function() {




}
