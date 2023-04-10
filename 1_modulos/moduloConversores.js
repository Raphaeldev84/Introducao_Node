function convertC(c) {
    const valF = (c * (9/5)) + 32;
    return valF
}
function convertF(f) {
    const valC = ((f-32)*(5/9));
    return valC
}
module.exports = {convertC, convertF}