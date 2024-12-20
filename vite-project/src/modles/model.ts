interface CombatPreferences {
    golani: number;
    armor: number;
    artillery: number;
    searchAndRescue: number;
  }
  
  interface SupportPreferences {
    targetingNCO: number;
    nimrodiSergeant: number;
    cook: number;
    sandwichFiller: number;
  }
  
  interface TechPreferences {
    fullstack: number;
    data: number;
    devops: number;
    duty: number;
  }
  
  export interface IMilitaryForm{
    name: string;
    personalNote: string;
    combatPreferences: CombatPreferences;
    supportPreferences: SupportPreferences;
    techPreferences: TechPreferences;
    submissionDate: Date;
    lastModified: Date;
    status: 'draft' | 'submitted' | 'processed';
    version: number;
  }