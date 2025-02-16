import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ImageURl = "https://bharatpur12.org/new/public/storage/";
export const englishToNepaliMap: { [key: string]: string } = {
  a: "अ",
  b: "ब",
  c: "स",
  d: "द",
  e: "इ",
  f: "फ",
  g: "ग",
  h: "ह",
  i: "इ",
  j: "ज",
  k: "क",
  l: "ल",
  m: "म",
  n: "न",
  o: "ओ",
  p: "प",
  q: "क",
  r: "र",
  s: "स",
  t: "त",
  u: "उ",
  v: "व",
  w: "व",
  x: "क",
  y: "य",
  z: "ज",
  A: "आ",
  B: "भ",
  C: "च",
  D: "ढ",
  E: "ई",
  F: "फ़",
  G: "घ",
  H: "ह",
  I: "ई",
  J: "झ",
  K: "ख",
  L: "ल",
  M: "म्",
  N: "ण",
  O: "ओ",
  P: "फ",
  Q: "क",
  R: "ऱ",
  S: "श",
  T: "ठ",
  U: "ऊ",
  V: "व",
  W: "व",
  X: "क्ष",
  Y: "य",
  Z: "ज़",
  "1": "१",
  "2": "२",
  "3": "३",
  "4": "४",
  "5": "५",
  "6": "६",
  "7": "७",
  "8": "८",
  "9": "९",
  "0": "०",
  "!": "!",
  "@": "@",
  "#": "#",
  $: "₹",
  "%": "%",
  "^": "^",
  "&": "&",
  "*": "*",
  "(": "(",
  ")": ")",
  _: "_",
  "+": "+",
  "=": "=",
  "-": "—",
  "/": "।",
  ",": " ",
  ".": "।",
  ":": ":",
  ";": ";",
  "'": "’",
  '"': "“",
  "<": "‹",
  ">": "›",
  "?": "?",
  "\\": "\\",
  "|": "|",
  "{": "{",
  "}": "}",
  "[": "[",
  "]": "]",
  "`": "ऽ",
  "~": "~",
  " ": " ",
};
export const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

export const modules = {
  toolbar: toolbarOptions,
};
export const ButtonLoader = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        size="xl"
        style={{ color: "#04fa00", padding: "2px" }}
      />
    </>
  );
};
