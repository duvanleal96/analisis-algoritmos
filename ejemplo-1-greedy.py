def greedy_change(amount, coins):
    coins.sort(reverse=True)
    result = []

    for coin in coins:
        while amount >= coin:
            amount -= coin
            result.append(coin)

    return result

coins = [1, 5, 6, 9]
amount = 11

print(greedy_change(amount, coins))