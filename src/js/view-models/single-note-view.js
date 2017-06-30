(function(exports){

  function SingleNoteView(note){
    this.note = note;
  }

  SingleNoteView.prototype.renderSingleNote = function () {
    return `
    <div class="panel-heading">
      <h3 class="panel-title">${this.note.title}</h3>
    </div>
    <div class="panel-body">
      ${this.note.content}
    </div>
    `
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
