def dp_change(amount, coins):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    prev = [-1] * (amount + 1)

    for i in range(1, amount + 1):
        for coin in coins:
            if i - coin >= 0 and dp[i - coin] + 1 < dp[i]:
                dp[i] = dp[i - coin] + 1
                prev[i] = coin

    result = []
    i = amount
    while i > 0:
        result.append(prev[i])
        i -= prev[i]

    return result

coins = [1, 5, 6, 9]
amount = 11

print(dp_change(amount, coins))