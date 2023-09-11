const user = {
    firstName: "Muhib",
    age: 22,
    aboutMe() {
        console.log(this.firstName, this.age);
    }
};

user.aboutMe();