const info = ["item", "logo", "lift", "icon", "ice", "let"];

// prefix pro _> i
// prefix min _> l


const info = ["proitem", "minlogo", "minlift", "proicon", "proice", "minlet"];


const newInfo = info.map(function (elem){
    if(elem.startsWith("i")) {
        return "pro" + elem;
    }else if (elem.startsWith("l")) {
        return "min" + elem
    }
});

// const info = ["item", "logo", "lift", "icon", "ice", "let"];

// const prefixedInfo = info.map(item => {
//   if (item.startsWith("i")) {
//     return "pro" + item;
//   } else if (item.startsWith("l")) {
//     return "min" + item;
//   }
//   return item;
// });




// const newInfo = info.map((el) => {
//     if(el.startsWith("i")){
//         return "pro" + el;
//     }else if(el.startsWith("l")){
//         return "min" + el;
//     }
// })
// console.log(newInfo);