const noteMsg = "İptal: Exist\n\nEnter your note:"
const successfullyAdded = "Successfully added"
const invalidEntry = "Invalid Entry, Try again.";
const NaNEntry = "Not a Number Entry, Try again.";
const exited = "You exited from app.";

let notes = [];

if (localStorage.notes) {
  notes = JSON.parse(localStorage.notes);
}

function noteValue() {
  let value = prompt(noteMsg);

  if (value === null) {
    return false
  }

  value = value.trim();
  
  if (isNaN(Number(value))) {
    alert(NaNEntry);
    return noteValue();
  }  
  
  if (!value) {
    alert(invalidEntry);
    return noteValue();
  }

  notes.push(value);

  localStorage.notes = JSON.stringify(notes);

  return true;
}

function noteStorage() {
  if (notes.length > 0) {
    const noteList = notes.map((n, index) => `${index + 1} - Note: ${n}`).join("\n");
    alert(noteList);
  }

  let result = noteValue();

  if (!result) {
    alert(exited);
    return;
  }

  alert(successfullyAdded);
}

noteStorage();