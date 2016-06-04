
if (true){
    var x = 5;
}


try {
    console.log(x);
} catch (e) {
    console.log('x is out of scope due to using let!');
}
