import React, { useRef, useEffect } from "react";

interface ChordData {
  quality: string;
  angle: number;
}

const directionMapping = {
  0: { dx: 12, dy: 0 },
  1: { dx: 6, dy: -3 },
  2: { dx: 8, dy: -8 },
  3: { dx: 13, dy: 13 },
  4: { dx: 13, dy: -13 },
  5: { dx: 7, dy: 0 },
  6: { dx: 5, dy: -20 },
  7: { dx: 7, dy: 7 },
  8: { dx: 13, dy: -7 },
  9: { dx: 13, dy: 7 },
  10: { dx: 0, dy: 12 },
  11: { dx: 6, dy: 3 },
};

const CanvasPlot: React.FC<{ inputData: ChordData[]; title: string }> = ({
  inputData,
  title,
}) => {
  const circlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (circlesRef.current) {
      const circlesContainer = circlesRef.current;
      circlesContainer.innerHTML = ""; // Clear previous circles

      let x = 10; // Starting x position
      let y = 80; // Starting y position
      let previousX = x;
      let previousY = y;

      inputData.forEach(({ quality, angle }, index) => {
        const { dx, dy } = directionMapping[angle];
        x += dx;
        y += dy;
        const radius = 4;

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.left = x + "px";
        circle.style.top = y + "px";
        circle.style.backgroundColor = getColor(quality);
        circle.style.width = radius * 2 + "px";
        circle.style.height = radius * 2 + "px";
        circle.style.position = "absolute";
        circle.style.borderRadius = "50%";
        circle.style.transform = "translate(-50%, -50%)";

        circlesContainer.appendChild(circle);

        previousX = x;
        previousY = y;
      });
    }
  }, [inputData]);

  return (
    <>
      {title}
      <div
        ref={circlesRef}
        style={{
          position: "relative",
          width: 450,
          height: 150,
          overflow: "visible",
          backgroundColor: "black",
        }}
      ></div>
    </>
  );
};

const getColor = (quality: string) => {
  switch (quality) {
    case "m7":
      return "#33f";
    case "m9":
      return "aqua";
    case "7":
      return "red";
    case "9":
      return "#d33";
    case "":
      return "green";
    case "M7":
      return "#00cc00";
    case "m7b5":
      return "yellow";
    case "m6":
      return "violet";
    case "7#5#9":
      return "darkred";
    case "7#11":
      return "pink";
    case "7#5":
      return "gray";
    case "7#9":
      return "brown";
    default:
      return "red";
  }
};

const SATIN_DOLL = ` Dm7 G7 | Dm7 G7 | Em7 A7 | Em7 A7 |
 D7 | Db7 | C | A7 |
 Dm7 G7 | Dm7 G7 | Em7 A7 | Em7 A7 |
 D7 | Db7 | C | C |
 Gm7 | C7 | F | F |
 Am7 | D7 | G7 | A7 |
 Dm7 G7 | Dm7 G7 | Em7 A7 | Em7 A7 |
 D7 | Db7 | C | C |`;

const TUNE_UP = ` Em7 | A7 | DM7 | DM7 |
 Dm7 | G7 | CM7 | CM7 |
 Cm7 | F7 | BbM7 | BbM7 |
 Em7 | F7 | Bb | A7 |
 Em7 | A7 | DM7 | DM7 |
 Dm7 | G7 | CM7 | CM7 |
 Cm7 | F7 | BbM7 | BbM7 |
 Em7 | A7 | DM7 | DM7 |`;

const AUTUMN_LEAVES = `Cm7 | F7 | BbM7 | EbM7 |
 Am7b5 | D7 | Gm7 | Gm6 |
 Cm7 | F7 | BbM7 | EbM7 |
 Am7b5 | D7 | Gm6 | Gm6 |
 D7 | D7 | Gm6 | Gm6 |
 Cm7 | F7 | BbM7 | BbM7 |
 Am7b5 | D7 | Gm7 C7 | Fm7 Bb7 |
 Am7b5 | D7 | Gm6 | G7 |`;

const RECORDA_ME = ` Am6 | Am6 | Am6 | Am6 |
 Cm6 | Cm6 | Cm6 | Cm6 F7 |
 BbM7 | Bbm7 Eb7 | AbM7 | Abm7 Db7 |
 GbM7 | Gm7 C7 | FM7 FM7 FM7 E7#9 | E7#9 |`;

