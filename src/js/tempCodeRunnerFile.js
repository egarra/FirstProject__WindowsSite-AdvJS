function getDrunk (boozeMilliliters, massKilogramms) {
    const fuckingDrunkDog = 2;
        pureBooze = (boozeMilliliters*400) / 1000,
        boozeInBlood = pureBooze / (massKilogramms*0.7);
        console.log(pureBooze);
        console.log(boozeInBlood);

        for (let i = boozeInBlood; i < 10; i + boozeInBlood) {
            
                if(i < fuckingDrunkDog) {
                    console.log(i);
                    i += boozeInBlood;
                    console.log('get drink!');
                } else {
                    console.log("Enough! You're fucking drunk cunt!");
                }
                }

}

getDrunk(50, 90);