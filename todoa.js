add = function() {
   var newTask;
   var list;
   var checkbox;
   var contents;
   var words;
   var priority;
   var task;
   task= document.querySelector("#enterHere");
   priority = document.querySelector("#priority").value;   
   console.log(priority);
   newTask = document.createElement("li");
   checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.onclick = finished;
   newTask.appendChild(checkbox);
   words = task.value;
   contents = document.createTextNode(words);
   newTask.className = priority;
   newTask.appendChild(contents);
   console.log(newTask.className);
   list = document.querySelector('ul');
   list.appendChild(newTask);
   localSave("tasklist");
   task.value="";
}
finished = function() {
   if (this.checked) {
      this.parentNode.classList.add("done");
   } else {
      this.parentNode.classList.remove("done");
   }

    localSave("tasklist");
}





