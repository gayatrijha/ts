// let sales: number =  123_245_765;
// let course : string =" TypeScript"
// let is_published : boolean = true;
// let level ;

// function xyz(document : any){
//     console.log(document)
// }

// let number : number [] =[1, 2,3]


// tuples
// let  user : [number, string] = [1,  'gaya'];
// user.push(1)

// enums
// const small=1;
// const med=2;
// const large=3;


// const enum Size {
//     small=1, med, large 
// };
// let mySize : Size= Size.med
// console.log(mySize);


// functions

// function calculateTax(income:number, taxYear=2022 ) : number{
//     let x;
//     if((taxYear) < 2022){
//         return  income * 1.2;
//     }
//     else{
//         return income * 1.3;
//     }
// }

// calculateTax(10_000, 2022,2)
// calculateTax(23_999);


// let employe:{
//  readonly id : number,
//  name :string,
//   retire : (date :Date) => void
// } ={
    // id:1,
    // name:'gaya',
    // retire: (date: Date)=>{
    //     console.log(date)
// }
    
//     type Employee ={
        
//    readonly id:number;
//     name: string,
//     retire : (date: Date)=> void
// }

// let employee : Employee= {
//     id:1,
//     name:'gaya',
//     retire: (date: Date)=>{
//         console.log(date)
//     }


// }






// union
// function kgTolbs(weight: number | string) :number{
//  if ( typeof weight === 'number')
//     return  weight* 2.2;  
//  else 
//     return parseInt(weight) *    
// }


// intersection

// type Darge ={
//     drag:() => void
// }

// type Resize ={
//     resize :() => void
// }

// type UIwwiD =  Darge & Resize;
//  let txtBox  : UIwwiD ={
//      drag :() =>{

//      },
//      resize :()=>{}
//  }

// literal typ e

let quantity :100 = 100;

type Quaity  = 10 | 100;
let qty : Quaity =10;
