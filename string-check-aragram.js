
        // Check is Anagram _____
        // 'hello' = 'llohe' -> true
        // else false

        function checkAnagram(string1, string2) {
            if (string1.length !== string2.length) {
                return false
            }

            let counter = {}
            for (let letter of string1) {
                counter[letter] = (counter[letter] || 0) + 1;
                // console.log(counter[letter])
            }

            for (let item of string2) {
                if (!counter[item]) {
                    return false
                }
                counter[item] -= 1;
            }
            return true;
        }

        let result = checkAnagram('hello', 'lhleo');
        console.log(result)

        // quatratic time complex 

 