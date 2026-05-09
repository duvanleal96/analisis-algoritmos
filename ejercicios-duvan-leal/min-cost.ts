function minCostClimbingStairs(cost: number[]): number {
    let prev2 = 0; // dp[i-2]
    let prev1 = 0; // dp[i-1]

    for (let i = 0; i < cost.length; i++) {
        const current = cost[i] + Math.min(prev1, prev2);
        prev2 = prev1;
        prev1 = current;
    }

    return Math.min(prev1, prev2);
}