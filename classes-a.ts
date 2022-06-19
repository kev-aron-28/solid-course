(() => {

    // NO Single Responsibility Principle
    type Gender = 'M' | 'F';

    class Person {        
        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ){}
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            name: string,
            gender: Gender,
            birthDate: Date,
            role: string,
        ) { 
            super(role, name, gender, birthDate); 
        }
    }

    const userSettings = new UserSettings(
        '/admin/home', 
        '/home', 
        'Kevin',
        'M',
        new Date(),
        'admin',
    );

    console.log({ userSettings });
    

})();