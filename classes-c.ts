(() => {

    // Responsibility Principle
    // Composition against inheritance

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

        constructor({ name, gender, birthDate }: PersonProperties){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProperties {
        role:string;
    }

    class User {
        public lastAccess: Date;
        public role:string;
        constructor({ role }: UserProperties) {
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    interface SettingsProperties {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory;
        public lastOpenFolder;
        constructor(
            {
                workingDirectory,
                lastOpenFolder,
            }: SettingsProperties
        ) { 
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({ 
            name, gender, birthDate,
            role, 
            workingDirectory, lastOpenFolder,
         }:UserSettingsProperties) {
            this.person = new Person({ name, gender, birthDate });
            this.user = new User({ role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder })
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