(() => {

    // NO Single Responsibility Principle
    type Gender = 'M' | 'F';
    
    interface PersonProperties {
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor({ name, gender, birthDate}: PersonProperties){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProperties {
        role:string;
        name:string;
        gender:Gender
        birthDate:Date;
    }

    class User extends Person {
        public lastAccess: Date;
        public role:string;
        constructor({ role, name, birthDate, gender}: UserProperties) {
            super({name, gender, birthDate});
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    interface UserSettingsProperties {
        workingDirectory: string;
        lastOpenFolder: string;
        name: string;
        gender: Gender;
        birthDate: Date;
        role: string;
    }

    class UserSettings extends User {
        public workingDirectory;
        public lastOpenFolder;
        constructor(
            {
                workingDirectory,
                lastOpenFolder,
                name,
                gender,
                birthDate,
                role
            }: UserSettingsProperties
        ) { 
            super({role, name, gender, birthDate}); 
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory:'/admin/home', 
        lastOpenFolder:'/home', 
        name:'Kevin',
        gender:'M',
        birthDate:new Date(),
        role: 'admin',
    });

    console.log({ userSettings });
    

})();