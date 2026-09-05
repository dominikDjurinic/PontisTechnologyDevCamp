#!/usr/bin/env node

const { error } = require("console");
const fs = require("fs/promises");

// Funkcija koja asinkrono cita datoteke u paraleli (Promise.all)
async function readFiles(files) {
  try {
    return await Promise.all([
      fs.readFile(files[0], "utf-8"),
      fs.readFile(files[1], "utf-8"),
      fs.readFile(files[2], "utf-8"),
    ]);
  } catch (err) {
    console.error("Greska" + err.message);
  }
}

// Funkcija koja broji rijeci u datotekama i vraća sortirani rezultat
async function wordCounter() {
  // Odabir .txt datoteka za analizu: unos ili default
  let files = process.argv.slice(2);

  if (files.length < 3) {
    files = ["first.txt", "second.txt", "third.txt"];
  }

  //console.log(files);

  const filesText = await readFiles(files);

  //console.log(filesText);

  const wordCounters = [
    { fileName: files[0], count: 0 },
    { fileName: files[1], count: 0 },
    { fileName: files[2], count: 0 },
  ];

  //console.log(wordCounters);

  for (let i = 0; i < filesText.length; i++) {
    // Brojenje rijeci u datoteci
    wordCounters[i].count = filesText[i].split(" ").length;
  }

  wordCounters.sort((a, b) => b.count - a.count); // desc sortiranje

  for (const counter of wordCounters) {
    console.log(counter.fileName + " (broj rijeci): " + counter.count);
  }

  return;
}

wordCounter();
