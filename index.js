let n = parseInt(prompt("faktorial tapmaq istədiyiniz ədədi girin:"));

let faktorial = 1;

for (let i = 1; i <= n; i++) {
    faktoryel *= i;
}

alert("faktorial: " + faktorial);

// faktorial tapmaq




let arr = [2, 4, 6, 7, 10, 12, 58, 9];

let enboyuk = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > enboyuk) {
        enboyuk = arr[i];
    }
}

let enkicik = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < enkicik) {
        enkicik = arr[i];
    }
}

let enboyukindex;
let enkicikindex;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === enboyuk) {
        enboyukindex = i;
    }
    if (arr[i] === enkicik) {
        enkicikindex = i;
    }
}

let yerdeyisen = arr[enboyukindex];
arr[enboyukindex] = arr[enkicikindex];
arr[enkicikindex] = yerdeyisen;

console.log("Yurdundan edilmiş reqem", arr);

// reqemlerin yerini deyisme






let arr = [2, 4, 6, 7, 10, 12, 58, 9];
let enböyükkTək = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) { 
        if (arr[i] > enböyükkTək) { 
            enböyükkTək = arr[i]; 
        }
    }
}

if (enböyükkTək !== -1) {
    console.log("Ən böyük tək:", enböyükkTək);
} else { 
    console.log("Tək rəqəm sənöl yoxdur.");
}

// ƏN BÖYÜK TƏK TAPMAQ

let arr = [2, 4, 6, 7, 10, 12, 58, 9];
let enböyükkCÜT = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 1) { 
        if (arr[i] > enböyükkCÜT) { 
            enböyükkCÜT = arr[i]; 
        }
    }
}

if (enböyükkCÜT !== 1) {
    console.log("Ən böyük CÜT:", enböyükkCÜT);
} else { 
    console.log("cüt rəqəm sənöl yoxdur.");
}
// bonus olaraq yazdığım cüt tapmaq