const GIANT_STEPS = ` BM7 D9 | GM7 Bb9 | EbM7 | Am9 D9 |
 GM7 Bb9 | EbM7 Gb9 | BM7 | Fm9 Bb9 |
 EbM9 | Am9 D9 | GM7 | Dbm7 Gb9 |
 BM7 | Fm9 Bb9 | EbM7 | Dbm7 Gb9 |`;

const STELLA_BY_STARLIGHT = ` Em7b5 | A7 | Cm7 | F7 |
 Fm7 | Bb7 | EbM7 | Ab7#11 |
 BbM7 | Em7b5 A7#5#9 | Dm7 | Bbm7 Eb7 |
 FM7 | Gm7 C7 | Am7b5 | D7#5#9 |
 G7#5 | G7#5 | Cm7 | Cm7 |
 Ab7#11 | Ab7#11 | BbM7 | BbM7 |
 Em7b5 | A7#5#9 | Dm7b5 | G7#5#9 |
 Cm7b5 | F7#5#9 | BbM7 | BbM7 |`;

const MISTY = ` EbM7 | Bbm7 Eb7 | AbM7 | Abm7 Db7 |
EbM7 Cm7 | Fm7 Bb7 | Gm7 C7 | Fm7 Bb7 |
EbM7 | Bbm7 Eb7 | AbM7 | Abm7 Db7 |
EbM7 Cm7 | Fm7 Bb7 | EbM7 Abm | EbM7 |
Bbm7 | Eb7 | AbM7 | AbM7 |
Am7 | D7 F7 | Bb7 C7 | F7 Bb7 |
EbM7 | Bbm7 Eb7 | AbM7 | Abm7 Db7 |
EbM7 Cm7 | Fm7 Bb7 | EbM7 | Bb7sus4 |`;

const HOW_HIGH_THE_MOON = ` GM7 | GM7 | Gm7 | C7 |
FM7 | FM7 | Fm7 | Bb7 |
Eb7 | Am7b5 D7b9 | Gm7 | Am7b5 D7 |
Bm7 | Am7 D7 | Bm7 Bb7 | Am7 D7 |
GM7 | GM7 | Gm7 | C7 |
FM7 | FM7 | Fm7 | Bb7 |
Eb7 | Am7b5 D7b9 | GM7 | Am7b5 D7b9 |
Bm7 Bb7 | Am7 D7 | GM7 E7alt | Am7 D7 |`;

const ILL_REMEMBER_APRIL = ` GM7 | GM7 | GM7 | GM7 |
Gm | Gm+ | Gm6 | Gm+ |
Am7b5 | D7 | Bm7b5 | E7 |
Am7 | D7 | GM7 | GM7 G7alt |
Cm7 | F7 | BbM7 | Dm7 G7 |
Cm7 | F7 | BbM7 | BbM7 |
Am7 | D7 | GM7 | GM7 |
F#m7 | B7 | EM7 | Am7 D7 |
GM7 | GM7 | GM7 | GM7 |
Gm | Gm+ | Gm6 | Gm+ |
Am7b5 | D7 | Bm7b5 | E7 |
Am7 | D7 | GM7 | Am7 D7 |`;

const OLEO = ` Bb6 Gm7 | Cm7 F7 | Bb6 Gm7 | Cm7 F7 |
Fm7 Bb7 | EbM7 Ebm7 | Dm7 G7 | Cm7 F7 |
Bb6 Gm7 | Cm7 F7 | Bb6 Gm7 | Cm7 F7 |
Fm7 Bb7 | EbM7 Ebm7 | Dm7 G7 | Cm7 F7 Bb6 Bb6 |
D7 | D7 | G7 | G7 |
C7 | C7 | F7 | F7 |
Bb6 Gm7 | Cm7 F7 | Bb6 Gm7 | Cm7 F7 |
Fm7 Bb7 | EbM7 Ebm7 | Dm7 G7 | Cm7 F7 Bb6 Bb6 |`;

