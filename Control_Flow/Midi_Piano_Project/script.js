//
const audioContext = new AudioContext();

const NOTE_DETAILS = [
  //Common convention using capital and underscores
  { note: "C", key: "Z", frequency: 261.626, active: false },
  { note: "Db", key: "S", frequency: 277.183, active: false },
  { note: "D", key: "X", frequency: 293.665, active: false },
  { note: "Eb", key: "D", frequency: 311.127, active: false },
  { note: "E", key: "C", frequency: 329.628, active: false },
  { note: "F", key: "V", frequency: 349.228, active: false },
  { note: "Gb", key: "G", frequency: 369.994, active: false },
  { note: "G", key: "B", frequency: 391.995, active: false },
  { note: "Ab", key: "H", frequency: 415.305, active: false },
  { note: "A", key: "N", frequency: 440, active: false },
  { note: "Bb", key: "J", frequency: 466.164, active: false },
  { note: "B", key: "M", frequency: 493.883, active: false },
];

//const PI = 3.14;

document.addEventListener("keydown", (e) => {
  if (e.repeat) return; //Exit out of the function => Known as a guard clause
  console.log("Down");
  const keyboardKey = e.code;
  const noteDetail = getNoteDetail(keyboardKey);

  if (noteDetail == null) return;
  noteDetail.active = true; //Add active property
  playNotes();
});

document.addEventListener("keyup", (e) => {
  console.log("Up");
  const keyboardKey = e.code;
  const noteDetail = getNoteDetail(keyboardKey);

  //Check if noteDetail exists
  if (noteDetail == null) return;
  noteDetail.active = false; //Add active property

  playNotes();
});

function getNoteDetail(keyboardKey) {
  return NOTE_DETAILS.find((n) => `Key${n.key}` === keyboardKey); //Get the key pressed append it and check if it is equal to our keyboard key
}

function playNotes() {
  //Apply different classes to different keys
  NOTE_DETAILS.forEach((n) => {
    //Get each individual keys
    const individualKeyElement = document.querySelector(
      `[data-note="${n.note}"]`
    );
    individualKeyElement.classList.toggle("active", n.active || false); //If n.active is undefined || false
    if (n.oscillator != null) {
      n.oscillator.disconnect(); //Stop the noise and remove from the audio context
    }
  });

  //Get active notes

  const activeNotes = NOTE_DETAILS.filter((note) => note.active);
  const gain = 1 / activeNotes.length; //Determine percentage of volume
  activeNotes.forEach((note) => {
    startNote(note, gain);
  });
}

function startNote(noteDetail, gain) {
  const gainNode = audioContext.createGain(); //Determine the volume of the output
  gainNode.gain.value = gain;
  //Oscillator to play a noise at a specific frequency
  const oscillator = audioContext.createOscillator();
  oscillator.frequency.value = noteDetail.frequency;
  oscillator.type = "sine";

  //Connect oscillator to audio context
  oscillator.connect(gainNode).connect(audioContext.destination);
  oscillator.start(); //Save a reference to the oscillator on the note detail
  noteDetail.oscillator = oscillator;
}
