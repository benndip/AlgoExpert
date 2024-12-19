func breakingRecords(scores: [Int]) -> [Int] {
    // Write your code here
    var max = 0
    var min = 0
    var checkingArray: [Int] = []
    var checkingNumber = 0
    var currentMinScore = scores[0]
    var currentMaxScore = scores[0]
    for i in 0..<scores.count {
        checkingNumber = scores[i]
        checkingArray.append(checkingNumber)
        if i>0{
            checkingArray.sort()
            if checkingArray.firstIndex(of:checkingNumber) == 0 && checkingNumber != currentMinScore {
                min += 1
                currentMinScore = checkingNumber
            }
            else if checkingArray.firstIndex(of:checkingNumber) == (checkingArray.count - 1) && checkingNumber != currentMaxScore{
                max += 1
                currentMaxScore = checkingNumber
            }
        }
    }
    return [max, min]
}