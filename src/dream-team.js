module.exports = function createDreamTeam(team) {
  
  if (!team) return false
  const strArray = [];
  for (let i=0; i < team.length; i++){
    
    if (typeof(team[i])=='string'){
      
      strArray.push(team[i].trim().toString().toUpperCase());
    }
  }
  
  const sortedArray = strArray.sort();
  

  let teamName = '';

  for (let j=0; j < sortedArray.length; j++){
    
    teamName = teamName + sortedArray[j].charAt(0);
  }
  

  return teamName;
  
};