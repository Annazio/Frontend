// const info = ["item", "logo", "lift", "icon", "ice", "let"];

// // prefix pro _> i
// // prefix min _> l

// const info = ["proitem", "minlogo", "minlift", "proicon", "proice", "minlet"];

const info = ["item", "logo", "lift", "icon", "ice", "let"];

const newInfo = info.map(function (elem){
    if(elem.startsWith("i")) {
        return "pro" + elem;
    }else if (elem.startsWith("l")) {
        return "min" + elem
    }
});

console.log(newInfo);

