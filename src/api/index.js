export function getData(range) {
    return new Promise(function (resolve, reject) {
        if(range) {
            setTimeout(() => {
                let arr = []
                for (let i = 1; i <= parseInt(range); ++i) {
                    arr.push(i);
                }
                resolve(arr);
            }, 2000);
        } else {
            reject("range not found")
        }
    })
}