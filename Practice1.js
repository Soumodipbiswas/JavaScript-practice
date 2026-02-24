const profile = {
    userName : "soumodipbiswas",
    isFollow : true,
    post : 195,
    followers : 56900,
    following : 50,
    Name : "Soumodip Biswas",
    details : "NIT college | Java developer | Tech enthusiast"
};
console.log(profile.details);
console.log(profile.followers);
for (let key in profile) {
    console.log("Key= ",key, "Value= ", profile[key]);
}