const YARDBIRD_SUITE = ` CM7 | Fm7 Bb7 | CM7 Bb7 | A13b9 |
D7 | G7 | Em7 A7alt | Dm7 G13b9 |
CM7 | Fm7 Bb7 | CM7 Bb7 | A13b9 |
D7 | G7 | CM7 | F#m7b5 B7alt |
Em | F#m7b5 B7alt | Em | A7alt |
Dm | Em7b5 A7alt | D7 | Dm7 G13b9 |
CM7 | Fm7 Bb7 | CM7 Bb7 | A13b9 |
D7 | G7 | CM7 A7alt | Dm7 G13b9 |`;

const STAR_EYES = ` EbM7 | Fm7 Bb13 | EbM7 | Ebm7 Ab7 |
DbM7 | Gm7b5 C7 | FM7 | B13 Bb13 |
EbM7 | Fm7 Bb13 | EbM7 | Ebm7 Ab7 |
DbM7 | Gm7b5 C7 | FM7 | B13 Bb13 |
AbM7 | AbM7 | Abm7 | Db13 |
GbM7 | GbM7 | Fm7 | Bb9sus Bb13 |
EbM7 | Fm7 Bb13 | EbM7 | Ebm7 Ab7 |
DbM7 | Gm7b5 C7 | FM7 | B13 Bb13 |
Eb7#9 D7#5#9 | Db7#9 C7#9 | Fm7 Bb9sus | EbM7 EbM7 Fm7 Bb7 |`;

const SOLAR = ` Cm69 | Cm69 | Gm7 | C7 |
FM9 | FM9 | Fm7 | Bb7 |
EbM9 | Ebm7 Ab7 | DbM9 | Dm7b5 G7alt |`;

const AFTERNOON_IN_PARIS = ` CM7 | Cm7 F7 | BbM7 | Bbm7 Eb7 |
AbM7 | Dm7 G7b9 | CM7 Am7 | Dm7 G7 |
CM7 | Cm7 F7 | BbM7 | Bbm7 Eb7 |
AbM7 | Dm7 G7b9 | CM7 | Am7 |
Dm7 | G7 | CM7 | Am7 |
Dm7 | G7 | C#m7 F#7 | Dm7 G7 |
CM7 | Cm7 F7 | BbM7 | Bbm7 Eb7 |
AbM7 | Dm7 G7b9 | CM7 Am7 | Dm7 G7 |`;

const AINT_MISBEHAVING = ` Eb6 Eo7 | Fm7 F#o7 | Gm7 G7 | AbM7 Abm7 |
Gm7 C7 | Fm7 Bb7 | G7 C7 | F7 Bb7 |
Eb6 Eo7 | Fm7 F#o7 | Gm7 G7 | AbM7 Abm7 |
Gm7 C7 | Fm7 Bb7 | Eb6 Abm | Eb6 G7 |
Cm | Cm+ | Cm6 | C7 |
Bb6 G7 | Cm7 F7 | Bb7 C7 | F7 Bb7 |
Eb6 Eo7 | Fm7 F#o7 | Gm7 G7 | AbM7 Abm7 |
Gm7 C7 | Fm7 Bb7 | Eb6 | Fm7 Bb7 |`;

const AIREGIN = ` Fm | C7 | Fm | F7alt |
Bbm | F7 | Bbm | Bb7alt |
Db | Dm7 G7 | C | Dbm7 Gb7 |
Cb | Cm7 F7 | BbM7 | BbM7 |
Bbm7 | Eb7 | AbM7 | Gm7b5 C7 |
Fm | C7 | Fm | F7alt |
Bbm | F7 | Bbm | Bb7alt |
Db | Dm7b5 G7 | Cm7b5 | F7 |
Bbm7 | Eb7 | Ab | Gm7b5 C7alt |`;

const ALICE_IN_WONDERLAND = ` Dm7 | G7 | CM7 | FM7 |
Bm7b5 | E7 | Am7 | Eb7 |
Dm7 | G7 | Em7 | Am7 |
Dm7 | G7 | Em7 | A7 |
Dm7 | G7 | CM7 | FM7 |
Bm7b5 | E7 | Am7 | Eb7 |
Dm7 | G7 | Em7 | Am7 |
Dm7 | G7 | CM7 | CM7 CM7 A7 |
D7 | G7 | Em7 | Am7 |
Dm7 | G7 | CM7 | FM7 |
F#m7b5 | B7b9 | Em7 | A7 |
Dm7 Dm7 A7 | Dm7 Dm7 A7 | Dm7 Dm7 Ab7 | G7 |
Dm7 | G7 | CM7 | FM7 |
Bm7b5 | E7 | Am7 | Eb7 |
Dm7 | G7 | Em7 | Am7 |
Dm7 | G7 | CM7 | A7alt |`;

