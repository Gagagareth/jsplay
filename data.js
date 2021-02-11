export const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export const chars1 = [], chars2 = [], chars3 = [];
export const nums1 = [], nums2 = [], nums3 = [];
export const nums4 = [], nums5 = [];
// export let arrOfObjects = [];
export const arrOfArrays = [[], chars1, chars2, chars3, nums1, nums2, nums3, nums4, nums5];
// { single: double: triple: unit: ten: hundred: thousand: tenthousand: }
export const arrOfObjects = function () {
    const arrObjs = [];
    for (let i = 0; i < alphabet.length; i++) {
        const a = alphabet[i];
        chars1.push(a);
        chars2.push(a + a);
        chars3.push(a + a + a);
        nums1.push(i);
        nums2.push(i * 10);
        nums3.push(i * 100);
        nums4.push(i * 1000);
        nums5.push(i * 10000);
        arrObjs.push({
            single: a,
            double: a + a,
            triple: a + a + a,
            unit: i,
            ten: i * 10,
            hundred: i * 100,
            thousand: i * 1000,
            tenthousand: i * 10000
        });
    }
    // arrOfObjects = arrObjs;
    return arrObjs;
}();