const spinArray = [
  {
    text: "\r|   ",
    time: 100
  },
  {
    text: "\r/   ",
    time: 300
  },
  {
    text: "\r-   ",
    time: 500
  },
  {
    text: "\r\\   ",
    time: 700
  },
  {
    text: "\r|   ",
    time: 900
  },
  {
    text: "\r/   ",
    time: 1100
  },
  {
    text: "\r-   ",
    time: 1300
  },
  {
    text: "\r\\   ",
    time: 1500
  },
  {
    text: "\r|   ",
    time: 1700
  }
];

for (const el of spinArray) {
  setTimeout(() => {
    process.stdout.write(el.text);
  }, el.time);
}