const I_FALL_IN_LOVE_TOO_EASILY = ` Dm7 G7 | C F | Bm7b5 E7 | Am |
Bm7b5 E7+ | Am | F#m7 B7 | Bm7b5 E7 |
F#m7b5 B7 | E7 | Em7 A7 | Dm |
Dm7 G7 | C A7 | Dm7 G7 | C C Em7b5 A7alt |`;

const LOVE_FOR_SALE = ` EbM7 | EbM7 | Bbm7 | Bbm7 |
EbM7 | EbM7 | Bbm7 | Bbm7 |
Ebm7 | Ab7 | DbM7 | Gb7 |
Cm7 | F7alt | Bbm7 | Bbm7 |
EbM7 | EbM7 | BbM7 | BbM7 |
EbM7 | EbM7 | BbM7 | BbM7 |
Ebm7 | Ab7 | DbM7 | Gb7 |
Cm7 | F7+ | Bbm7 | Bbm7 |`;

const ALL_OF_YOU = ` Fm7b5 | Eb6 | Fm7b5 | Fm7b5 |
Fm7b5 | Eb6 | Abm7 | Db7 |
Gm7 | C7#5 | Fm7 | Bb7 |
EbM7 Db9 | C7b9 | Fm7 | Bb7 |
Fm7b5 | Eb6 | Fm7b5 | Fm7b5 |
Fm7b5 | Eb6 | Gm7 | C7b9 |
AbM7 | Am7b5 D7b9 | Gm7 Db7#11 | C7 |
Fm7 C7b9 | Fm7 Bb7 | Eb6 | Bb9sus4 |`;

const ALL_OF_ME = ` C6 | C6 | E7 | E7 |
A7 | A7 | A7 Dm | Dm |
E7 | E7 | Am | Am |
D7 | D7 | G7 | G7 |
C6 | C6 | E7 | E7 |
A7 | A7 | A7 Dm | Dm |
F6 | Fm | C6 Em7b5/Bb | A7 |
Dm7b5 | G7 | C6 Ebo7 | Dm7 G7 |`;

const ALL_THE_THINGS_YOU_ARE = ` Fm7 | Bbm7 | Eb7 | AbM7 |
DbM7 | Dm7 G7 | CM7 | CM7 |
Cm7 | Fm7 | Bb7 | EbM7 |
AbM7 | Am7 D7 | GM7 | E7alt |
Am7 | D7 | GM7 | GM7 |
F#m7 | B7 | EM7 | C7alt |
Fm7 | Bbm7 | Eb7 | AbM7 |
DbM7 | Dbm7 | Cm7 | Bm7 |
Bbm7 | Eb7 | AbM7 | Gm7 C7alt |`;

const ANTHROPOLOGY = ` Bb G7 | Cm7 F7 | Bb G7 | Cm7 F7 |
Bb7 | Eb Ebm6 | Dm7 G7 | Cm7 F7 |
Bb G7 | Cm7 F7 | Bb G7 | Cm7 F7 |
Bb7 | Eb Ebm6 | Dm7 G7 | Cm7 F7 Bb Bb |
D7 | D7 | G7 | G7 |
C7 | C7 | F7 | F7 |
Bb G7 | Cm7 F7 | Bb G7 | Cm7 F7 |
Bb7 | Eb Ebm6 | Dm7 G7 | Cm7 F7 Bb Bb |`;

const MOOSE_THE_MOOCHE = ` Bb | Cm7 F7 | Bb | Cm7 F7 |
Fm7 Bb7 | Eb7 | Bb | Cm7 F7 |
Bb | Cm7 F7 | Bb | Cm7 F7 |
Fm7 Bb7 | Eb7 Ab7 | Bb | Bb |
Am7b5 | D7 | Dm7 | G7 |
Gm7 | C7 | Cm7 | F7 |
Bb | Cm7 F7 | Bb | Cm7 F7 |
Fm7 Bb7 | Eb7 | Bb | Cm7 F7 |`;

