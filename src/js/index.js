(function(){

  var notes = [
    {id: 001, title:"Shopping with Josue", content:"buy skimmed milk and cereals for breakfast.", rank: 1},
    {id: 002, title:"Book floating tank", content:"Groupon voucher in the second drawers.", rank: 2},
    {id: 003, title:"Cook chicken", content:"Expires 01/07. Get the ingredient for the curry.", rank: 3}
  ]

  var noteList = new NoteList(notes);
  var ctrl = new Ctrl(noteList);

  ctrl.renderNotes();

  var checkbox = document.querySelector('input[name="done"]');
  // checkbox.addEventListener('click', alert("wow!"),);


  if (checkbox.checked){
    document.querySelector('a[id="2"] input[name="urgent"]').checked = false;
  }

}())


// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/todos');
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   var noteSchema = mongoose.Schema({
//       title: String,
//       content:  String,
//       rank: Number
//   });
//
//   var Note = mongoose.model('Note', noteSchema);
//   var firstNote = new Note({
//     title: "Shopping with Josue",
//     content: "buy skimmed milk and cereals for breakfast.",
//     rank: 1
//   });
//
//   firstNote.save(function(err, success){
//     if (err){
//       console.error(err);
//     }
//     console.log("success!")
//   })
// });
