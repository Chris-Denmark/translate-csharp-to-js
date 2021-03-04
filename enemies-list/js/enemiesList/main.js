const main = () => {
  console.log("My Enemies List!")
  console.log("----------------")
  const enemies = [
    {
      firstName: "Joshua",
      lastName: "Flowers",
      offenses: {
        firstOffense: "Being a jerk to me in elementary school",
        secondOffense: "Not being nice to me in elementary school"
      },
      isReallyHated = true
    },
    {
      firstName: "Darth",
      lastName: "Vader",
      offenses: {
        firstOffense: "Cut off Luke's hand",
        secondOffense: "Murdered all those kids",
        thirdOffense: "Unkind management practices"
      },
      isReallyHated: false
    },
    {
      firstName: "Betty",
      lastName: "Rudelady",
      offenses: {
        firstOffense: "Phone calls in the theater",
        secondOffense: "Phone calls on the bus",
        thirdOffense: "Phone calls in line at the grocery store",
        fourthOffense: "Poor conversationalist"
      },
      isReallyHated: true
    },
    {
      firstName: "Leon",
      lastName: "Peck",
      offenses: {
        firstOffense: "Keeps giving me a hotplate"
      },
      isReallyHated: false
    }
  ]


  enemies.forEach(enemy => {
    if (enemy.IsReallyHated) {
      console.log(`${enemy.FirstName} ${enemy.LastName} (Really, really dislike!)`)
    } else {
      console.log(`${enemy.FirstName} ${enemy.LastName}`)
    }
  });
}

main()