function randomIndex(length) {
  return Math.floor(Math.random() * (length + 1))
}

function createRandomListCharactersWithLength(lengthExpected) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const listCharacters = characters.split("");

  const result = [];

  for (let i = 0; i < lengthExpected; i++) {
    const randomCharacter = listCharacters[randomIndex(characters.length - 1)];

    result.push(randomCharacter)
  }

  return result;
}

function defineTheBestLengthOfEachGroup(lengthOfListCharacters) {
  if (lengthOfListCharacters % 3 == 0) {
    return Array(3).fill(lengthOfListCharacters / 3);
  } else {
    if (lengthOfListCharacters % 2 === 0) {
      const maxLengthEachGroup = (lengthOfListCharacters - 2) / 2;

      const indexRandomized = randomIndex(maxLengthEachGroup);

      return [indexRandomized, indexRandomized, lengthOfListCharacters - indexRandomized * 2]
    } else {
      const maxLengthEachGroup = (lengthOfListCharacters - 1) / 2;

      const indexRandomized = randomIndex(maxLengthEachGroup);

      return [indexRandomized, indexRandomized, lengthOfListCharacters - indexRandomized * 2]
    }
  }
}

function splitInto3Group(listCharacters, bestLengthOfEachGroup) {
  const group1 = [], group2 = [];
  let cloneListCharacters = [...listCharacters];

  for (let i = 0; i < bestLengthOfEachGroup[0]; i++) {
    const indexRandomized = randomIndex(cloneListCharacters.length - 1);

    group1.push(cloneListCharacters[indexRandomized]);

    cloneListCharacters = cloneListCharacters.filter((_, index) => index !== indexRandomized)
  }

  for (let j = 0; j < bestLengthOfEachGroup[1]; j++) {
    const indexRandomized = randomIndex(cloneListCharacters.length - 1);

    group2.push(cloneListCharacters[indexRandomized]);

    cloneListCharacters = cloneListCharacters.filter((_, index) => index !== indexRandomized)
  }

  const group3 = cloneListCharacters;

  console.log(`list characters randomized: ${listCharacters.toString()}\ngroup1: ${group1.toString()}\ngroup2: ${group2.toString()}\ngroup3: ${group3.toString()}`)
}

function defineValueAndRun(lengthOfListCharacters) {
  const randomListCharacters = createRandomListCharactersWithLength(lengthOfListCharacters);
  const bestLengthOfEachGroup = defineTheBestLengthOfEachGroup(lengthOfListCharacters);

  console.log(`Best length of each group: ${bestLengthOfEachGroup.toString()}`)

  splitInto3Group(randomListCharacters, bestLengthOfEachGroup);
}

// can define length of list characters at here.
const lengthOfListCharacters = 10;
defineValueAndRun(lengthOfListCharacters);
