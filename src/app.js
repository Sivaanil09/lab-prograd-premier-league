//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var manager = [
    managerName,
    managerAge,
    currentTeam,
    trophiesWon]
  return manager
}

createManager("J Maurinho", 59, "FC Roma", 27);

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation){
  if(formation.length==0)
    return null;
  else if(formation.length==1){
    formation[1]=undefined
    formation[2]=undefined
  }
  else if(formation.length==2){
    formation[2]=undefined
  }

  var Teamformation = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }

  return Teamformation
}

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var playerArray = []
  for(i of players){
    if(i.debut == year)
      playerArray.push(i)
  }

  return playerArray
}

filterByDebut(2005)


//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  var playerArray = []
  for(i of players){
    if(i.position == position)
      playerArray.push(i)
  }
  return playerArray
}



//Progression 5 - Filter players that have won ______ award

function filterByAward(awards){
  playerArray = []
  for(i of players){
    for(j of i.awards){
      if(j.name == awards)
        playerArray.push(i)
    }
  }
  return playerArray
}

filterByAward("FIFA FIFPro World XI")

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(award, n){
  playerArray = []
  var count
  for(i of players){
    count=0
    for(j of i.awards){
      if(j.name == award)
        count+=1
    }
    if(count==n)
    playerArray.push(i)
  }

  return playerArray
}


filterByAwardxTimes("The Best FIFA Men's Player", 2)
filterByAwardxTimes("African Player of the Year", 2)
filterByAwardxTimes("PFA Premier League Team of the Year", 2)


//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(award, country){
  playerArray = []
  for(i of players){
    if(i.country == country){
      for(j of i.awards){
        if(j.name == award){
        playerArray.push(i)
        }
      }
    }
  }
  return playerArray
}

filterByAwardxCountry("Premier League Golden Boot", "England")
filterByAwardxCountry("French Player of the Year", "French")


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(n, team, age){
 playerArray = []
 var count
  for(i of players){
    count=0
    if(i.team == team && i.age < age){
      for(j of i.awards){
        count+=1
        }
      if(count >= n){
        playerArray.push(i)
      }
    }
  }
  return playerArray
}


//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
