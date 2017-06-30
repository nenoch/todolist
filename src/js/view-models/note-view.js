(function(exports){

  function NoteView(note){
    this.note = note;
  }

  NoteView.prototype.renderNote = function () {
    var path = this.note.title.toLowerCase().split(" ").join("-");
    return `
    <a href="#${path}" id="${this.note.id}" class="list-group-item">
      <span class="badge">${this.note.rank}</span>
      <h4 class="list-group-item-heading">${this.note.title}</h4>
      <div class="checkbox">
        <label for="done">
          <input type="checkbox" name="done">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          Done!
        </label>
      </div>
      <div class="checkbox pull-right">
        <label for="urgent">
          <input type="checkbox" name="urgent" checked>
          <span class="glyphicon glyphicon-fire" aria-hidden="true"></span>
          Urgent!
        </label>
      </div>
      <p class="list-group-item-text">${this.note.content}</p>
    </a>
    `
  }

  exports.NoteView = NoteView;

})(this);
