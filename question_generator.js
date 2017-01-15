'use strict';

function QuestionGenerator() {
  var groupAddition = [
    {
      part1: '${name1} ate ${number1} ${object} in the morning, ',
      part2: '${name1} ate ${number2} ${object} in the afternoon, ',
      part3: '${name1} ate ${number3} ${object} in the evening. ',
      question: 'How many lollipops did ${name1} ate that day?',
      object: ['lollipop']
    },
    {
      part1: 'A hungry caterpillar ate ${number1} ${object} on the first day, ',
      part2: 'it ate ${number2} ${object} on the second day, ',
      part3: 'it ate ${number3} ${object} on the third day. ',
      question: 'How many gummy bears did the hungry caterpillar ate the first three days?',
      object: ['gummy bear']
    },
    {
      part1: ' ${name1} kept ${number1} ${object} in a small bag  ',
      part2: 'and ${number2} ${object} in a medium bag, ',
      part3: 'and ${number3} ${object} in a big bag. ',
      question: 'How many Twizzlers did ${name1} keep altogether?',
      object: ['twizzler']
    },
    {
      part1: '${name1} received ${number1} ${object} from her friends, ',
      part2: 'and ${number2} ${object} from her relatives,  ',
      part3: 'and ${number3} ${object} from her mom and dad. ',
      question: 'How many gifts did ${name1} receive?',
      object: ['gift']
    },
    {
      part1: 'Grandma made ${number1} ${object} on Monday, ',
      part2: ' she made ${number2} ${object} on Tuesday, ',
      part3: ' and She made ${number3} ${object} on Wednesday. ',
      question: 'How many cookies has grandma make all together?',
      object: ['cookie']
    },
    {
      part1: '${name1} has ${number1} golden ${object}, ',
      part2: '${name2} has ${number2} silver ${object}, ',
      part3: '${name3} has ${number3} bronze ${object}. ',
      question: 'How many coins do ${name1}, ${name2} and ${name3} have together?',
      object: ['coin']
    },
    {
      part1: 'There were ${number1} ${object} in the basket. ',
      part2: ' ${number2} more ${object} were added to the basket. ',
      question: 'How many apples were in the basket?',
      object: ['apple']
    },
    {
      part1: '${name1} has ${number1} ${object}, ',
      part2: '${name2} has ${number2} ${object}, ',
      part3: '${name3} has ${number3} ${object}. ',
      question: 'How many dollars do they have together?',
      object: ['dollar']
    },
    {
      part1: '${name1} and ${name2} went trick treat, ${name1} got ${number1} ${object}, ',
      part2: '${name2} has ${number2} more ${object}. ',
      question: 'How many chocolates did ${name2} get?',
      object: ['chocolate']
    },
    {
      part1: '${name1} has collected ${number1} ninja ${object}, ',
      part2: '${name2} has collected ${number2} ninja ${object}. ',
      question: 'How many ninja figures does ${name1} and ${name2} have?',
      object: ['figure']
    },
    {
      part1: '${name1} was naughty ${number1} ${object} in the morning, ',
      part2: '${name1} was mischievous ${number2} ${object} in the afternoon, ',
      part3: '${name1} was not behaving ${number3} ${object} in the evening. ',
      question: 'How many times ${name1} was not so very good during the day?',
      object: ['time']
    },
    {
      part1: '${name1} received ${number1} magic jelly ${object}, ',
      part2: 'later ${name1} received ${number2} magic jelly ${object}, ',
      part3: 'much later ${name1} received ${number3} magic jelly ${object}. ',
      question: 'How many magic jelly beans did ${name1} receive all together?',
      object: ['bean']
    },
    {
      part1: '${name1} love books. ${name1} read ${number1} ${object} in the first week, ',
      part2: '${name1} read ${number2} ${object} in the second week, ',
      part3: '${name1} read ${number3} ${object} in the third week. ',
      question: 'How many books has ${name1} read in three weeks?',
      object: ['book']
    },
    {
      part1: 'There are ${number1} ${object} in the tree,  ',
      part2: 'there are another ${number2} ${object} in Mr. Newt Scamander\'s pocket, ',
      part3: 'and there are ${number3}  ${object} in his suitcase. ',
      question: 'How many bow truckles there are all combined?',
      object: ['bow truckle']
    },
    {
      part1: ' The niffler stole ${number1} gold ${object} from new york, ',
      part2: 'he stole ${number2} gold ${object} from chicago,  ',
      part3: 'he stole ${number3} gold  ${object} from Gold Digger\'s museum ',
      question: 'How many gold coins did he steal?',
      object: ['coin']
    },
    {
      part1: 'There are ${number1} ${object} in Mr. Sweets\' left pocket, ',
      part2: 'There are ${number2} ${object} in his right pocket,  ',
      part3: 'there are ${number3} ${object} in his middle pocket. ',
      question: 'How many candy bars does Mr. Sweet have?',
      object: ['candy bar']
    }

  ];

  var groupSubtractions = [
    {
      part1: '${name1} have saved ${number1} ${object}, ',
      part2: '${name1} spent ${number2} ${object} on toys, ',
      part3: '${name1} spent ${number3} ${object} on candies. ',
      question: 'How many dollars does ${name1} have left ?',
      object: ['dollar']
    },
    {
      part1: 'The first graders are trying to reach a goal of reading ${number1} ${object} in 3 months, ',
      part2: 'the first month they read ${number2} ${object}, ',
      part3: 'the second month they read ${number3} ${object}. ',
      question: 'How many books do the first graders need to read in the third month?',
      object: ['book']
    },
    {
      part1: 'Mr. Sweet had ${number1} ${object} in his pockets, ',
      part2: 'he ate ${number2} ${object} in the morning,  ',
      part3: 'he ate ${number3} ${object} in the afternoon. ',
      question: 'How many candy bars does Mr. Sweet have left?',
      object: ['candy bar']
    },
    {
      part1: '${name1} has robot that can run for ${number1} ${object} on one charge. ',
      part2: ' ${name1} played with the robot for ${number2} ${object} last night. ',
      question: 'How much time does ${name1} have left on the charge? ',
      object: ['hour']
    },
    {
      part1: '${name1} has ${number1} gold ${object},',
      part2: '${name1} lost ${number2} gold ${object} in the morning, ',
      part3: '${name1} lost ${number3} gold ${object} in the afternoon. ',
      question: 'How many gold stars does ${name1} left?',
      object: ['star']
    },
    {
      part1: 'Harry Potter has collected ${number1} wizard ${object}, ',
      part2: ' he gave ${number2} ${object} to Ron, ',
      part3: '  he gave ${number3} ${object} to Hermione. ',
      question: 'How many wizard cards does Harry Potter have now?',
      object: ['card']
    },
    {
      part1: 'There were ${number1} in the smurf village. ',
      part2: '${number2} ${object} went off to the city, ',
      part3: '${number3} ${object} went off to the mountain, ',
      question: 'How many smurfs were still in the smurf village?',
      object: ['smurf']
    },
    {
      part1: '${number1} ${object} went to swimming in the pond. ',
      part2: ' ${number2} ${object} flew away. ',
      question: 'How many ducks are left in the pond?',
      object: ['duck']
    },
    {
      part1: '${name1} has ${number1} ${object}, ',
      part2: '${name2} has ${number2} less ${object} than ${name1}. ',
      question: 'How many lollipops does ${name1} have?',
      object: ['lollipop']
    },
    {
      part1: '${name1}  went trick treat, ${name1} got ${number1} ${object},',
      part2: 'the next day, ${name1} found out that mom and dad had eaten ${number2} ${object}, ',
      part3: 'brother had eaten ${number3} ${object}. ',
      question: 'How many chocolate did ${name1} left?',
      object: ['chocolate']
    },
    {
      part1: '${name1} has ${number1}  ${object}, ',
      part2: '${name1} gave ${number2} to  ${name2},  ',
      part3: '${name1} gave ${number3} to  ${name3}.  ',
      question: 'How many cookies does ${name1}  have left?',
      object: ['cookie']
    },
    {
      part1: '${name1} made ${number1} paper ${object}, ',
      part2: '${name2} made ${number2} paper ${object} less than ${name1}, ',
      question: 'How many paper airplanes did ${name2} make?',
      object: ['airplane']
    },
    {
      part1: '${name1} has ${number1} ${object} before going to bed, ',
      part2: '${name1} spent ${number2} ${object} on reading, ',
      part3: 'and ${number3} ${object} on singing and dancing and jumping around.  ',
      question: 'How many minutes does ${name1} have left before going to bed?',
      object: ['minute']
    },
    {
      part1: '${name1} is helping mom to shop Halloween candies. He needs to buy ${number1} ${object} in total,  ',
      part2: '${name1} so far has bought ${number2} ${object}, ',
      question: 'How many more flavors does ${name1} need to buy?',
      object: ['flavor']
    },
    {
      part1: 'There are ${number1} fantastic ${object} in the magic forest.  ',
      part2: 'One day, disaster struck.  ${number2} of them left the forest. ',
      question: 'How many fantastic beasts are still left?',
      object: ['beast']
    },
    {
      part1: 'There are ${number1} ${object} in Hogwarts magic school,',
      part2: 'only ${number2} of them know how to play Quidditch. ',
      question: 'How many students do not know how to play Quidditch?',
      object: ['student']
    }
  ];

  var commonNames = ['James',  'Mary',
    'John',  'Patricia',
    'Robert',  'Jennifer',
    'Michael',  'Elizabeth',
    'William',  'Linda',
    'David',  'Barbara',
    'Richard',  'Susan',
    'Joseph',  'Jessica',
    'Thomas',  'Margaret',
    'Charles',  'Sarah',
    'Christopher',  'Karen',
    'Daniel',  'Nancy',
    'Matthew',  'Betty',
    'Anthony',  'Dorothy',
    'Donald',  'Lisa',
    'Mark',  'Sandra',
    'Paul',  'Ashley',
    'Steven',  'Kimberly',
    'George',  'Donna',
    'Kenneth',  'Carol',
    'Andrew',  'Michelle',
    'Joshua',  'Emily',
    'Edward',  'Helen',
    'Brian',  'Amanda',
    'Kevin',  'Melissa',
    'Ronald',  'Deborah',
    'Timothy',  'Stephanie',
    'Jason',  'Laura',
    'Jeffrey',  'Rebecca',
    'Ryan',  'Sharon',
    'Gary',  'Cynthia',
    'Jacob',  'Kathleen',
    'Nicholas',  'Shirley',
    'Eric',  'Amy',
    'Stephen',  'Anna',
    'Jonathan',  'Angela',
    'Larry',  'Ruth',
    'Scott',  'Brenda',
    'Frank',  'Pamela',
    'Justin',  'Virginia',
    'Brandon',  'Katherine',
    'Raymond',  'Nicole',
    'Gregory',  'Catherine',
    'Samuel',  'Christine',
    'Benjamin',  'Samantha',
    'Patrick',  'Debra',
    'Jack',  'Janet',
    'Alexander',  'Carolyn',
    'Dennis',  'Rachel',
    'Jerry',  'Heather',
    'Tyler',  'Maria',
    'Aaron',  'Diane',
    'Henry',  'Emma',
    'Douglas',  'Julie',
    'Peter',  'Joyce',
    'Jose',  'Frances',
    'Adam',  'Evelyn',
    'Zachary',  'Joan',
    'Walter',  'Christina',
    'Nathan',  'Kelly',
    'Harold',  'Martha',
    'Kyle',  'Lauren',
    'Carl',  'Victoria',
    'Arthur',  'Judith',
    'Gerald',  'Cheryl',
    'Roger',  'Megan',
    'Keith',  'Alice',
    'Jeremy',  'Ann',
    'Lawrence',  'Jean',
    'Terry',  'Doris',
    'Sean',  'Andrea',
    'Albert',  'Marie',
    'Joe',  'Kathryn',
    'Christian',  'Jacqueline',
    'Austin',  'Gloria',
    'Willie',  'Teresa',
    'Jesse',  'Hannah',
    'Ethan',  'Sara',
    'Billy',  'Janice',
    'Bruce',  'Julia',
    'Bryan',  'Olivia',
    'Ralph',  'Grace',
    'Roy',  'Rose',
    'Jordan',  'Theresa',
    'Eugene',  'Judy',
    'Wayne',  'Beverly',
    'Louis',  'Denise',
    'Dylan',  'Marilyn',
    'Alan',  'Amber',
    'Juan',  'Danielle',
    'Noah',  'Brittany',
    'Russell',  'Madison',
    'Harry',  'Diana',
    'Randy',  'Jane',
    'Philip',  'Lori',
    'Vincent',  'Mildred',
    'Gabriel',  'Tiffany',
    'Bobby',  'Natalie',
    'Johnny',  'Abigail',
    'Howard',  'Kathy'];
  
  return {
    additionQuestions: groupAddition,
    subtractionQuestions: groupSubtractions,
    commonNames: commonNames
  }
}

module.exports = QuestionGenerator;