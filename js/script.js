// // regullar function
// function sum1(a,b) {
//     return a+b
// }

// // exspress function
// const sum2= function (a,b) {
//     return a+b
// }

// // arrow function
// const sum=(a,b) =>{
//     return a+b;
// }

// IIFE
// (function (params) {
//     var test =`salom bolalar`
//     function abs() {
//         console.log(`abs`);

//     }
// })()

// OBJECT

// let user ={
//     name:`alisher`,
//     age:90,
//     gmail:`alisher@gmail.com`,
//     phones:[`+9982324534`, `+324245643`]
// }
// console.log(user);
// console.log(user.name);

// 1-misol

// let arr = [ "mersades", "BMW", "KIA", "nexia2"];
// let sum1=arr.filter(function (value) {
//     if (value.length > 5) {
//         return value;
//     }
// })

// let sum = sum1.map(function (value) {

//   if (value.length > 5) {
//    return value.toUpperCase();
//   }
//   return value;
// });
// console.log(sum);

// 2-misol
// let user = [
//     { name: "Dilxushbek", age: 15 },
//     { name: "Saidburxon", age: 90 },
//     { name: "john", age: 21 }
// ];

// let res = user.find(function (value) {
//     return value.age > 20;
// });

// console.log(res);

// 3-misol

// let narxlar = [5000, 15000, 12000, 9000, 25000, 8000];

// function umumiyNarx(arg) {
//     const kattaNarxlar = arg.filter(function(value) {
//         return value > 10000;
//     });

//     const summa = kattaNarxlar.reduce(function(accumulator, narx) {
//         return accumulator + narx;
//     }, 0);

//     return summa;
// }

// let natija = umumiyNarx(narxlar);
// console.log(natija);

// 4-misol
// function tekshirSonlar(arg) {
//     if (arg.every(function (value) {
//         return value > 0;
//     })) {
//         console.log("Barcha sonlar musbat");
//     } else {
//         console.log("Musbat bo'lmagan sonlar bor");
//     }

//     if (sonlar.some(function (value) {
//         return value > 100;
//     })) {
//         console.log("Katta son bor");
//     }
// }

// let sonlarMassivi = [10, 20, 30, 100, 150];

// tekshirSonlar(sonlarMassivi);

// 5-misol
// function kvadratHisobla(sonlar) {

//     let kvadratlar = sonlar.map(function (son) {
//         return son * son;
//     });

//     return kvadratlar;
// }

// function konsolgaChiqar(kvadratlar) {
//     kvadratlar.forEach(function (value) {
//         console.log(value);
//     });
// }
// let sonlarMassivi = [1, 2, 3, 4, 5];
// let kvadratlarMassivi = kvadratHisobla(sonlarMassivi);
// konsolgaChiqar(kvadratlarMassivi);

// 6-misol
// let maoshlar = [1500, 2500, 3200, 1800, 2000, 2900];

// function umumiyMaoshHisobla(maoshlar) {
//   let tanlanganMaoshlar = maoshlar.filter(function (value) {
//     return value >= 2000;
//   });

//   let kopaytirilganMaoshlar = tanlanganMaoshlar.map(function (value) {
//     return value * 1.1;
//   });

//   let umumiyMaosh = 0;

//   kopaytirilganMaoshlar.forEach(function (value) {
//     umumiyMaosh += value;
//   });

//   return umumiyMaosh;
// }

// let natija = umumiyMaoshHisobla(maoshlar);
// console.log(natija);

// 7-misol
// let talabalar = [
//     { ism: 'Ali', yosh: 18, baho: 75 },
//     { ism: 'Dilshod', yosh: 20, baho: 85 },
//     { ism: 'Shukrona', yosh: 19, baho: 95 },
//     { ism: 'John', yosh: 21, baho: 70 },
//     { ism: 'Aziz', yosh: 22, baho: 80 }
// ];

// function birinchiTalabaTop(talabalar) {
//     let birinchiTalaba = talabalar.find(function (talaba) {
//         return talaba.baho >= 80;
//     });

//     if (birinchiTalaba) {
//         return `${birinchiTalaba.ism}, ${birinchiTalaba.yosh} yoshda`;
//     } else {
//         return '80 ball olgan talaba topilmadi';
//     }
// }

// function yuqoriBallOlganganlar(talabalar) {
//     let yuqoriBalliTalabalar = talabalar
//         .filter(function (talaba) {
//             return talaba.baho > 80;
//         })
//         .map(function (talaba) {
//             return talaba.ism.toUpperCase();
//         });

//     return yuqoriBalliTalabalar;
// }

// let birinchiTalaba = birinchiTalabaTop(talabalar);
// console.log(`Kamida 80 ball olgan birinchi talaba: ${birinchiTalaba}`);

// let yuqoriBalliTalabalar = yuqoriBallOlganganlar(talabalar);
// console.log('80 dan yuqori ball olgan talabalar:', yuqoriBalliTalabalar);


// YOZUVGA OID
// 1-misol
// function kattaHarfgaAylantir(str) {
//     return str.toUpperCase();
// }

// let matn = "Salom dunyo!";
// let natija = kattaHarfgaAylantir(matn);
// console.log(natija);

// 2-misol
// function substringTekshirish(asosiyMatn, substring) {
//     return asosiyMatn.includes(substring);
// }

// let matn = "BMW,mers,kia";
// let substring = "BMW";
// let natija = substringTekshirish(matn, substring);

// console.log(natija); 

// 3-misol
// function substringAlmashtirish(matn) {
//     let qismlari = matn.split("JavaScript");
//     return qismlari.join("JS");
// }

// let matn = "JavaScript  kuchli dasturlash til. JavaScriptni o'rganish juda qiyin va qiziqarli😁";
// let natija = substringAlmashtirish(matn);

// console.log(natija);

// lekin vs code smile ni xatolik berman va brauzerga chiqqardi juda qiziq !!!


// 5-misol
function boshJoylarniOlibTashla(matn) {
    return matn.trim();
}

let matn = "    hello!World!    ";
let natija = boshJoylarniOlibTashla(matn);

console.log(`"${natija}"`);