const PASSPORT = ` Bb | Cm7 F7 | Bb | Cm7 F7 |
Fm7 Bb7 | Eb | Bb G7 | Cm7 F7 |
Bb | Cm7 F7 | Bb | Cm7 F7 |
Fm7 Bb7 | Eb | Bb | Bb |
D7 | D7 | G7 | G7 |
C7 | C7 | F7 | F7 |
Bb | Cm7 F7 | Bb | Cm7 F7 |
Fm7 Bb7 | Eb | Bb G7 | Cm7 F7 |`;

const COTTON_TAIL = ` Ab Fm7 | Bbm7 Eb7 | Ab Fm7 | Bbm7 Eb7 |
Ab7b5 | Db Do | Ab Fm7 | Bbm7 Eb7 |
Ab Fm7 | Bbm7 Eb7 | Ab Fm7 | Bbm7 Eb7 |
Ab7b5 | Db Do | Ab Fm7 | Eb7 Ab |
C7 | C7 | F7 | F7 |
Bb7 | Bb7 | Eb7 | Eb7 |
Ab Fm7 | Bbm7 Eb7 | Ab Fm7 | Bbm7 Eb7 |
Ab7b5 | Db Do | Ab Fm7 | Eb7 Ab |`;

const CRAZEOLOGY = ` Bb | Cm7 F7 | Bb Bbo | Cm7 F7 |
Abm7 Db7 | Gb | Cm7 F7 | Bb |
Bb | Cm7 F7 | Bb Bbo | Cm7 F7 |
Abm7 Db7 | Gb | Cm7 F7 | Bb |
D7 | D7 | Dm7 | G7 |
C7 | C7 | Cm7 | F7 |
Bb | Cm7 F7 | Bb Bbo | Cm7 F7 |
Abm7 Db7 | Gb | Cm7 F7 | Bb |`;

const DEXTERITY = ` BbM7 | Cm7 F7 | BbM7 | Cm7 F7 |
BbM7 Bb7 | Eb6 Ab7 | Dm7 G7 | Cm7 F7 |
BbM7 | Cm7 F7 | BbM7 | Cm7 F7 |
BbM7 Bb7 | Eb6 Ab7 | Cm7 F7 | BbM7 |
Am7 | D7 | Dm7 | G7 |
Gm7 | C7 | Cm7 | F7 |
BbM7 | Cm7 F7 | BbM7 | Cm7 F7 |
BbM7 Bb7 | Eb6 Ab7 | Cm7 F7 | BbM7 |`;

const CEORA = ` AbM7 | Bbm7 Eb7 | AbM7 | Ebm7 Ab7 |
DbM7 | Dm7 G7 | Cm7 | F7alt |
Bbm7 | Eb7 | Cm7 | F7 |
Dm7 | G7 | Cm7 F7 | Bbm7 Eb7 |
AbM7 | Bbm7 Eb7 | AbM7 | Ebm7 Ab7 |
DbM7 | Dm7 G7 | Cm7 | F7alt |
Bbm7 | Eb7 | Cm7b5 | F7 |
Bbm7 | Eb7sus4 | AbM7 | Bbm7 Eb7b9 |`;

const CHEROKEE = ` BbM7 | BbM7 | Fm7 | Bb7 |
EbM7 | EbM7 | Ab9 | Ab9 |
BbM7 | BbM7 | C7 | C7 |
Cm7 | G7b9 | Cm7 | F7+ |
BbM7 | BbM7 | Fm7 | Bb7 |
EbM7 | EbM7 | Ab9 | Ab9 |
BbM7 | BbM7 | C7 | C7 |
Cm7 | F7 | BbM7 | BbM7 |
C#m7 | F#7 | BM7 | BM7 |
Bm7 | E7 | AM7 | AM7 |
Am7 | D7 | GM7 | GM7 |
Gm7 | C7 | Cm7 | F7+ |
BbM7 | BbM7 | Fm7 | Bb7 |
EbM7 | EbM7 | Ab9 | Ab9 |
BbM7 | BbM7 | C7 | C7 |
Cm7 | F7 | BbM7 | F7#5#9 |`;

