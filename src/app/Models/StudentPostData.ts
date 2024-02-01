import Student from "./Student";

export default interface StudentPostData extends Student{
    name: string;
    department: string;
    email: string;
    mark1: number;
    mark2: number;
    mark3: number;
    mark4: number;
    mark5: number;
    total: number;
    average: number;
  }