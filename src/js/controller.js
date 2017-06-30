(function(exports){

  function Ctrl(notelist){
    this.notelist = notelist.todoList;
  }

  Ctrl.prototype.renderNotes = function () {
    var list = document.getElementById('todo-list');
    for (var i = 0; i < this.notelist.length; i++) {
      list.innerHTML += formatNote(this.notelist[i]);
    }
    this.displaySingleOnClick(list)
  }

  function formatNote(note){
    var newNote = new NoteView(note).renderNote();
    return newNote;
  }

  function clearSingle(){
    var single = document.getElementById('todo-single');
    single.innerHTML = "";
  }

  Ctrl.prototype.displaySingleOnClick = function(element){
    var notes = element.querySelectorAll("a");
    for (var i = 0; i < notes.length; i++) {
      notes[i].addEventListener('click', this.displayNote.bind(this));
    }
  }

  Ctrl.prototype.displayNote = function(e) {
    clearSingle();
    var id = e.currentTarget.id;
    var note = this.notelist.find((item) => item.id == id);
    var single = document.getElementById('todo-single');
    var singleNoteView = new SingleNoteView(note);
    single.innerHTML += singleNoteView.renderSingleNote();
  }

  exports.Ctrl = Ctrl;

})(this);
