// brute force method
let num = [5,8,10,12]
let target = 17
function add_two_sum(num,target){
    for(let i = 0; i < num.length;i++){

        for(let j = i+1;j<num.length;j++){
            let current = num[i]
            const second = num[j]
            console.log(current,'currunt',second ,'second')
                const final = current + second
                console.log(final,'final')
                if (final === target){
                    return [current,second]
                }
        }
    }
    return []
}
const result = add_two_sum(num,target)
console.log(result)


// optimal sol

function optimal (num,target){
    const prev_map = new Map();
    for (let i = 0 ;i < num.length;i++){
        const currunt = num[i]
        const get_number = target - currunt
        if(prev_map.has(currunt)){
            return [prev_map.get(currunt),i]
        }else {
            prev_map.set(get_number,i)
        }
    }
    return []
}

const optimal_result = optimal(num,target)
console.log(optimal_result)

