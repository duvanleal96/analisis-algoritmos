function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length <= 1) {
        return 0;
    }

    intervals.sort((a, b) => a[1] - b[1]);

    let removals = 0;
    let lastEnd = intervals[0][1];

    for (let k = 1; k < intervals.length; k++) {
        const [start, end] = intervals[k];
        if (start < lastEnd) {
            removals++;
        } else {
            lastEnd = end;
        }
    }

    return removals;
};