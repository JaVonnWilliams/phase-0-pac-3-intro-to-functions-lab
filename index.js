function shout(string) {
return (string).toUpperCase(); 
}

function whisper(string) {
    return (string).toLowerCase();
}


function logshout (gym) {
    console.log(gym.toLowerCase( ));
  }
  


  function logshout (gym) {
    console.log(gym.toUpperCase( ));
  }
  // describe('sayHiToGrandma(string)', function() {
  //   it('returns "I can\'t hear you!" if `string` is lowercase', function() {
  //     expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  //   })
  
  //   it('returns "YES INDEED!" if `string` is uppercase', function() {
  //     expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  //   })
  
  //   it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
  //     expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  //   })
  // })
  function sayHiToHeadphonedRoommate (gym) {
    const cantUnswer = "I can't hear you!";
    const yesUnswer = "YES INDEED!";
    const lovUnswer = "I would loce to!";
    if (gym.toLowerCase(gym) === gym) {
      return cantUnswer;
    }
    else if (gym.toUpperCase(gym) === gym) {
      return yesUnswer;
    }
    else if ("I would love to!" === gym) {
      return lovUnswer
    }
  }

