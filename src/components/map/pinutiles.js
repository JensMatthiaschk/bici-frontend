function useRegex(input) {
    let regex = /LatLng\([^)]*\)/i;
    return regex.test(input);
}
console.log(useRegex('LatLng(52.486334, 13.574295)'))