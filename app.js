const compress = (a, b = true) => {
	//TODO: implementați funcția
	if (typeof str !== 'string' || typeof isCompress !== 'boolean') {
      throw new Error('InvalidType');
    }
  
    if (isCompress) {
      let compressed = '';
      let count = 1;
  
      for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
          count++;
        } else {
          compressed += str[i] + count;
          count = 1;
        }
      }
  
      return compressed;
    } else {
      let decompressed = '';
      let i = 0;
  
      while (i < str.length) {
        const char = str[i];
        i++;
  
        let count = '';
  
        while (i < str.length && !isNaN(parseInt(str[i]))) {
          count += str[i];
          i++;
        }
  
        count = count === '' ? 1 : parseInt(count);
  
        for (let j = 0; j < count; j++) {
          decompressed += char;
        }
      }
  
      return decompressed;
    }
  }
  
  module.exports = compress;

  