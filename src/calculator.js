function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = ",";
    let numberString = numbers;
  
    // Handle custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = numbers[2];
      numberString = numbers.slice(delimiterEndIndex + 1);
    }
  
    // Create a regular expression for splitting numbers
    const regex = new RegExp(`[${delimiter}\n]`);
    const numberArray = numberString.split(regex).map(Number);
  
    // Check for negative numbers
    const negatives = numberArray.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }
  
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };
  