const BLUE_BOSSA = ` Cm69 | Cm69 | Fm9 | Fm9 |
Dm7b5 | G7#5#9 | Cm69 | Cm69 |
Ebm9 | Ab13 | DbM9 | DbM9 |
Dm7b5 | G7#5#9 | Cm69 | Dm7b5 G7#5#9 |`;

const BY_INTERVALS = `Bm B C D F A D Ab Eb B Ab Gb F`;

const STANDARDS = {
  "By Intervals": BY_INTERVALS,
  "Recorda Me": RECORDA_ME,
  "Giant Steps": GIANT_STEPS,
  "Tune Up": TUNE_UP,
  Ceora: CEORA,
  "Satin Doll": SATIN_DOLL,
  "Blue Bossa": BLUE_BOSSA,
  "Autumn Leaves": AUTUMN_LEAVES,
  "I Fall in Love Too Easily": I_FALL_IN_LOVE_TOO_EASILY,
  "Alice in Wonderland": ALICE_IN_WONDERLAND,
  "Love for Sale": LOVE_FOR_SALE,
  "Stella by Starlight": STELLA_BY_STARLIGHT,
  Misty: MISTY,
  "How High The Moon": HOW_HIGH_THE_MOON,
  "I'll Remember April": ILL_REMEMBER_APRIL,
  "Yardbird Suite": YARDBIRD_SUITE,
  "Star Eyes": STAR_EYES,
  Solar: SOLAR,
  "Afternoon In Paris": AFTERNOON_IN_PARIS,
  "Aint Misbehavin": AINT_MISBEHAVING,
  Oleo: OLEO,
  Cottontail: COTTON_TAIL,
  Crazeology: CRAZEOLOGY,
  Dexterity: DEXTERITY,
  Anthropology: ANTHROPOLOGY,
  "Moose the Mooche": MOOSE_THE_MOOCHE,
  Passport: PASSPORT,
  // Airegin: AIREGIN,
  "All of You": ALL_OF_YOU,
  "All of Me": ALL_OF_ME,
  "All the Things You Are": ALL_THE_THINGS_YOU_ARE,
  Cherokee: CHEROKEE,
};

// Mapping from note names to root numbers
const noteToNumber = {
  C: 0,
  "C#": 1,
  Db: 1,
  D: 2,
  "D#": 3,
  Eb: 3,
  E: 4,
  F: 5,
  "F#": 6,
  Gb: 6,
  G: 7,
  "G#": 8,
  Ab: 8,
  A: 9,
  "A#": 10,
  Bb: 10,
  B: 11,
};

const parseChord = (chord: string): [number, string] => {
  const rootMatch = chord.match(/^[A-G][#b]?/);
  const root = rootMatch ? rootMatch[0] : "";
  const quality = chord.slice(root.length);
  return [noteToNumber[root], quality];
};

// Function to calculate interval between two roots
const calculateInterval = (root1: number, root2: number): number => {
  let interval = root2 - root1;
  if (interval < 0) interval += 12;
  return interval;
};

// Main function to process the chord progression and ignore repeated chords
const processProgression = (progression: string): any[] => {
  // Merge all lines into one, replace all '|' with spaces, and squash consecutive spaces into one
  const chords = progression
    .replace(/\n/g, " ")
    .replace(/\|/g, " ")
    .split(/\s+/)
    .filter((chord) => chord !== "");

  let result = [];
  let previousRoot = null; // To calculate intervals
  let previousChord = ""; // To check for repeated chords

  chords.forEach((chord) => {
    // Skip if chord is repeated
    if (chord === previousChord) return;
    previousChord = chord;

    // Directly parse the chord since we're not handling concatenated chords like "Dm7G7"
    const [root, quality] = parseChord(chord.trim());
    const interval =
      previousRoot === null ? 0 : calculateInterval(previousRoot, root);
    result.push([quality, interval]);
    previousRoot = root; // Update previous root for next interval calculation
  });

  console.log(result);
  return result;
};

const DEBUG = `Dm7 G7 C Cm7 B7 Bb`;
export default function App() {
  return (
    <main>
      {Object.entries(STANDARDS).map(([key, value]) => (
        <div style={{ display: "inline-block" }}>
          <CanvasPlot
            inputData={processProgression(value).map((pair) => ({
              quality: pair[0],
              angle: pair[1],
            }))}
            title={key}
          />
        </div>
      ))}
    </main>
  );
}
