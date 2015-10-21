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
   checkbox.onclic = finished;
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
   if (this.checked) {
      this.parentNode.classList.add("done");
      localSave("tasklist")
   } else {
      this.parentNode.classList.remove("done");
      localSave("tasklist")
   }


}





