const fs = require('fs');

const engdr = {
    words: 0,
    readLine: function(line_readonly, lineNum) {
      const line = line_readonly + "";
      // console.log(line.length);
      // console.log("!");
      switch (line.length) {
        case 0:
          return;
        case 1: 
          console.log(lineNum + ": " + line);
          return;
      }
      if (line == line.toUpperCase()) {
        console.log(line);
        this.words++;
      }
    },
    run: function() {
      console.log("Starting english_dictionary_reader")
      //fs.readFile('./short_file.txt', 'utf8', (err, data) => {
      fs.readFile('./english_dictionary.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        let lineNum = 0;
        data.split(/\r?\n/).forEach((line) => {
          lineNum++;
          this.readLine(line, lineNum);
        });
        console.log(lineNum);
        console.log(this.words);
      });
      console.log("Finished english_dictionary_reader");
    }
}

engdr.run();