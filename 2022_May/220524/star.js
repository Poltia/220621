
for(let i = 0; i<5; i++) {
    for(let k = 0; k<=i; k++) {
        document.write('*');
        console.log(i, k);
    }
    document.write('<br>');
}  
document.write('<br>')
for(let i = 4; i>=0; i--) {
    for(let k = 0; k<=i; k++) {
        document.write('*');
        console.log(i, k);
    }
    document.write('<br>');
}
document.write('<br>')

for(let i = 0; i<5; i++) {
    for(let j = 3; j>=i; j--) {
        document.write('&nbsp');
    }
    for(let k = 0; k<=i; k++) {
        document.write('*');
        console.log(i, k);
    }
    document.write('<br>');
}
document.write('<br>')
for(let i = 4; i>=0; i--) {
    for(let j = 3; j>=i ; j--) {
        document.write('&nbsp')
    }
    for(let k = 0; k<=i; k++) {
        document.write('*');
        console.log(i, k);
    }
    document.write('<br>');
}